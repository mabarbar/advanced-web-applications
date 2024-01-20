"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    }

    setTitle("");
    setContent("");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center flex-col w-full">
          <div className="flex flex-col w-full p-4 m-2 bg-slate-950 rounded-lg border-2 border-slate-700">
            <h3 className="text-2xl text-gray-300">Dodaj post</h3>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
              className="text-slate-800"
            />
            <label htmlFor="">Content</label>
            <textarea
              type="text"
              id="content"
              value={content}
              onChange={handleContentChange}
              required
              className="text-slate-800"
            />
            <button
              type="submit"
              className="flex justify-center items-start mt-4 w-20 bg-green-400"
              // onChange={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
