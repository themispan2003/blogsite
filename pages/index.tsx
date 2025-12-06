import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "data/posts");
  const filenames = fs.readdirSync(postsDir);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt || "",
      thumbnail: data.thumbnail || "/images/default.jpg", // default εικόνα
    };
  });

  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: { posts: sortedPosts.slice(0, 3) }, // δείξε τα 3 πιο πρόσφατα
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-6">Καλώς ήρθες στο blog!</h1>
        <p className="text-zinc-400 mb-10">
          Δημοσιεύω τα επιστημονικά μου άρθρα, μελέτες και παρατηρήσεις.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Πρόσφατα Άρθρα</h2>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Link href={`/all-posts/${post.slug}`}>
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={120}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </Link>
              </div>
              <div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg text-blue-400 hover:underline font-semibold">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-zinc-400 text-sm">{post.date} · {post.author}</p>
                <p className="text-zinc-300 text-sm mt-1">{post.excerpt}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link href="/all-posts">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Δες όλα τα άρθρα
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
