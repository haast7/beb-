'use client';

import { motion } from 'framer-motion';
import { BarChart3, ArrowRight, CheckCircle, DollarSign, Target, Eye, Zap, TrendingUp } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const services = [
  {
    title: 'Implementação de Analytics',
    items: [
      'Google Analytics 4 avançado',
      'Google Tag Manager',
      'Meta Pixel & Conversions API',
      'Hotjar (heatmaps, gravações)',
      'Call tracking',
      'Formulários rastreados',
    ],
  },
  {
    title: 'Dashboards Executivos',
    items: [
      'Visão consolidada de métricas',
      'Atualização em tempo real',
      'Acesso mobile',
      'Filtros customizados',
      'Exportação automatizada',
    ],
  },
  {
    title: 'Relatórios Customizados',
    items: [
      'Relatórios semanais/mensais',
      'Análise de funil de conversão',
      'Atribuição de canais',
      'LTV (Lifetime Value)',
      'CAC (Custo de Aquisição)',
      'ROI por campanha/serviço',
    ],
  },
  {
    title: 'Análise Preditiva',
    items: [
      'Previsão de demanda',
      'Sazonalidade mapeada',
      'Modelo de crescimento',
      'Análise de churn',
      'Oportunidades identificadas',
    ],
  },
];

export function AnalyticsSection() {
  return (
    <section className="section-padding bg-haast-black-graphite">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-cyan-500/20">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Analytics &{' '}
              <span className="gradient-text">Business Intelligence</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Transformamos dados caóticos em decisões claras e acionáveis.
            </p>
          </div>
        </motion.div>

        {/* Serviços */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            O que fazemos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h4>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investimento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para acelerar seu crescimento?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Agende uma consultoria estratégica e descubra como potencializar os resultados da sua clínica.
            </p>
            <WhatsAppButton
              size="lg"
              source="analytics"
              message="Olá! Gostaria de agendar uma consultoria estratégica para minha clínica."
              className="group"
            >
              Agendar Consultoria Estratégica
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
