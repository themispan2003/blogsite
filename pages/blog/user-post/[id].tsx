import { GetServerSideProps } from "next";
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";
import Layout from "@/components/Layout";
import Image from "next/image";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  await dbConnect();

  // Αν το id δεν είναι έγκυρο ObjectId, επέστρεψε 404
  if (!mongoose.Types.ObjectId.isValid(id as string)) {
    return { notFound: true };
  }

  try {
    const post = await Post.findById(id).lean();

    if (!post) {
      return { notFound: true };
    }

    const serializedPost = {
      ...post,
      _id: post._id.toString(),
      createdAt: post.createdAt?.toISOString() || null,
      updatedAt: post.updatedAt?.toISOString() || null,
      date: post.createdAt?.toISOString() || null,
      imageUrl: post.thumbnail || "/uploads/default.jpg", // ✅ πρόσθεσε αυτό
    };

    return {
      props: {
        post: serializedPost,
      },
    };
  } catch (err) {
    console.error("Σφάλμα κατά την εύρεση άρθρου:", err);
    return { notFound: true };
  }
};

export default function UserPostPage({ post }) {
  if (!post) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto mt-20 text-center text-red-400">
          Το άρθρο δεν βρέθηκε.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-3xl mx-auto mt-10 space-y-6 px-4">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-sm text-zinc-400">
          Από: {post.author} • {new Date(post.date).toLocaleDateString("el-GR")}
        </p>

        {post.imageUrl && (
          <div className="w-full h-[300px] relative rounded overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}

        <div className="text-lg leading-relaxed whitespace-pre-line text-zinc-200">
          {post.content}
        </div>
      </article>
    </Layout>
  );
}
