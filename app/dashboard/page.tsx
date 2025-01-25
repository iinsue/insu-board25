import { auth } from "@/auth";
import { signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const DashboardPage = async () => {
  const session = await auth();
  const logoutAction = async () => {
    "use server";
    await signOut({ redirectTo: "/login" });
  };

  if (!session?.user) return null;

  return (
    <div className="space-y-5">
      <div>Dashboard Page</div>
      <div className="flex items-center gap-2 px-4">
        <Avatar>
          <AvatarImage src={session.user.image ?? ""} alt="profile image" />
          <AvatarFallback>IS</AvatarFallback>
        </Avatar>
        <span>{session.user.email}</span>
      </div>
      <form action={logoutAction}>
        <Button>로그아웃</Button>
      </form>
    </div>
  );
};

export default DashboardPage;
