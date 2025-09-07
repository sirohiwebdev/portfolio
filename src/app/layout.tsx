import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Orbitron } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'Abhishek Sirohi - Software Engineer',
  description:
    'Lead Software Engineer specializing in cloud security, distributed systems, and graph database technologies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${inter.variable} ${jetbrains.variable} bg-bg-primary text-text-primary font-inter`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
