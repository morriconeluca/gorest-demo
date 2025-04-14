export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="flex items-center justify-center p-12">
      <main className="w-full max-w-[600px]">{children}</main>
    </body>
  );
}
