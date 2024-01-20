"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UpdatePostButton({ postId }) {
  const [newContent, setNewContent] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [edit, setEdit] = useState(false);

  const router = useRouter();

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleClick = async () => {
    try {
      await fetch(`/api/update-post/${postId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, newContent, newTitle }),
      });

      router.refresh();
      setNewContent("");
      setNewTitle("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-end gap-1">
      <button
        className="mt-4 w-32 h-8 bg-green-500 rounded-md"
        onClick={handleEdit}
      >
        Edit
      </button>
      {edit && (
        <>
          <input
            className="h-8 rounded-md text-black"
            type="text"
            placeholder="Edit post title..."
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            className="h-8 rounded-md text-black"
            type="text"
            placeholder="Edit post content..."
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button
            className="mt-4 w-32 h-8 bg-yellow-500 rounded-md"
            onClick={handleClick}
          >
            Update Post
          </button>
        </>
      )}
    </div>
  );
}
