// pages/api/posts/[id]/delete.ts
import dbConnect from "@/lib/db";
import Post from "@/models/Post";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  if (req.method === "DELETE") {
    try {
      const deleted = await Post.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({ message: "Το άρθρο δεν βρέθηκε." });
      }
      return res.status(200).json({ message: "Το άρθρο διαγράφηκε." });
    } catch (error) {
      return res.status(500).json({ message: "Σφάλμα κατά τη διαγραφή." });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
