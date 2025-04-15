export default async function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full max-sm:py-24 max-sm:min-h-dvh max-sm:bg-black-light/80 sm:max-w-[600px]">
      {children}
    </main>
  );
}
