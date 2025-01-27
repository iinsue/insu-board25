const PostEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  console.log("params", await params);
  return (
    <>
      <div>Post Edit Page</div>
    </>
  );
};

export default PostEditPage;
