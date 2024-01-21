"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      title.length < 5 ||
      title.length > 100 ||
      content.length < 5 ||
      content.length > 100
    ) {
      setError(true);
      return;
    }
    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      setError(false);
      router.refresh();
    } catch (error) {
      console.error(error);
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center flex-col w-full">
        <div className="flex flex-col w-full p-4 m-2 dark:bg-slate-950 rounded-lg border-2 border-slate-800 dark:border-slate-700">
          <h3 className="text-2xl text-gray-800 dark:text-gray-300">
            Dodaj post
          </h3>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="text-slate-800"
          />
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
            className="text-slate-800"
          />
          <button
            type="submit"
            className="flex justify-center items-start mt-4 w-20 bg-green-500 text-white rounded-md p-2"
            onChange={handleSubmit}
          >
            Submit
          </button>
          {error && (
            <span className="text-red-500">Za krótki tytuł lub zawartość</span>
          )}
        </div>
      </div>
    </form>
  );
}
