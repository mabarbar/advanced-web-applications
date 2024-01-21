"use client";

import { User } from "@/types/user";
import { signOut } from "next-auth/react";

type UserInfoProps = {
  user: User;
};

export default function UserInfo({ user }: UserInfoProps) {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      {user && (
        <div className="rounded-lg border shadow-lg p-20">
          <h2 className="text-xl">Dane uzytkownika:</h2>
          <div className="dark:text-slate-300 text-gray-800">
            Id : {user.id}
          </div>
          <div className="dark:text-slate-300 text-gray-800">
            Name : {user.name}
          </div>
          <div className="dark:text-slate-300 text-gray-800">
            Email : {user.email}
          </div>
          <button
            className="font-medium mt-2 text-blue-600 hover:underline"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      )}
    </>
  );
}
