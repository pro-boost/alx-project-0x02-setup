import { type PostModalProps } from "@/interfaces";
import { useState } from "react";
import Button from "./Button";

const PostModal: React.FC<PostModalProps> = ({ onClick }) => {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ title: "", content: "" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Create New Post
          </h2>
          <button
            onClick={onClick}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              id="title"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter title"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <input
              type="text"
              name="content"
              value={formData.content}
              id="content"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter content"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="submit"
              size="small"
              shape="rounded-md"
              text="Submit"
              background="font-medium text-white bg-blue-600 hover:bg-blue-700 "
            />
            <Button
              size="medium"
              shape="rounded-md"
              text="Cancel"
              background="bg-gray-100 hover:bg-gray-200 text-gray-700"
              onClick={onClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
