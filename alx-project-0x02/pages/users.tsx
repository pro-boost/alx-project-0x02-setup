import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

export default function Users({ users }: UserProps) {
  return (
    <>
      <Header />
      <div className="m-5">
        <h1 className="text-center p-4 text-4xl font-bold">Posts</h1>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-4">
          {users.slice(0, 5).map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
