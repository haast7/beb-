'use client';

import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CheckCircle, ArrowRight, Star, Zap, Shield, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const offerItems = [
  {
    icon: BarChart3,
    title: 'Tráfego Pago Estratégico',
    features: [
      'Meta Ads (Feed + Stories + Reels)',
      'Google Ads (Pesquisa + Maps)',
      'Tracking completo (Pixel + API + GTM)',
      'Otimização semanal por CPL e taxa de conversão',
    ],
  },
  {
    icon: Zap,
    title: 'Infraestrutura Digital Pro',
    features: [
      'Landing page de conversão (bônus incluso)',
      'Página de captura mobile-optimized',
      'Formulário inteligente com qualificação',
      'Integração direta com WhatsApp',
    ],
  },
  {
    icon: Star,
    title: 'Pack Social Mensal',
    features: [
      '12 peças criativas (feed + stories)',
      'Copy persuasiva para cada arte',
      'Banco de destaques organizado',
      'Identidade visual coesa',
    ],
  },
  {
    icon: Shield,
    title: 'Consultoria & Treinamento',
    features: [
      'Playbook comercial para WhatsApp',
      'Scripts de vendas testados',
      'Treinamento da equipe (gravado)',
      'Suporte via Slack/WhatsApp',
    ],
  },
];

const managementFeatures = [
  'Acesso total às contas de anúncio',
  'Relatórios semanais (métricas reais)',
  'Call estratégica mensal',
  'Ajustes em tempo real',
];

export function OfferSection() {

  return (
    <section id="oferta" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
            Tudo que você precisa para{' '}
            <span className="gradient-text">agenda lotada</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O <strong className="text-haast-primary">Plano Fundação da Haast</strong> inclui tudo que uma clínica ou laboratório precisa para transformar marketing de despesa em investimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Oferta Principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {offerItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-haast-primary transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-haast-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-haast-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-haast-black-graphite mb-3">
                      {item.title}
                    </h3>
                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-gray-600">
                          <CheckCircle className="h-4 w-4 text-haast-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Gestão & Transparência */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-haast-primary/10 to-gray-50 rounded-xl p-6 border border-haast-primary/20"
            >
              <h3 className="text-xl font-bold text-haast-black-graphite mb-4 flex items-center">
                <Shield className="h-6 w-6 text-haast-primary mr-2" />
                Gestão & Transparência
              </h3>
              <ul className="space-y-2">
                {managementFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-haast-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Card de Preço e CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sticky top-24"
          >
            <div className="bg-gradient-to-br from-haast-primary to-haast-primary-dark rounded-2xl p-8 border border-haast-primary/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                  <Star className="h-4 w-4 text-white" />
                  <span className="text-sm font-bold text-white">PLANO Fundação</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Tudo que você precisa
                </h3>
                <p className="text-white/90">
                  Para transformar sua clínica em uma máquina de agendamentos
                </p>
              </div>

              <div className="space-y-6">
                {/* Logo da Haast */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                      <Image
                        src="/logohaast.png"
                        alt="Logo Haast"
                        width={120}
                        height={120}
                        className="w-28 h-28 object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <WhatsAppButton
                    variant="conversion-green"
                    size="lg"
                    source="offer"
                    message="Olá! Gostaria de saber mais sobre o Plano Fundação da Haast."
                    className="w-full group"
                  >
                    Quero o Plano Fundação
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </WhatsAppButton>

                  <WhatsAppButton
                    variant="outline-dark"
                    size="lg"
                    source="diagnostic"
                    message="Olá! Gostaria de agendar um diagnóstico gratuito de 30min sobre minha clínica/laboratório."
                    className="w-full"
                  >
                    Agendar diagnóstico gratuito
                  </WhatsAppButton>
                </div>

                <div className="text-center">
                  <p className="text-sm text-white/90">
                    <strong className="text-white">+50 empresas</strong> •{' '}
                    <strong className="text-white">escalando hoje com a Haast.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Parceiros */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <h4 className="text-lg font-bold text-haast-black-graphite mb-4 text-center">
                Parceiros
              </h4>
              <div className="flex justify-center items-center space-x-8">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center p-3 shadow-sm">
                    <Image
                      src="/certificates/meta-ads.png"
                      alt="Meta Ads Certified"
                      width={80}
                      height={50}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-haast-black-graphite text-center font-medium">Meta Ads</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center p-3 shadow-sm">
                    <Image
                      src="/certificates/google-ads.png"
                      alt="Google Ads Certified"
                      width={80}
                      height={50}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-haast-black-graphite text-center font-medium">Google Ads</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center p-3 shadow-sm">
                    <Image
                      src="/certificates/rd-station.png"
                      alt="RD Station Certified"
                      width={80}
                      height={50}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-haast-black-graphite text-center font-medium">RD Station</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
