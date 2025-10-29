'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, Crown, Zap, Target } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const plans = [
  {
    name: 'FUNDAÇÃO',
    subtitle: 'Para quem está começando',
    price: 'R$ 2.500/mês',
    icon: Target,
    color: 'from-gray-500 to-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    features: [
      '1 Landing page de conversão',
      'Google Ads OU Meta Ads (escolha 1)',
      'Tracking básico (GA4 + Pixel)',
      'Pack social: 8 peças/mês',
      'Relatório mensal',
      'Suporte via e-mail',
    ],
    ideal: 'Clínicas pequenas, começando digital',
    cta: 'Contratar Fundação',
    source: 'plano-fundacao',
  },
  {
    name: 'ESTRUTURA',
    subtitle: 'Mais popular - 70% dos clientes',
    price: 'R$ 4.500/mês',
    icon: Star,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    popular: true,
    features: [
      'Tudo do Fundação, MAIS:',
      'Google Ads + Meta Ads simultâneos',
      'Remarketing incluído',
      'Tracking avançado (GTM + CAPI)',
      'Pack social: 12 peças/mês',
      '1 LP adicional',
      'Treinamento comercial (único)',
      'Relatório semanal',
      'Suporte via WhatsApp',
    ],
    ideal: 'Clínicas estabelecidas querendo escalar',
    cta: 'Contratar Estrutura',
    source: 'plano-estrutura',
  },
  {
    name: 'SISTEMA',
    subtitle: 'Infraestrutura completa',
    price: 'R$ 7.500/mês',
    icon: Crown,
    color: 'from-haast-primary to-haast-primary-dark',
    bgColor: 'bg-gradient-to-br from-haast-primary/5 to-haast-primary-dark/5',
    borderColor: 'border-haast-primary/30',
    features: [
      'Tudo do Estrutura, MAIS:',
      'Google + Meta + LinkedIn Ads',
      'SEO básico incluído',
      '3 Landing pages',
      'Pack social: 20 peças/mês',
      'Automação de WhatsApp',
      'Dashboard customizado',
      'Consultoria estratégica mensal',
      'Gestor de contas dedicado',
      'Suporte prioritário',
    ],
    ideal: 'Clínicas/redes querendo dominar mercado',
    cta: 'Contratar Sistema',
    source: 'plano-sistema',
  },
  {
    name: 'ENTERPRISE',
    subtitle: 'Customizado para redes e grupos',
    price: 'Sob consulta',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    features: [
      'Tudo do Sistema, MAIS:',
      'Multi-unidades',
      'Desenvolvimento customizado',
      'Integrações avançadas',
      'Suporte 24/7',
      'SLA garantido',
      'Mentoría executiva',
      'Equipe dedicada',
    ],
    ideal: 'Redes com 3+ unidades ou faturamento 7 dígitos/mês',
    cta: 'Falar com Consultor Enterprise',
    source: 'plano-enterprise',
  },
];

export function PlanosSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-primary-dark/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-haast-primary/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              Escolha o nível de{' '}
              <span className="gradient-text">parceria ideal</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Planos estruturados para diferentes estágios de crescimento da sua clínica.
            </p>
          </div>
        </motion.div>

        {/* Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${plan.bgColor} ${plan.borderColor} border-2 rounded-2xl p-6 relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-haast-primary ring-opacity-50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark text-white px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-haast-black-graphite mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.subtitle}
                </p>
                <div className="text-3xl font-bold text-haast-black-graphite">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Ideal para:</strong> {plan.ideal}
                </p>
              </div>

              <WhatsAppButton
                size="lg"
                source={plan.source}
                message={`Olá! Gostaria de contratar o plano ${plan.name}.`}
                className="group w-full"
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </WhatsAppButton>
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
              Não sabe qual plano escolher?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Agende um diagnóstico gratuito e nossa equipe vai recomendar o plano ideal para sua clínica.
            </p>
            <WhatsAppButton
              size="lg"
              source="diagnostico-planos"
              message="Olá! Gostaria de agendar um diagnóstico gratuito para escolher o plano ideal."
              className="group w-full md:w-auto hover:scale-100 md:hover:scale-105"
            >
              Agendar Diagnóstico Gratuito
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0 md:group-hover:translate-x-1 transition-transform" />
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


