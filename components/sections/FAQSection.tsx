'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const faqs = [
  {
    question: 'Quanto tempo até ver os primeiros agendamentos?',
    answer: '7-14 dias para leads começarem. Maturação completa leva 60-90 dias. Quem promete resultado em 7 dias está mentindo ou vai trazer lead ruim.',
  },
  {
    question: 'Vocês atendem o WhatsApp por mim?',
    answer: 'Não. Treinamos SUA equipe para atender com excelência. Fornecemos scripts, automações e suporte. O atendimento humanizado é seu diferencial, não terceirizamos isso.',
  },
  {
    question: 'E se eu não tiver fotos profissionais?',
    answer: 'Orientamos captura com smartphone (95% dos casos resolve). Sessão profissional é add-on opcional se realmente necessário.',
  },
  {
    question: 'Posso pausar se não funcionar?',
    answer: 'Pode. Mas funciona. E sabemos que funciona porque temos os dados. Se após 60 dias seguindo o processo não houver resultado, revisamos tudo ou você sai sem multa.',
  },
  {
    question: 'Vocês garantem resultado?',
    answer: 'Garantimos processo, transparência, e melhor esforço técnico. ROI depende de 3 pilares: nossa campanha + seu atendimento + seu serviço. Se os 3 estiverem alinhados, resultado é consequência.',
  },
  {
    question: 'Já tentei tráfego e não funcionou.',
    answer: 'Provavelmente faltou: tracking correto, landing page otimizada, follow-up estruturado, ou análise de dados. 80% das campanhas falham por infraestrutura deficiente, não por "tráfego não funcionar".',
  },
  {
    question: 'Preciso de site completo ou landing page basta?',
    answer: 'Para conversão: landing page > site institucional. Site completo é importante para autoridade, mas LP converte 3-5x mais. Começamos pela LP, site vem depois se necessário.',
  },
  {
    question: 'Como funciona o processo de onboarding?',
    answer: 'Semana 1: Diagnóstico + Setup (auditoria, definição de serviços, instalação de tracking). Semana 2-4: Otimização Ativa (testes A/B, ajustes, automações, treinamento). Mês 2-3: Escala Previsível (campanhas vencedoras, aumento de budget, ROI positivo).',
  },
  {
    question: 'Qual o investimento mínimo necessário?',
    answer: 'O Plano Fundação da Haast inclui tudo: tráfego pago, infraestrutura, criativos, treinamento e gestão. Além disso, você precisa de budget para anúncios (recomendamos R$ 2-5K/mês inicialmente, dependendo do tamanho da clínica).',
  },
  {
    question: 'Trabalham com todas as especialidades médicas?',
    answer: 'Sim, mas focamos em especialidades com alta demanda e boa margem: ortopedia, cardiologia, ginecologia, dermatologia, oftalmologia, laboratórios de imagem, clínicas odontológicas. Cada especialidade tem estratégia específica.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
            Perguntas{' '}
            <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Removemos as principais objeções para que você possa tomar a decisão certa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-xl border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left text-haast-black-graphite hover:text-haast-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-haast-black-graphite rounded-2xl p-8 border border-haast-gray-medium max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-haast-gray-light mb-6">
              Fale diretamente com nosso time. Resposta em até 2h úteis.
            </p>
            <WhatsAppButton
              source="faq"
              message="Olá! Tenho algumas dúvidas sobre o Plano Fundação da Haast."
              className="inline-flex items-center justify-center"
            >
              Falar no WhatsApp
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
