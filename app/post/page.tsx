import { Button } from "@/components/ui/button";
import Link from "next/link";

const PostMainPage = () => {
  return (
    <>
      <div>Post Main Page</div>
      <Button asChild>
        <Link href="/post/publish">Publish</Link>
      </Button>
    </>
  );
};

export default PostMainPage;
