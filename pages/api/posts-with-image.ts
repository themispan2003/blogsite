// pages/api/posts-with-image.ts

import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import dbConnect from "@/lib/db";
import Post from "@/models/Post";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ message: "Unauthorized" });

  if (req.method !== "POST") return res.status(405).end();

  const form = new IncomingForm({ multiples: false, keepExtensions: true });
  const uploadDir = path.join(process.cwd(), "public/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  form.uploadDir = uploadDir;

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ message: "Upload error" });

    // ✅ Μορφοποίηση πεδίων
    const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
    const content = Array.isArray(fields.content) ? fields.content[0] : fields.content;

    let thumbnail = "/images/default.jpg";

    // ✅ Έλεγχος και μετακίνηση εικόνας
    const file = Array.isArray(files.image) ? files.image[0] : files.image;
    if (file && file.filepath) {
      const ext = path.extname(file.originalFilename || ".jpg");
      const filename = `${uuidv4()}${ext}`;
      const destPath = path.join(uploadDir, filename);
      fs.renameSync(file.filepath, destPath);
      thumbnail = `/uploads/${filename}`;
    }

    try {
      await dbConnect();

      const newPost = new Post({
        title,
        content,
        author: session.user.name,
        thumbnail, // ✅ Βεβαιώσου ότι το schema έχει thumbnail (δες παρακάτω)
      });

      await newPost.save();
      return res.status(200).json({ message: "Το άρθρο αποθηκεύτηκε!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Database error" });
    }
  });
}
