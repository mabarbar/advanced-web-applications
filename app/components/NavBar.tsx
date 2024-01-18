import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex sticky top-0 items-center justify-around w-full h-16 dark:bg-slate-950 border-b border-slate-800">
      <Link href="/">
        <div className="relative w-8 h-8">
          <span className="absolute h-8 w-8 bg-transparent bg-gradient-to-bl from-transparent from-40% via-cyan-500 to-transparent to-60%"></span>
          <span className="absolute h-8 w-8 bg-transparent bg-gradient-to-br from-transparent from-40% via-cyan-500 to-transparent to-60%"></span>
          <span className="absolute h-8 w-8 bg-transparent bg-gradient-radial from-transparent from-30% to-slate-950 to-100%"></span>
        </div>
      </Link>
      <Link href="/">Home</Link>
      <Link href="blog">Blog</Link>
      <Link href="login">Log in</Link>
    </div>
  );
};

export default NavBar;
