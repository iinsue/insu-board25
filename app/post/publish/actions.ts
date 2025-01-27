"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/lib/user";

const FormSchema = z.object({
  title: z.string(),
});

export const publishPost = async (data: z.infer<typeof FormSchema>) => {
  const user = await currentUser();

  const validatedFields = await FormSchema.safeParseAsync(data);

  if (!validatedFields.success) {
    return { error: "등록을 실패했습니다." };
  }

  if (!user) {
    return { error: "로그인이 필요합니다." };
  }

  const dbUser = await getUserById(user.id!);

  if (!dbUser) {
    return { error: "로그인이 필요합니다." };
  }

  await db.post.create({
    data: {
      title: data.title,
      userId: user.id!,
    },
  });

  return { success: "게시글이 등록되었습니다." };
};
