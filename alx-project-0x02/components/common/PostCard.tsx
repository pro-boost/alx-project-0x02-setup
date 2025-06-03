import { type PostCardProps } from "@/interfaces/index";

const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-red-100  rounded-lg text-black text-xl flex flex-col gap-2 p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="bg-white rounded-lg p-2">{content}</p>
      <p>userId: {userId}</p>
    </div>
  );
};
export default PostCard;
