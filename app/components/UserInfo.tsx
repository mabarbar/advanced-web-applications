"use client";

import { User } from "@/types/user";
import { signOut } from "next-auth/react";

type UserInfoProps = {
  user: User;
}

export default function UserInfo({ user }: UserInfoProps) {
  const handleLogout = async () => {
    await signOut();
  }

  return(
   <div className="rounded-lg border shadow-lg p-10">
      <h2 className="text-xl">Dane uzytkownika:</h2>
      <div className="text-slate-300">
        Id : {user.id}
      </div>
      <div className="text-slate-300">
        Name : {user.name}
      </div>
      <div className="text-slate-300">
        Email : {user.email}
      </div>
      <button className="font-medium mt-2 text-blue-600 hover:underline" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}