import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
    </>
  );
}
