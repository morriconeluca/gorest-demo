import { getPost } from '@/lib/services/gorest/apis/posts/[postId]/GET/getPost';
import { EditPostForm } from './_lib/components/edit-post-form/edit-post-form';
import { notFound } from 'next/navigation';

type TPost = Readonly<{ params: Promise<{ postId: string }> }>;

export default async function EditPost({ params }: TPost) {
  const postId = (await params).postId;

  const post = await getPost(Number(postId));

  if (!post) {
    return notFound();
  }

  return (
    <>
      <h1>Post {postId}</h1>
      <EditPostForm post={post} />
    </>
  );
}
