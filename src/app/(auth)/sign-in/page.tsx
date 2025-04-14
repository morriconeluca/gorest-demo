import Link from 'next/link';
import { SignInForm } from './_lib/components/sign-in-form/sign-in-form';

export default function SignIn() {
  return (
    <>
      <h1>SignIn</h1>
      <SignInForm />
      <p>
        Don&apos;t have an account yet? <Link href="/sign-up">Sign Up</Link>
      </p>
    </>
  );
}
