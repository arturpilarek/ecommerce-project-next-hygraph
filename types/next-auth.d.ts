import NextAuth from "next-auth"

declare module "next-auth" {
//   To override useseSession user type
  interface Session {
    user: {
        email: string
        firstName: string
        lastName: string    
        _id: string
    }
  }
}