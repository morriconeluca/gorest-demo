import { getCurrentUser } from '@/lib/auth/dal';
import { deleteSession } from '@/lib/auth/session';
import { getPosts } from '@/lib/services/gorest/apis/users/[userId]/posts/GET/getPosts';

export default async function Posts() {
  const user = await getCurrentUser();

  if (!user) {
    return await deleteSession();
  }

  const posts = await getPosts(user.id);

  return (
    <>
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <p>No posts</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </>
  );
}
