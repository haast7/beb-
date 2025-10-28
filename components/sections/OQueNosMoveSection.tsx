'use client';

import { motion } from 'framer-motion';
import { Target, AlertTriangle, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const painPoints = [
  'Será que mês que vem vai entrar paciente?',
  'Por que semana passada lotou e essa tá vazia?',
  'Quanto eu preciso investir em marketing pra ter resultado?',
];

const mission = [
  'Acabar com a dependência de indicação e planilha de Excel',
  'Transformar marketing de "gasto que a gente torce pra funcionar" em investimento previsível que retorna 3-8x',
  'Garantir que todo dono de clínica saiba exatamente quantos agendamentos vai ter no próximo mês',
];

const results = [
  {
    icon: TrendingUp,
    title: 'Previsibilidade total',
    description: 'Você sabe exatamente quantos agendamentos vai ter',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Shield,
    title: 'Controle do mercado',
    description: 'Você domina sua região, não o contrário',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    title: 'ROI previsível',
    description: 'Cada real investido retorna 3-8x em receita',
    color: 'from-purple-500 to-purple-600',
  },
];

export function OQueNosMoveSection() {
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
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-red-500/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Nossa missão não é{' '}
              <span className="gradient-text">bonita. É brutal.</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              <strong className="text-white">Acabar com a dependência de indicação e planilha de Excel.</strong>
            </p>
          </div>
        </motion.div>

        {/* O Problema */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">A angústia que todo dono de clínica conhece</h3>
                <p className="text-white/80">Todo dono de clínica ou laboratório que conhecemos vive nessa angústia:</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0" />
                  <span className="text-white/90 text-lg">"{point}"</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <p className="text-white text-xl font-bold">
                <strong className="text-red-400">Ninguém deveria tocar um negócio de saúde sem previsibilidade.</strong>
              </p>
            </div>
          </div>
        </motion.div>

        {/* A Missão */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Nossa missão é clara</h3>
                <p className="text-white/80">Transformar marketing de despesa em investimento previsível</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {mission.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0 mt-1" />
                  <span className="text-white/90 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-haast-primary/20 to-haast-primary/10 rounded-xl p-6 border border-haast-primary/30 text-center">
              <p className="text-white text-lg">
                Quando um cliente nosso olha para o próximo mês e sabe exatamente quantos agendamentos vai ter, 
                quantos vão comparecer, e quanto vai faturar...
              </p>
              <p className="text-yellow-400 text-xl font-bold mt-4">
                Missão cumprida.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Resultados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${result.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <result.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-white font-bold text-xl mb-2">{result.title}</h4>
              <p className="text-white/80">{result.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para acabar com a dependência de indicação?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Transforme sua clínica em uma máquina de agendamento previsível. 
              Sem mais "torcer para dar certo".
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Target className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold text-yellow-400">
                Missão: Previsibilidade total
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
