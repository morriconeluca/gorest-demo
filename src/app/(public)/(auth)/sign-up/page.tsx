import Link from 'next/link';
import { SignUpForm } from './_lib/components/sign-up-form/sign-up-form';

export default function SignUp() {
  return (
    <>
      <h1>SignUp</h1>
      <SignUpForm />
      <p>
        Already have an account? <Link href="/sign-in">Sign In</Link>
      </p>
    </>
  );
}
