import Link from 'next/link';
import { SignInForm } from './_lib/components/sign-in-form/sign-in-form';
import t from '@/lib/ui/theme/recipes/typography.styles';
import { Card } from '@/lib/ui/components/atoms/card/card';

export default function SignIn() {
  return (
    <Card label="Sign In">
      <h1 className={`${t.heading.medium} mb-6`}>Sign in to your account</h1>
      <p className="mb-8">Start writing and save your posts</p>
      <SignInForm />
      <p className="sm:text-right">
        Don&apos;t have an account yet?{' '}
        <Link className={t.link} href="/sign-up">
          Sign Up
        </Link>
      </p>
    </Card>
  );
}
