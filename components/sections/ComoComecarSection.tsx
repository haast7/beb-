'use client';

import { motion } from 'framer-motion';
import { Target, FileText, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const steps = [
  {
    icon: Target,
    title: 'Passo 1: Diagnóstico Gratuito (30min)',
    description: 'Agende uma call sem compromisso',
    items: [
      'Entendemos seu cenário atual',
      'Identificamos maiores oportunidades',
      'Estimamos investimento necessário',
      'Mostramos cases similares',
    ],
    cta: 'Agendar Diagnóstico Gratuito',
  },
  {
    icon: FileText,
    title: 'Passo 2: Proposta Personalizada',
    description: 'Após o diagnóstico, você recebe',
    items: [
      'Proposta comercial detalhada',
      'Plano estratégico customizado',
      'Cronograma de implementação',
      'Investimento total (gestão + mídia)',
    ],
    cta: 'Receber Proposta',
  },
  {
    icon: Rocket,
    title: 'Passo 3: Onboarding (7 dias)',
    description: 'Fechou? Começamos imediatamente',
    items: [
      'Documentação e acessos',
      'Reunião de kickoff',
      'Início da auditoria e planejamento',
    ],
    highlight: 'Em 14 dias suas campanhas estão no ar.',
    cta: 'Começar Agora',
  },
];

export function ComoComecarSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-gray-dark/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 shadow-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              3 passos para{' '}
              <span className="gradient-text">transformar sua clínica</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Processo simples, transparente e focado em resultado. 
              Sem complicações, sem surpresas.
            </p>
          </div>
        </motion.div>

        {/* Passos */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Header */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-haast-black-graphite">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="lg:col-span-2 space-y-6">
                  <ul className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {step.highlight && (
                    <div className="bg-gradient-to-r from-haast-primary/10 to-haast-primary/5 rounded-xl p-4 border border-haast-primary/20">
                      <p className="text-haast-black-graphite font-semibold text-center">
                        {step.highlight}
                      </p>
                    </div>
                  )}

                  <div className="pt-4">
                    <WhatsAppButton
                      size="lg"
                      source={`como-comecar-${index + 1}`}
                      message={`Olá! Gostaria de ${step.cta.toLowerCase()}.`}
                      className="group"
                    >
                      {step.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              O primeiro passo é o mais importante. 
              <strong className="text-yellow-400"> Agende seu diagnóstico gratuito agora.</strong>
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Rocket className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold text-yellow-400">
                Em 14 dias suas campanhas estarão no ar
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
