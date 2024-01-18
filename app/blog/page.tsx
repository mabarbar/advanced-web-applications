import prisma from "../../lib/prisma";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import Link from "next/link";
import { getServerAuthSession } from "../../server/auth";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const data = new Date();
  const posts = await getPosts();

  const authSession = await getServerAuthSession();

  return (
    <>
      {/* {JSON.stringify(authSession?.user)} */}

      <main>
        {authSession?.user && <AddPost />}
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
            />
          );
        })}
      </main>
    </>
  );
}
