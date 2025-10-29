'use client';

import { motion } from 'framer-motion';
import { Target, ArrowRight, CheckCircle, DollarSign, BarChart3, Clock, Users, TrendingUp } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const platforms = [
  {
    name: 'Google Ads',
    items: [
      'Campanhas de Pesquisa (Search)',
      'Google Shopping (para e-commerce médico)',
      'Performance Max',
      'Display & Remarketing',
      'YouTube Ads',
      'Google Maps (Local Services)',
    ],
  },
  {
    name: 'Meta Ads (Facebook & Instagram)',
    items: [
      'Campanhas de Conversão',
      'Tráfego qualificado',
      'Engajamento estratégico',
      'Remarketing personalizado',
      'Catálogo de produtos',
      'Messenger & WhatsApp Ads',
    ],
  },
  {
    name: 'LinkedIn Ads',
    items: [
      'Campanhas B2B para clínicas corporativas',
      'Geração de leads executivos',
      'Branding profissional',
    ],
  },
  {
    name: 'Outras Plataformas',
    items: [
      'TikTok Ads (quando aplicável)',
      'Waze Ads (tráfego local)',
      'Taboola/Outbrain (conteúdo patrocinado)',
    ],
  },
];

const tracking = [
  'Google Tag Manager (GTM)',
  'Google Analytics 4 (GA4)',
  'Meta Pixel + Conversions API',
  'Eventos customizados',
  'Dashboards em tempo real',
  'Relatórios semanais/mensais',
];

export function TrafegoPagoSection() {
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
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-blue-500/20">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              Tráfego Pago &{' '}
              <span className="gradient-text">Performance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Campanhas de mídia paga estruturadas para gerar agendamentos e receita real.
            </p>
          </div>
        </motion.div>

        {/* Plataformas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-haast-black-graphite mb-8 text-center">
            O que fazemos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-haast-black-graphite mb-4">
                  {platform.name}
                </h4>
                <ul className="space-y-2">
                  {platform.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tracking & Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-haast-black-graphite mb-6 text-center">
              Tracking & Analytics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tracking.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Investimento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para acelerar seu crescimento?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Agende uma consultoria estratégica e descubra como potencializar os resultados da sua clínica.
            </p>
            <WhatsAppButton
              size="lg"
              source="trafego-pago"
              message="Olá! Gostaria de agendar uma consultoria estratégica para minha clínica."
              className="group w-full md:w-auto hover:scale-100 md:hover:scale-105"
            >
              Agendar Consultoria Estratégica
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0 md:group-hover:translate-x-1 transition-transform" />
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
