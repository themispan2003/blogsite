import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "data/posts");
  const filenames = fs.readdirSync(postsDir);

  const posts = filenames.map((file) => {
    const src = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data } = matter(src);

    return {
      slug: file.replace(".md", ""),
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt || "",
      thumbnail: data.thumbnail || "/images/default.jpg",
    };
  });

  return {
    props: {
      posts: posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    },
  };
}

export default function Blog({ posts }) {
  const { data: session } = useSession();

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 mt-10 space-y-8">
        <h1 className="text-4xl font-bold">Όλα τα άρθρα</h1>

        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Αποσύνδεση ({session.user.name})
          </button>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Σύνδεση με Google
          </button>
        )}

        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="flex flex-col md:flex-row gap-4">
              <Link href={`/blog/${post.slug}`} className="flex-shrink-0">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={220}
                  height={130}
                  className="rounded-md object-cover"
                />
              </Link>

              <div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold text-blue-500 hover:underline">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-zinc-400">
                  {post.date} • {post.author}
                </p>
                <p className="mt-2 text-zinc-300">{post.excerpt}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  ); 
}