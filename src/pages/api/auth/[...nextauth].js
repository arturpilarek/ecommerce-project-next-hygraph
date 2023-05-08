import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { verifyPassword } from "../../../../helper/auth"
import { connectToDatabase } from "../../../../lib/mongodb"

export default NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const client = await connectToDatabase()

        const usersCollection = client.db("users-db").collection("users")

        const user = await usersCollection.findOne({
          email: credentials?.email,
        })

        if (!user) {
          client.close()
          throw new Error("No user found!")
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        )

        if (!isValid) {
          client.close()
          throw new Error("Invalid password")
        }

        client.close()
        return {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.accessToken = user.accessToken
      }
      return token
    },
    async session({ session, token, user }) {
      session.user = {
        ...session.user,
        ...token.token.user,
      }
      return session
    },
  },
})
