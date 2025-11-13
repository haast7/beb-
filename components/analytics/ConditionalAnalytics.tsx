'use client';

import { usePathname } from 'next/navigation';
import { GoogleTagManager } from './GoogleTagManager';
import { GoogleAnalytics } from './GoogleAnalytics';
import { MetaPixel } from './MetaPixel';
import { ScrollTracking } from './ScrollTracking';

export function ConditionalAnalytics() {
  const pathname = usePathname();
  
  // Não carregar analytics na página /lead para melhor performance
  if (pathname === '/lead') {
    return null;
  }

  return (
    <>
      <GoogleTagManager />
      <GoogleAnalytics />
      <MetaPixel />
      <ScrollTracking />
    </>
  );
}

