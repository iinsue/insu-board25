"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

interface ButtonProps {
  text: string;
}

export const LoginButton = ({ text }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="w-full capitalize">
      {pending ? "로딩 중" : text}
    </Button>
  );
};
