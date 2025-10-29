'use client';

import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const credibilityItems = [
  'Transparência total: acesso às contas de anúncio',
  'Relatórios semanais em tempo real',
  'Compliance: LGPD + Conselhos Profissionais',
  'Infraestrutura que agências comuns não dominam',
];

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-haast-primary to-haast-black-graphite">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-haast-primary to-haast-black-graphite" />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-haast-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-haast-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 pb-8 md:py-16">
          {/* Conteúdo Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-hero text-white text-balance"
            >
              Sua agenda vazia enquanto seus{' '}
              <span className="gradient-text">concorrentes estão lotados?</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-body text-white/90 max-w-2xl">
                Transformamos clínicas e laboratórios em máquinas de agendamento previsível.
              </p>
              <p className="text-body text-white/90 max-w-2xl">
                <strong className="text-white">Tráfego qualificado + infraestrutura técnica + equipe treinada = ROI real em 30-90 dias.</strong>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 md:space-y-6"
            >
              <WhatsAppButton
                size="xl"
                source="hero"
                className="group w-full md:w-auto hover:scale-100 md:hover:scale-105 hover:shadow-none md:hover:shadow-haast-glow"
              >
                Quero agendamentos previsíveis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0 md:group-hover:translate-x-1 transition-transform" />
              </WhatsAppButton>

              {/* Elementos de Credibilidade */}
              <div className="space-y-3">
                {credibilityItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0" />
                    <span className="text-sm text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual/Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="space-y-4">
                {/* Header do Dashboard */}
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold">Dashboard Haast</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>

                {/* Métricas */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                    <div className="text-2xl font-bold text-white">+47</div>
                    <div className="text-xs text-white/80">Agendamentos/mês</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                    <div className="text-2xl font-bold text-white">R$ 22</div>
                    <div className="text-xs text-white/80">CPL médio</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                    <div className="text-2xl font-bold text-white">78%</div>
                    <div className="text-xs text-white/80">Show rate</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                    <div className="text-2xl font-bold text-white">5.2x</div>
                    <div className="text-xs text-white/80">ROI</div>
                  </div>
                </div>

                {/* Gráfico */}
                <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                  <div className="text-sm text-white/80 mb-2">Conversões por dia</div>
                  <div className="flex items-end space-x-1 h-16">
                    {[2, 4, 3, 6, 5, 8, 7, 9, 6, 8, 10, 12].map((height, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-t"
                        style={{ height: `${height * 4}px`, width: '8px' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-haast-primary/20 rounded-3xl blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
