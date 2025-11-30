import mongoose from "mongoose";
import Post from "./models/Post"; // προσαρμογή στο σωστό path
import dotenv from "dotenv";

dotenv.config(); // φορτώνει MONGODB_URI από .env.local

async function fixThumbnails() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("✅ Συνδέθηκα στη MongoDB");

    // Βρες όλα τα posts που έχουν λάθος path
    const posts = await Post.find({ thumbnail: { $regex: "^/images/" } });

    console.log(`🔍 Βρέθηκαν ${posts.length} posts για διόρθωση`);

    for (const post of posts) {
      const oldPath = post.thumbnail;
      const fileName = oldPath.split("/").pop(); // πάρε μόνο το όνομα αρχείου
      const newPath = `/uploads/${fileName}`;

      post.thumbnail = newPath;
      await post.save();

      console.log(`✔️ Διορθώθηκε: ${oldPath} → ${newPath}`);
    }

    console.log("🎉 Όλα τα posts διορθώθηκαν!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Σφάλμα:", err);
    process.exit(1);
  }
}

fixThumbnails();
