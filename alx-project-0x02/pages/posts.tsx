import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostsProps } from "@/interfaces";

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Header />
      <div className="m-5">
        <h1 className="text-center p-4 text-4xl font-bold">Posts</h1>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-4">
          {posts.slice(0, 5).map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
