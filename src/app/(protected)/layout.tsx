import { getCurrentUser } from '@/lib/auth/dal';
import { deleteSession } from '@/lib/auth/session';
import { Navbar } from '@/lib/ui/components/navbar/navbar';

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  if (!user) {
    return await deleteSession();
  }

  return (
    <body className="flex justify-center sm:p-12 sm:pt-36">
      <Navbar userId={user.id} />
      {children}
    </body>
  );
}
