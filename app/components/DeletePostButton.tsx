"use client";
import { useRouter } from "next/navigation";

export default function DeletePostButton({ postId }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return <button className="mt-4 w-32 h-8 bg-red-400 rounded-md" onClick={handleClick}>Delete Post</button>;
}
