import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Add more authentication providers here as needed
  ],
  pages: {
    signIn: '/login', // Redirect to this page for sign-in
  },
  // Add any additional NextAuth configuration options here
});
