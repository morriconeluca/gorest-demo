export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="flex items-center justify-center sm:p-12">
      <main className="w-full max-sm:min-h-dvh max-sm:bg-black-light/80 sm:max-w-[600px]">
        {children}
      </main>
    </body>
  );
}
