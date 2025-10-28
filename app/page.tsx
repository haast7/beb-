import { HeroSection } from '@/components/sections/HeroSection';
import { TrustedCompaniesSection } from '@/components/sections/TrustedCompaniesSection';
import { PainPointsSection } from '@/components/sections/PainPointsSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { OfferSection } from '@/components/sections/OfferSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { BehancePortfolioSection } from '@/components/sections/BehancePortfolioSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { JsonLd } from '@/components/seo/JsonLd';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Haast',
    description: 'Infraestrutura Digital de Alta Performance para clínicas e laboratórios',
    url: 'https://haast.tech',
    logo: 'https://haast.tech/logo.png',
    sameAs: [
      'https://instagram.com/haastgrowth',
      'https://linkedin.com/company/haast',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-99999-9999',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
    },
    service: {
      '@type': 'Service',
      name: 'Plano Captação 3K',
      description: 'Tráfego pago estratégico + infraestrutura digital + vendas estruturadas para clínicas e laboratórios',
      provider: {
        '@type': 'Organization',
        name: 'Haast',
      },
      offers: {
        '@type': 'Offer',
        price: '3000',
        priceCurrency: 'BRL',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '3000',
          priceCurrency: 'BRL',
          billingIncrement: 'P1M',
        },
      },
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto tempo até ver os primeiros agendamentos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '7-14 dias para leads começarem. Maturação completa leva 60-90 dias. Quem promete resultado em 7 dias está mentindo ou vai trazer lead ruim.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vocês atendem o WhatsApp por mim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não. Treinamos SUA equipe para atender com excelência. Fornecemos scripts, automações e suporte. O atendimento humanizado é seu diferencial, não terceirizamos isso.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vocês garantem resultado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Garantimos processo, transparência, e melhor esforço técnico. ROI depende de 3 pilares: nossa campanha + seu atendimento + seu serviço. Se os 3 estiverem alinhados, resultado é consequência.',
        },
      },
    ],
  };

  return (
    <>
      <JsonLd json={jsonLd} />
      <JsonLd json={faqJsonLd} />
      
      <main className="pt-16">
        <HeroSection />
      <TrustedCompaniesSection />
      <PainPointsSection />
      <SolutionSection />
      <OfferSection />
      <MetricsSection />
      <BehancePortfolioSection />
      <FAQSection />
      <FinalCTASection />
      </main>
    </>
  );
}
