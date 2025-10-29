'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, DollarSign, CheckCircle, X } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const metrics = [
  {
    icon: DollarSign,
    title: 'CPL por serviço estratégico',
    description: 'Quanto custa cada lead qualificado?',
    value: 'R$ 15-45',
    subtitle: 'dependendo do exame/consulta',
    color: 'text-haast-primary',
  },
  {
    icon: Target,
    title: 'Taxa de conversão Lead → Agendamento',
    description: 'Quantos % dos leads viraram horário confirmado?',
    value: '25-35%',
    subtitle: 'meta estabelecida',
    color: 'text-haast-primary',
  },
  {
    icon: Users,
    title: 'Show rate (taxa de comparecimento)',
    description: 'Quantos % agendados realmente aparecem?',
    value: '≥ 70%',
    subtitle: 'com nossas automações',
    color: 'text-haast-primary',
  },
  {
    icon: TrendingUp,
    title: 'Conversão Agendamento → Fechamento',
    description: 'Quantos % que vieram fecharam o serviço?',
    value: '≥ 40%',
    subtitle: 'meta de conversão',
    color: 'text-haast-primary',
  },
  {
    icon: DollarSign,
    title: 'ROI real',
    description: 'Para cada R$ 1,00 investido, quanto voltou em receita?',
    value: '3-8x',
    subtitle: 'em 90 dias',
    color: 'text-haast-primary',
  },
];

const vanityMetrics = [
  'Curtidas',
  'Impressões',
  'Engajamento',
  'Views',
  'Seguidores',
];

export function MetricsSection() {
  return (
    <section id="metricas" className="section-padding bg-haast-black-graphite">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Métricas que{' '}
            <span className="gradient-text">importam</span> (e as que não importam)
          </h2>
          <p className="text-xl text-haast-gray-light max-w-3xl mx-auto">
            Enquanto outros se preocupam com vaidade, nós focamos no que move o ponteiro do seu caixa.
          </p>
        </motion.div>

        {/* Métricas de Vaidade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <X className="h-6 w-6 text-red-600" />
              <h3 className="text-2xl font-bold text-red-600">
                Métricas de vaidade que ignoramos
              </h3>
            </div>
            <p className="text-gray-600 text-center mb-6">
              Bonito no relatório, inútil no caixa.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {vanityMetrics.map((metric, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium border border-red-200"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Métricas que Importam */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <CheckCircle className="h-6 w-6 text-haast-primary" />
              <h3 className="text-2xl font-bold text-haast-primary">
                Métricas que movem o ponteiro
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-haast-gray-dark rounded-xl p-6 border border-haast-gray-medium hover:border-haast-primary transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-haast-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-haast-primary/20 transition-colors duration-300">
                      <metric.icon className="h-8 w-8 text-haast-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-haast-primary transition-colors duration-300">
                      {metric.title}
                    </h4>
                    <p className="text-sm text-haast-gray-light mb-4">
                      {metric.description}
                    </p>
                    <div className="space-y-1">
                      <div className={`text-3xl font-bold ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-haast-gray-light">
                        {metric.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Diagnóstico Gratuito */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 shadow-2xl relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto border-2 border-white/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-3">
                🎯 Diagnóstico <span className="text-haast-primary">Gratuito</span> da Sua Estratégia Digital
              </h4>
              
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Descubra <strong className="text-haast-primary">exatamente onde você está perdendo pacientes</strong> e receitas. 
                Análise completa em 15 minutos.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <div className="flex items-center space-x-2 text-sm text-white/90">
                  <div className="w-2 h-2 bg-haast-primary rounded-full"></div>
                  <span>Análise de 7 pontos críticos</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/90">
                  <div className="w-2 h-2 bg-haast-primary rounded-full"></div>
                  <span>Relatório personalizado</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/90">
                  <div className="w-2 h-2 bg-haast-primary rounded-full"></div>
                  <span>100% gratuito</span>
                </div>
              </div>

              <WhatsAppButton 
                size="lg" 
                source="diagnostic_cta"
                className="group relative w-full md:w-auto inline-flex items-center justify-center px-4 md:px-8 py-4 text-base md:text-lg font-bold text-white bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-xl shadow-lg hover:shadow-xl hover:shadow-haast-primary/25 transition-all duration-300 hover:scale-100 md:hover:scale-105 border border-haast-primary/50"
              >
                <span className="relative z-10 flex items-center space-x-2 md:space-x-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm md:text-base">QUERO MEU DIAGNÓSTICO GRATUITO</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0 md:group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Efeito de brilho no hover - apenas desktop */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-xl"></div>
              </WhatsAppButton>

              <p className="text-xs text-white/80 mt-4 opacity-80">
                ⚡ Resposta em até 2 minutos • Sem compromisso • Dados seguros
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
