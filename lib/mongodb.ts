import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) throw new Error("Missing MONGODB_URI env variable");

let cached = global.mongoose || { conn: null };

export default async function dbConnect() {
  if (cached.conn) return cached.conn;

  cached.conn = await mongoose.connect(MONGODB_URI);
  global.mongoose = cached;

  return cached.conn;
}
