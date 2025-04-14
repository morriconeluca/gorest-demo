type TPost = Readonly<{ params: Promise<{ postId: string }> }>;

export default async function EditPost({ params }: TPost) {
  const postId = (await params).postId;

  return <h1>Post {postId}</h1>;
}
