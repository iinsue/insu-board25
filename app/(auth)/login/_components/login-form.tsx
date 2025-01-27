import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { CredentialsForm } from "./credentials";

export async function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <CredentialsForm />

          <div className="space-y-2">
            <form
              action={async () => {
                "use server";
                await signIn("google", {
                  redirectTo: DEFAULT_LOGIN_REDIRECT,
                });
              }}
            >
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </form>

            <form
              action={async () => {
                "use server";
                await signIn("naver", {
                  redirectTo: DEFAULT_LOGIN_REDIRECT,
                });
              }}
            >
              <Button variant="outline" className="w-full">
                Login with Naver
              </Button>
            </form>

            <form
              action={async () => {
                "use server";
                await signIn("kakao", {
                  redirectTo: DEFAULT_LOGIN_REDIRECT,
                });
              }}
            >
              <Button variant="outline" className="w-full">
                Login with Kakao
              </Button>
            </form>
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
