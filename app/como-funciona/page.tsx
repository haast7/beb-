import { ComoFuncionaHeroSection } from '@/components/sections/ComoFuncionaHeroSection';
import { OverviewSection } from '@/components/sections/OverviewSection';
import { Fase1Section } from '@/components/sections/Fase1Section';
import { Fase2Section } from '@/components/sections/Fase2Section';
import { Fase3Section } from '@/components/sections/Fase3Section';
import { Fase4Section } from '@/components/sections/Fase4Section';
import { MetricasSection } from '@/components/sections/MetricasSection';
import { InvestimentoSection } from '@/components/sections/InvestimentoSection';
import { GarantiasSection } from '@/components/sections/GarantiasSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'Como Funciona - Processo Haast | De clínica vazia para agenda lotada em 90 dias',
  description: 'Processo transparente, etapas claras, resultado previsível. Veja como transformamos sua presença digital em máquina de agendamentos em 4 fases estruturadas.',
  keywords: 'como funciona haast, processo marketing digital, clínicas laboratórios, agendamentos, tráfego pago',
  openGraph: {
    title: 'Como Funciona - Processo Haast | De clínica vazia para agenda lotada em 90 dias',
    description: 'Processo transparente, etapas claras, resultado previsível. Veja como transformamos sua presença digital em máquina de agendamentos.',
    type: 'website',
    url: 'https://haast.tech/como-funciona',
  },
};

export default function ComoFuncionaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Processo de Marketing Digital para Clínicas e Laboratórios',
    description: 'Metodologia estruturada em 4 fases para transformar clínicas e laboratórios em máquinas de agendamento previsível',
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
      name: 'Processo Haast',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fase 1: Diagnóstico e Estratégia',
            description: 'Auditoria completa + definição de estratégia',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fase 2: Infraestrutura Técnica',
            description: 'Setup técnico + implementação de tracking',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fase 3: Ativação e Otimização',
            description: 'Campanhas ao vivo + otimização contínua',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fase 4: Escala e Previsibilidade',
            description: 'Aumento de budget + previsibilidade',
          },
        },
      ],
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto tempo até ver os primeiros resultados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Primeiros leads: 7-14 dias. Volume consistente: 30-45 dias. Máquina funcionando: 60-90 dias.',
        },
      },
      {
        '@type': 'Question',
        name: 'Preciso de site antes de começar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não. Criamos landing pages de conversão. Site institucional pode vir depois.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vocês atendem o WhatsApp por mim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não. Treinamos SUA equipe. Atendimento humanizado é seu diferencial.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanto preciso investir em mídia paga?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mínimo R$ 2.500/mês para ter volume. Ideal: R$ 3.500-5.000/mês.',
        },
      },
      {
        '@type': 'Question',
        name: 'Tem fidelidade?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Primeiros 3 meses recomendamos (período de maturação). Depois é mês a mês.',
        },
      },
    ],
  };

  return (
    <>
      <JsonLd json={jsonLd} />
      <JsonLd json={faqJsonLd} />
      
      <main className="pt-16">
        <ComoFuncionaHeroSection />
        <OverviewSection />
        <Fase1Section />
        <Fase2Section />
        <Fase3Section />
        <Fase4Section />
        <MetricasSection />
        <InvestimentoSection />
        <GarantiasSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </>
  );
}

