import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fox KM Mobilidade',
  description: 'O seu carro em poucos cliques.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-96HD9FVBXZ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-96HD9FVBXZ');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}