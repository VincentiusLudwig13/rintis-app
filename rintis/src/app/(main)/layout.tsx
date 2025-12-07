'use client';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={'relative max-w-lg mx-auto min-h-svh h-full p-5'}>
      {children}
    </div>
  );
}

export default Layout;
