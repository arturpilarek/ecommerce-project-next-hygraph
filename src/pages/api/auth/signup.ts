import { hashPassword } from "../../../../helper/auth"
import { connectToDatabase } from "../../../../lib/mongodb"
import type { NextApiRequest, NextApiResponse } from "next";

export interface SignupApiRequest extends NextApiRequest {
    body: {
        email: string; 
        password: string;
        firstName: string;
        lastName: string;
    };
  }

async function handler(req: SignupApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return
  }

  const { email, password, firstName, lastName } = req.body

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input - password should be at least 7 characters long.",
    })
    return
  }

  const client = await connectToDatabase()

  const db = client.db("users-db")

  const existingUser = await db.collection("users").findOne({ email: email })

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" })
    client.close()
    return
  }

  const hashedPassword = await hashPassword(password)

  const result = db
    .collection("users")
    .insertOne({ email: email, password: hashedPassword, firstName, lastName })

  res.status(201).json({ message: "Created user!" })
}

export default handler
