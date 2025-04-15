import { getPost } from '@/lib/services/gorest/apis/posts/[postId]/GET/getPost';
import { EditPostForm } from './_lib/components/edit-post-form/edit-post-form';
import { notFound } from 'next/navigation';
import { Card } from '@/lib/ui/components/card/card';
import t from '@/lib/ui/theme/recipes/typography.styles';

type TPost = Readonly<{ params: Promise<{ postId: string }> }>;

export default async function EditPost({ params }: TPost) {
  const postId = (await params).postId;

  const post = await getPost(Number(postId));

  if (!post) {
    return notFound();
  }

  return (
    <Card label="Edit Post">
      <h1 className={`${t.heading.medium} mb-6`}>Post {postId}</h1>
      <EditPostForm post={post} />
    </Card>
  );
}
