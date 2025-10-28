'use client';

import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CheckCircle, ArrowRight, Clock, Target, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const timelineSteps = [
  {
    icon: Target,
    title: 'Diagnóstico',
    duration: 'Semana 1',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Setup',
    duration: 'Semanas 2-3',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Ativação',
    duration: 'Semanas 4-6',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Clock,
    title: 'Escala',
    duration: 'Semanas 7-12',
    color: 'from-orange-500 to-orange-600',
  },
];

const credibilityItems = [
  'Processo transparente, etapas claras',
  'Resultado previsível em 90 dias',
  '30-50 agendamentos qualificados/mês',
  'Infraestrutura que agências comuns ignoram',
];

export function ComoFuncionaHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-haast-primary to-haast-black-graphite">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-haast-primary to-haast-black-graphite" />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-haast-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-haast-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-hero text-white text-balance"
            >
              De clínica vazia para{' '}
              <span className="gradient-text">agenda lotada em 90 dias</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-body text-white/90 max-w-2xl">
                Processo transparente, etapas claras, resultado previsível.
              </p>
              <p className="text-body text-white/90 max-w-2xl">
                <strong className="text-white">Veja como transformamos sua presença digital em máquina de agendamentos.</strong>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <WhatsAppButton
                size="xl"
                source="hero-como-funciona"
                className="group"
              >
                Quero entender o processo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

          {/* Timeline Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                {/* Header do Timeline */}
                <div className="text-center">
                  <h3 className="text-white font-bold text-xl mb-2">Processo Haast</h3>
                  <p className="text-white/80 text-sm">4 fases para agenda lotada</p>
                </div>

                {/* Timeline Steps */}
                <div className="space-y-4">
                  {timelineSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      {/* Step Number & Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-bold text-lg">{step.title}</h4>
                          <span className="text-white/80 text-sm font-medium">{step.duration}</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 1 + index * 0.2 }}
                            className={`h-2 bg-gradient-to-r ${step.color} rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Resultado */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="bg-gradient-to-r from-haast-primary/20 to-haast-primary/10 rounded-xl p-4 border border-haast-primary/30"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">30-50</div>
                    <div className="text-sm text-white/80">Agendamentos/mês</div>
                    <div className="text-xs text-white/60 mt-1">Após 90 dias</div>
                  </div>
                </motion.div>
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

