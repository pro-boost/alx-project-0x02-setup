import { type CardProps } from "@/interfaces";
const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">{title}</h1>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
};
export default Card;
