"use client";

import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { LoginButton } from "./login-button";

export const CredentialsForm = () => {
  const onSumbit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.info("서비스 예정입니다.", { id: "login" });
  };

  return (
    <form className="grid gap-6" onSubmit={onSumbit}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="xxxx@gmail.com" disabled />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <a
            href="#"
            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
          >
            Forgot your password?
          </a>
        </div>
        <Input id="password" type="password" placeholder="*******" disabled />
      </div>

      <LoginButton text="login" />
    </form>
  );
};
