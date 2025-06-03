import { User } from "@/interfaces/index";

const UserCard: React.FC<User> = ({ name, email, address }) => {
  return (
    <div className="bg-white text-black flex flex-col gap-4 p-4">
      <h1>Name: {name}</h1>
      <p>Email: {email}</p>
      <p>Street: {address.street}</p>
      <p>City: {address.city}</p>
    </div>
  );
};
export default UserCard;
