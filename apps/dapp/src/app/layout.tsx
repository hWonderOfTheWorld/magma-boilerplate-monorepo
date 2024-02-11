import '@/styles/globals.css';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dapp.com'),
  title: "Dapp",
  description: "Dapp Dapp Yum",
  openGraph: {
    type: "website",
    url: "https://dapp.com",
    title: "Dapp",
    description: "Dapp Dapp Yum",
    siteName: "Dapp",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    creator: '@nameit',
    images: '..path'
  },
  keywords: '...',
  icons: {
    icon: "..."
  }
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='en' className='dark'>
        <body className={`flex flex-col align-top bg-black h-auto `}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </>
  );
}
