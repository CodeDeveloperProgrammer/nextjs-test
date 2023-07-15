export const metadata = {
  title: "Blog",
  description: "Blog.jsx",
};


import TitlePage from "@/components/TitlePage";
import Link from "next/link";

export const POST = [
  {
    id: 1,
    title: "Post 1",
    slug: "post-1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    title: "Post 2",
    slug: "post-2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    title: "Post 3",
    slug: "post-3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const Blog = () => {
  return (
    <>
      <TitlePage title="Blog" />
      <Link href="/perfil">ir a perfil</Link>
      <main className="container mx-auto">
        <div className="grid gap-5">
          {POST.map((post) => (
            <div key={post.id} className="shadow rounded-md p-5">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <Link href={`/blog/${post.slug}`}>Más información</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
export default Blog;
