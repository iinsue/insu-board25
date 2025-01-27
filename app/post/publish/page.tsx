"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { publishPost } from "./actions";

export const FormSchema = z.object({
  title: z.string(),
});

const PublishPostPage = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    startTransition(async () => {
      const response = await publishPost(data);
      if (response.success) {
        toast.success(`${response.success}`, { id: "post" });
        router.replace("/post");
      }

      if (response.error) {
        toast.error(`${response.error}`, { id: "post" });
      }
    });
  };

  return (
    <>
      <div>Publish Post Page</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} disabled={isPending} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isPending}>
            Publish
          </Button>
        </form>
      </Form>
    </>
  );
};

export default PublishPostPage;
