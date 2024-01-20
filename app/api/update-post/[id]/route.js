import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  const { postId, newContent, newTitle } = res;

  try {
    const post = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        title: newTitle,
        content: newContent,
      },
    });
    return NextResponse.json({ post });
  } catch (e) {
    return NextResponse.json(e);
  }
}
