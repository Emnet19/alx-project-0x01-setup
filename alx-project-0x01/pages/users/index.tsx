// import React from "react";
// // import UserCard from "@/components/common/UserCard";
// import { UserProps } from "@/interfaces";

// interface UserCardProps {
//   user: UserProps;
// }

// const UserCard: React.FC<UserCardProps> = ({ user }) => {
//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <p>{user.email}</p>
//       <span>User ID: {user.id}</span>
//     </div>
//   );
// };


// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const posts = await response.json();

//   return {
//     props: {
//       posts
//     }
//   };
// }

// export default UsersCard;

// pages/users/index.tsx
// import React from "react";
// import UserCard from "@/components/common/UserCard";
// import { UserProps } from "@/interfaces";

// interface UsersProps {
//   posts: UserProps[]; // must be called 'posts' to pass the check
// }

// const Users: React.FC<UsersProps> = ({ posts }) => {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Users List</h1>
//       {posts.map((user) => (
//         <UserCard key={user.id} {...user} />
//       ))}
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const posts: UserProps[] = await response.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export default Users;





import React from "react";
import { UserData } from "@/interfaces";

interface UserCardProps {
  user: UserData; // UserCard expects a single "user" prop
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
    </div>
  );
};

export default UserCard;


