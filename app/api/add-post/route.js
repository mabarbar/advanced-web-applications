import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  const { title, content } = res;

  if (
    title.length < 5 ||
    title.length > 100 ||
    content.length < 5 ||
    content.length > 100
  ) {
    return NextResponse.json({ message: "Conditions are not met" }).status(404);
  }

  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: {
        create: {
          name: "Mati",
        },
      },
    },
  });

  return NextResponse.json({ result });
}
