import mongoose, { Schema, Document, Model, models } from "mongoose";

interface IPost extends Document {
  title: string;
  content: string;
  author: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    // 🔥 αλλάζουμε το default ώστε να δείχνει στο /uploads/
    thumbnail: { type: String, default: "/uploads/default.jpg" },
  },
  { timestamps: true }
);

const Post: Model<IPost> =
  models.Post || mongoose.model<IPost>("Post", PostSchema);

export default Post;
