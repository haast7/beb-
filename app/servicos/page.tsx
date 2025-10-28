import { ServicosHeroSection } from '@/components/sections/ServicosHeroSection';
import { TrafegoPagoSection } from '@/components/sections/TrafegoPagoSection';
import { SeoSection } from '@/components/sections/SeoSection';
import { DesenvolvimentoWebSection } from '@/components/sections/DesenvolvimentoWebSection';
import { AutomacaoSection } from '@/components/sections/AutomacaoSection';
import { IdentidadeVisualSection } from '@/components/sections/IdentidadeVisualSection';
import { ConsultoriaSection } from '@/components/sections/ConsultoriaSection';
import { ComplianceSection } from '@/components/sections/ComplianceSection';
import { AnalyticsSection } from '@/components/sections/AnalyticsSection';
import { ProjetosComplexosSection } from '@/components/sections/ProjetosComplexosSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'Serviços Haast | Infraestrutura Digital Completa para Clínicas',
  description: 'Tráfego pago, SEO, desenvolvimento web, automação, branding e consultoria. Do diagnóstico ao domínio de mercado. Infraestrutura digital completa para clínicas e laboratórios.',
  keywords: 'serviços marketing digital clínicas, tráfego pago, SEO, desenvolvimento web, automação, branding',
  openGraph: {
    title: 'Serviços Haast | Infraestrutura Digital Completa para Clínicas',
    description: 'Tráfego pago, SEO, desenvolvimento web, automação, branding e consultoria. Do diagnóstico ao domínio de mercado.',
    type: 'website',
    url: 'https://haast.tech/servicos',
  },
};

export default function ServicosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Serviços de Marketing Digital para Clínicas',
    description: 'Infraestrutura digital completa para clínicas e laboratórios: tráfego pago, SEO, desenvolvimento web, automação, branding e consultoria estratégica.',
    provider: {
      '@type': 'Organization',
      name: 'Haast',
      url: 'https://haast.tech',
    },
    serviceType: 'Marketing Digital',
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços Haast',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tráfego Pago & Performance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO & Presença Orgânica',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desenvolvimento Web & Apps',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automação & Integrações',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Identidade Visual & Branding',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Consultoria & Treinamento',
          },
        },
      ],
    },
  };

  return (
    <>
      <JsonLd json={jsonLd} />
      
      <main className="pt-16">
        <ServicosHeroSection />
        <TrafegoPagoSection />
        <SeoSection />
        <DesenvolvimentoWebSection />
        <AutomacaoSection />
        <IdentidadeVisualSection />
        <ConsultoriaSection />
        <ComplianceSection />
        <AnalyticsSection />
        <ProjetosComplexosSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </>
  );
}
