'use client';

import { motion } from 'framer-motion';
import { Search, Settings, Rocket, TrendingUp, CheckCircle } from 'lucide-react';

const phases = [
  {
    icon: Search,
    title: 'Fase 1: Diagnóstico',
    duration: 'Semana 1',
    description: 'Auditoria completa + definição de estratégia',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Settings,
    title: 'Fase 2: Infraestrutura',
    duration: 'Semanas 2-3',
    description: 'Setup técnico + implementação de tracking',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: Rocket,
    title: 'Fase 3: Ativação',
    duration: 'Semanas 4-6',
    description: 'Campanhas ao vivo + otimização contínua',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: TrendingUp,
    title: 'Fase 4: Escala',
    duration: 'Semanas 7-12',
    description: 'Aumento de budget + previsibilidade',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
];

const keyPoints = [
  'Processo estruturado em 4 fases claras',
  'Metodologia testada em dezenas de clínicas',
  'Transparência total: você vê tudo',
  'Resultado típico: 30-50 agendamentos/mês',
  'Infraestrutura que agências comuns ignoram',
];

export function OverviewSection() {
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
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-gray-dark/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 shadow-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              O método Haast não é{' '}
              <span className="gradient-text">mágica. É engenharia.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              Enquanto outras agências "rodam campanhas e torcem", nós construímos infraestrutura digital sólida que gera resultado previsível.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong className="text-haast-primary">Nosso processo em 4 fases:</strong>
            </p>
          </div>
        </motion.div>

        {/* Fases do Processo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${phase.bgColor} rounded-2xl p-6 border-2 ${phase.borderColor} hover:border-haast-primary transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <phase.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-haast-black-graphite group-hover:text-haast-primary transition-colors duration-300">
                      {phase.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 bg-white/50 px-3 py-1 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className={`h-2 bg-gradient-to-r ${phase.color} rounded-full`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resultado Típico */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Resultado típico: 30-50 agendamentos qualificados/mês após 90 dias
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Não prometemos números mágicos. Prometemos processo estruturado que gera resultado previsível.
          </p>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-haast-black-graphite mb-6 text-center">
              Por que o método Haast funciona?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

