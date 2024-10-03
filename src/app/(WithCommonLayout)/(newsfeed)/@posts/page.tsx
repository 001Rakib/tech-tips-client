import PostCard from "@/src/components/modules/Home/PostCard";
import { getPosts } from "@/src/services/Posts";
import { IPost } from "@/src/types";

const Posts = async () => {
  const { data: posts } = await getPosts();

  return (
    <div className="max-w-7xl mx-auto">
      {posts.map((post: IPost) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
