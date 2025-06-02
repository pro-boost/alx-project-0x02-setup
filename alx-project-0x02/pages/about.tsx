import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">About Page</h1>
      <Button
        size="text-sm px-2 py-1"
        shape="rounded-sm"
        text="Add Card"
        background="bg-blue-600 text-white"
      />
      <Button
        size="text-md px-4 py-2"
        shape="rounded-md"
        text="Add Card"
        background="bg-red-600 text-white"
      />
      <Button
        size="text-lg px-6 py-3"
        shape="rounded-lg"
        text="Add Card"
        background="bg-green-600 text-white"
      />
    </div>
  );
};
export default AboutPage;
