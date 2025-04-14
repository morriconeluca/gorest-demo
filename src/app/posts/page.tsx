import { getCurrentUser } from '@/lib/auth/dal';
import { deleteSession } from '@/lib/auth/session';
import { getPosts } from '@/lib/services/gorest/apis/users/[userId]/posts/GET/getPosts';
import Link from 'next/link';
import { DeletePostButton } from './_lib/components/delete-post-button/delete-post-button';

export default async function Posts() {
  const user = await getCurrentUser();

  if (!user) {
    return await deleteSession();
  }

  const posts = await getPosts(user.id);

  return (
    <>
      <Link href="/account">Account</Link>
      <h1>Hello, {user.id}. Here your Posts</h1>
      {posts.length === 0 ? (
        <p>No posts</p>
      ) : (
        posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <DeletePostButton postId={post.id} />
            <Link href={`/posts/edit/${post.id}`}>EDIT</Link>
          </article>
        ))
      )}
      <Link href="/posts/create">Create a post</Link>
    </>
  );
}
