'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FixedCalComButton } from '@/components/ui/FixedCalComButton';

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isLeadPage, setIsLeadPage] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLeadPage(pathname === '/lead');
  }, [pathname]);

  // Durante SSR ou antes da montagem, sempre renderiza tudo (evita mismatch de hidratação)
  // Após montagem, o useEffect vai atualizar o estado e re-renderizar se necessário
  if (!mounted || !isLeadPage) {
    return (
      <>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FixedCalComButton />
      </>
    );
  }

  // Só renderiza sem Header/Footer/Button se estiver montado E for página /lead
  return (
    <>
      <main id="main-content">{children}</main>
    </>
  );
}

