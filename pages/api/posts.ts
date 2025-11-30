import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import dbConnect from "@/lib/db";
import Post from "@/models/Post";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  await dbConnect();

  if (req.method === "POST") {
    if (!session) {
      return res.status(401).json({ message: "Μη εξουσιοδοτημένος" });
    }

    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Συμπληρώστε όλα τα πεδία" });
    }

    const post = new Post({
      title,
      content,
      author: session.user?.email || "unknown",
    });

    await post.save();

    return res.status(201).json({ message: "Το άρθρο αποθηκεύτηκε!" });
  }

  if (req.method === "GET") {
    const posts = await Post.find().sort({ createdAt: -1 });
    return res.status(200).json({ posts });
  }

  res.setHeader("Allow", ["POST", "GET"]);
  res.status(405).end(`Μέθοδος ${req.method} δεν επιτρέπεται`);
}
