import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ammar Alibrahim — Full Stack Engineer',
  description:
    'Full Stack Engineer building modern web applications and scalable systems with React, Next.js, TypeScript, Node.js, and Nest.js.',
  metadataBase: new URL('https://ammar-alibrahim.netlify.app'),
  openGraph: {
    type: 'website',
    title: 'Ammar Alibrahim — Full Stack Engineer',
    description:
      'Full Stack Engineer building modern web applications and scalable systems with React, Next.js, TypeScript, Node.js, and Nest.js.',
    siteName: 'Ammar Alibrahim Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ammar Alibrahim — Full Stack Engineer',
    description:
      'Full Stack Engineer building modern web applications and scalable systems with React, Next.js, TypeScript, Node.js, and Nest.js.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ammar Alibrahim',
              jobTitle: 'Full Stack Engineer',
              description:
                'Full Stack Engineer specializing in React, Next.js, TypeScript, Node.js, and Nest.js.',
              email: 'mailto:ammaryasir8088@gmail.com',
              telephone: '+963981021170',
              url: 'https://ammar-alibrahim.netlify.app',
              sameAs: [
                'https://github.com/Ammaralibrahim',
                'https://linkedin.com/in/ammar-alibrahim-63790727a',
              ],
              knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Nest.js',
                'MongoDB',
                'Redis',
                'Three.js',
                'Tailwind CSS',
                'REST APIs',
                'Multi-tenant Architecture',
                'RBAC',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#0c0d10] text-[#eaecef] font-sans antialiased selection:bg-neutral-800 selection:text-white min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}