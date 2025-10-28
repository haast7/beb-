import { SobreHeroSection } from '@/components/sections/SobreHeroSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { NossaOrigemSection } from '@/components/sections/NossaOrigemSection';
import { PrincipiosSection } from '@/components/sections/PrincipiosSection';
import { OQueNosMoveSection } from '@/components/sections/OQueNosMoveSection';
import { ComoTrabalhamosSection } from '@/components/sections/ComoTrabalhamosSection';
import { PerfilClienteSection } from '@/components/sections/PerfilClienteSection';
import { DepoimentosSection } from '@/components/sections/DepoimentosSection';
import { OQueNaoFazemosSection } from '@/components/sections/OQueNaoFazemosSection';
import { OndeAtuamosSection } from '@/components/sections/OndeAtuamosSection';
import { ComoComecarSection } from '@/components/sections/ComoComecarSection';
import { CompromissoFinalSection } from '@/components/sections/CompromissoFinalSection';
import { CuriosidadesSection } from '@/components/sections/CuriosidadesSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'Sobre a Haast | Inspirados pela maior águia que já existiu',
  description: 'A Haast era a águia mais imponente da Nova Zelândia. Visão aguçada, precisão cirúrgica, domínio territorial absoluto. Nós carregamos o mesmo DNA: foco implacável, execução técnica superior e resultado que você pode medir.',
  keywords: 'sobre haast, história haast, águia haast, marketing digital clínicas, infraestrutura digital',
  openGraph: {
    title: 'Sobre a Haast | Inspirados pela maior águia que já existiu',
    description: 'A Haast era a águia mais imponente da Nova Zelândia. Visão aguçada, precisão cirúrgica, domínio territorial absoluto. Nós carregamos o mesmo DNA.',
    type: 'website',
    url: 'https://haast.tech/sobre',
  },
};

export default function SobrePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Haast',
    description: 'Infraestrutura Digital de Alta Performance para clínicas e laboratórios. Inspirados pela maior águia que já existiu.',
    url: 'https://haast.tech',
    logo: 'https://haast.tech/logo.png',
    foundingDate: '2021',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av Juracy Magalhães - Bairro Felícia, Quadra 07, Lote 3340 A, Sala 1210',
      addressLocality: 'Vitória da Conquista',
      addressRegion: 'BA',
      postalCode: '45055-902',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-77-9180-5013',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    sameAs: [
      'https://instagram.com/haastmarketing',
      'https://linkedin.com/company/haastoficial',
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Co-fundador & Estrategista de Performance',
        description: 'Background em engenharia de software + growth marketing',
      },
      {
        '@type': 'Person',
        name: 'Co-fundador & Especialista Comercial',
        description: '10 anos vendendo para área da saúde',
      },
    ],
    numberOfEmployees: '8-12',
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
  };

  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Haast',
      description: 'Infraestrutura Digital de Alta Performance para clínicas e laboratórios',
    },
  };

  return (
    <>
      <JsonLd json={jsonLd} />
      <JsonLd json={aboutJsonLd} />
      
      <main className="pt-16">
        <SobreHeroSection />
        <ManifestoSection />
        <NossaOrigemSection />
        <PrincipiosSection />
        <OQueNosMoveSection />
        <ComoTrabalhamosSection />
        <PerfilClienteSection />
        <DepoimentosSection />
        <OQueNaoFazemosSection />
        <OndeAtuamosSection />
        <ComoComecarSection />
        <CompromissoFinalSection />
        <CuriosidadesSection />
        <FinalCTASection />
      </main>
    </>
  );
}