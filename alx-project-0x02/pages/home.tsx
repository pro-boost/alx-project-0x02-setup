import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
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
    <>
      <Header />
      <div className="flex items-center justify-center h-screen gap-12">
        <h1 className="text-4xl font-bold text-black">Home Page</h1>
        <Card title="Card 1" content="Card 1 content" />
        <Card title="Card 2" content="Card 2 content" />
        <Card title="Card 3" content="Card 3 content" />
        <Button
          size="large"
          shape="rounded-sm"
          text="Add Card"
          background="bg-blue-600 text-white"
          onClick={handleButtonClick}
        />

        {isPostModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <PostModal onClick={handleCloseModal} />
          </div>
        )}
      </div>
    </>
  );
}
