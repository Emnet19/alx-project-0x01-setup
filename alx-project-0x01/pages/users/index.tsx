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


import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default UsersPage;
