import { useLoaderData } from "react-router-dom";
import { HomeLoaderData } from "../types/types";
import Post from "../components/home/post";

export default function Home() {
  const data = useLoaderData();

  const { posts } = data as HomeLoaderData;

  return (
    <div className="bg-white w-1/2 border border-solid border-black p-2 shadow-md rounded flex flex-col gap-y-4">
      {posts.map((post) => (
        <Post title={post.title} body={post.body} author={post.author} key={post.id} />
      ))}
    </div>
  );
}
