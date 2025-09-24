


// import PostCard from "@/components/common/PostCard";
// import {PostProps} from "@/interfaces";
// import Header from "@/components/layout/Header"

// interface Posts {
//   posts: PostProps[]; // an array of PostProps
// }

// const Posts: React.FC<PostProps> = ({ posts }) => {
//   console.log(posts)
//   return (
//     <div className="flex flex-col h-screen">
//       <Header />
//       <main className="p-4">
//         <div className="flex justify-between">
//         <h1 className=" text-2xl font-semibold">Post Content</h1>
//         <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
//         </div>
//         <div className="grid grid-cols-3 gap-2 ">
//           {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//         </div>
//       </main>
//     </div>
//   )
// }
// export async function getStaticProps(){
//     const response= await 
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     const posts: PostProps[]= await response.json()
//     return {
//         props:{
//             posts
//         }
//     }
// }
// export default Posts;


import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

// This interface defines the props your component receives
interface PostsPageProps {
  posts: PostProps[]; // array of posts
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  console.log(posts);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await response.json();
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
