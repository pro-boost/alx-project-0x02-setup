import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <Card title="Card 1" content="Card 1 content" />
      <Card title="Card 2" content="Card 2 content" />
      <Card title="Card 3" content="Card 3 content" />
    </div>
  );
}
