import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formulário de Contato | Haast',
  description: 'Preencha o formulário e vamos conversar sobre como podemos ajudar sua clínica ou laboratório.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LeadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preload" href="/deyvisson.jpg" as="image" type="image/jpeg" />
      <div className="min-h-screen bg-gradient-to-br from-black via-haast-black-graphite to-haast-primary flex items-center justify-center p-4">
        {children}
      </div>
    </>
  );
}

