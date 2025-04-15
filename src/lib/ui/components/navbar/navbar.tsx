import Image from 'next/image';
import Link from 'next/link';
import t from '@/lib/ui/theme/recipes/typography.styles';
import { TNavbar } from './navbar.models';

export const Navbar = ({ userId }: TNavbar) => {
  return (
    <nav className="flex items-center justify-between h-12 bg-black-medium border-b-1 border-primary-dark fixed top-0 left-0 w-full px-12">
      <Link href="/posts" aria-label="Back to your posts">
        <Image
          alt="A logo with a bird"
          aria-hidden="true"
          height={32}
          src="/images/bird.svg"
          width={32}
        />
      </Link>
      {userId && (
        <p
          className={`${t.label} absolute w-full flex items-center justify-center z-[-1]`}
        >
          Hello, {userId}
        </p>
      )}
      <Link className={t.link} href="/account">
        Account
      </Link>
    </nav>
  );
};
