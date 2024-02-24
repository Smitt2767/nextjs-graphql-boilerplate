import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { APP_INFO } from '@/constants';
import Providers from '@/providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: APP_INFO.title, template: `%s | ${APP_INFO.title}` },
  description: APP_INFO.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}
