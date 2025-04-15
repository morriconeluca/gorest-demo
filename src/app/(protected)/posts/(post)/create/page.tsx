import { Card } from '@/lib/ui/components/card/card';
import { CreatePostForm } from './_lib/components/create-post-form/create-post-form';
import t from '@/lib/ui/theme/recipes/typography.styles';

export default async function CreatePost() {
  return (
    <Card label="Create Post">
      <h1 className={`${t.heading.medium} mb-6`}>Create a new Post</h1>
      <CreatePostForm />
    </Card>
  );
}
