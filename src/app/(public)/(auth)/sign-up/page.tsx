import Link from 'next/link';
import { Card } from '@/lib/ui/components/card/card';
import t from '@/lib/ui/theme/recipes/typography.styles';
import { SignUpForm } from './_lib/components/sign-up-form/sign-up-form';

export default function SignUp() {
  return (
    <Card label="Sign Up">
      <h1 className={`${t.heading.medium} mb-6`}>Create an account</h1>
      <p className="mb-8">Enter your information to get started</p>
      <SignUpForm />
      <p className="sm:text-right">
        Already have an account?{' '}
        <Link className={t.link} href="/sign-in">
          Sign In
        </Link>
      </p>
    </Card>
  );
}
