import { getCurrentUser } from '@/lib/auth/dal';
import { deleteSession } from '@/lib/auth/session';
import { getPosts } from '@/lib/services/gorest/apis/users/[userId]/posts/GET/getPosts';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/lib/ui/components/card/card';
import t from '@/lib/ui/theme/recipes/typography.styles';
import button from '@/lib/ui/theme/recipes/button.styles';
import circle from '@/lib/ui/theme/recipes/circle.styles';
import { DeletePostButton } from './_lib/components/delete-post-button/delete-post-button';

export default async function Posts() {
  const user = await getCurrentUser();

  if (!user) {
    return await deleteSession();
  }

  const posts = await getPosts(user.id);

  return (
    <>
      <Card className="max-sm:[&+article]:border-t-1 border-black-dark sm:[&+article]:mt-12">
        <h1 className={t.heading.big}>
          {posts.length === 0 ? 'Your Posts' : 'No posts yet'}
        </h1>
      </Card>

      {posts.length > 0 &&
        posts.map((post) => (
          <Card
            className="max-sm:[&+article]:border-t-1 border-black-dark sm:[&+article]:mt-12"
            key={post.id}
          >
            <h2 className={`${t.heading.medium} mb-6`}>{post.title}</h2>
            <p className="mb-8">{post.body}</p>
            <div className="flex sm:justify-end gap-4">
              <DeletePostButton
                className="w-[calc((100%-1rem)/2)]! sm:w-[calc((100%-3rem)/4)]! grow-0"
                postId={post.id}
              />
              <Link
                className={`${button.primary} w-[calc((100%-1rem)/2)]! sm:w-[calc((100%-3rem)/4)]! grow-0`}
                href={`/posts/edit/${post.id}`}
              >
                Edit
              </Link>
            </div>
          </Card>
        ))}

      <Link
        className={`${circle.primary} fixed bottom-4 right-4 sm:bottom-12 sm:right-12`}
        href="/posts/create"
      >
        <Image
          alt="Plus"
          aria-hidden="true"
          height={24}
          src="/interface/plus.svg"
          width={24}
        />
      </Link>
    </>
  );
}
