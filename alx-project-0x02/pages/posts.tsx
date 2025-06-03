import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { useEffect, useState } from "react";
import { Post } from "@/interfaces";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="m-5">
      <Header />
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
  );
}
