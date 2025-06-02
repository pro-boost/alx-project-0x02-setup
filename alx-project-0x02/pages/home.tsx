import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

export default function HomePage() {
  const [isPostModal, setIsPostModal] = useState(false);
  const handleButtonClick = () => {
    setIsPostModal(true);
  };
  const handleCloseModal = () => {
    setIsPostModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <Card title="Card 1" content="Card 1 content" />
      <Card title="Card 2" content="Card 2 content" />
      <Card title="Card 3" content="Card 3 content" />
      <button className="bg-blue-500 text-white" onClick={handleButtonClick}>
        Add new card
      </button>
      {isPostModal && <PostModal onClick={handleCloseModal} />}
    </div>
  );
}
