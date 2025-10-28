import { ContatoHeroSection } from '@/components/sections/ContatoHeroSection';
import { InformacoesContatoSection } from '@/components/sections/InformacoesContatoSection';
import { FormularioContatoSection } from '@/components/sections/FormularioContatoSection';
import { HorariosAtendimentoSection } from '@/components/sections/HorariosAtendimentoSection';
import { RedesSociaisSection } from '@/components/sections/RedesSociaisSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'Contato Haast | Fale Conosco e Transforme Sua Clínica',
  description: 'Entre em contato com a Haast. Agende uma consultoria gratuita e descubra como transformar sua clínica em uma máquina de agendamentos. Resposta em até 2h.',
  keywords: 'contato haast, consultoria gratuita, marketing digital clínicas, agendamento',
  openGraph: {
    title: 'Contato Haast | Fale Conosco e Transforme Sua Clínica',
    description: 'Entre em contato com a Haast. Agende uma consultoria gratuita e descubra como transformar sua clínica em uma máquina de agendamentos.',
    type: 'website',
    url: 'https://haast.tech/contato',
  },
};

export default function ContatoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contato Haast',
    description: 'Entre em contato com a Haast para consultoria gratuita em marketing digital para clínicas',
    url: 'https://haast.tech/contato',
    mainEntity: {
      '@type': 'Organization',
      name: 'Haast',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-77-9180-5013',
        contactType: 'customer service',
        availableLanguage: 'Portuguese',
        areaServed: 'BR',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
    },
  };

  return (
    <>
      <JsonLd json={jsonLd} />
      
      <main className="pt-16">
        <ContatoHeroSection />
        <InformacoesContatoSection />
        <FormularioContatoSection />
        <HorariosAtendimentoSection />
        <RedesSociaisSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </>
  );
}
