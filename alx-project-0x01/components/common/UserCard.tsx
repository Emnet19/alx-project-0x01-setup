// import React from "react";
// import { UserProps } from "@/interfaces";

// interface Props {
//   user: UserProps;
// }

// const UserCard: React.FC<Props> = ({ user }) => {
//   return (
//     <div className="border p-4 rounded-md shadow-md mb-4">
//       <h2 className="text-xl font-bold">{user.name}</h2>
//       <p><strong>Username:</strong> {user.username}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Phone:</strong> {user.phone}</p>
//       <p><strong>Website:</strong> {user.website}</p>
//       <p><strong>Company:</strong> {user.company.name}</p>
//       <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
//     </div>
//   );
// };

// export default UserCard;
import React from "react";
import { UserProps } from "@/interfaces";

interface UserCardProps {
  user: UserProps; // receive user as an object
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <span>User ID: {user.id}</span>
    </div>
  );
};

export default UserCard;
