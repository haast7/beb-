'use client';

import { motion } from 'framer-motion';
import { Eye, Zap, Target, Crown, ArrowRight } from 'lucide-react';

const eagleFacts = [
  {
    icon: Eye,
    title: 'Visão aguçada que detectava movimento a quilômetros',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Velocidade de ataque de 80 km/h em mergulho',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Target,
    title: 'Precisão letal. Sem desperdício de energia',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Crown,
    title: 'Domínio territorial inquestionável',
    color: 'from-purple-500 to-purple-600',
  },
];

const principles = [
  'Esses não são apenas atributos de um predador extinto.',
  'São os princípios que todo negócio de sucesso precisa dominar.',
  'E é exatamente o que entregamos para cada clínica e laboratório que confia na Haast.',
];

export function ManifestoSection() {
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
              Por que{' '}
              <span className="gradient-text">Haast?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              A <strong className="text-haast-primary">Águia de Haast</strong> (Hieraaetus moorei) foi a maior águia de rapina que já existiu. 
              Extinta há 600 anos, ela dominava os céus da Nova Zelândia com envergadura de 3 metros e capacidade de caçar presas 15 vezes seu próprio peso.
            </p>
          </div>
        </motion.div>

        {/* Atributos da Águia */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eagleFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-haast-primary transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${fact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <fact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-haast-black-graphite group-hover:text-haast-primary transition-colors duration-300">
                      {fact.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Princípios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">
              A conexão entre passado e presente
            </h3>
            
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl text-white/90 leading-relaxed"
                >
                  {principle}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center justify-center space-x-2"
            >
              <ArrowRight className="h-5 w-5 text-yellow-400" />
              <span className="text-lg font-semibold text-yellow-400">
                Descubra como aplicamos esses princípios
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Curiosidade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-haast-black-graphite mb-4">
                A águia que inspirou nosso nome
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                A águia Haast não era apenas grande. Era <strong className="text-haast-primary">estrategicamente superior</strong>. 
                Cada movimento tinha propósito. Cada ataque era calculado. Cada presa era escolhida com precisão cirúrgica.
              </p>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                <strong>Nós operamos com a mesma mentalidade.</strong> Não atiramos para todos os lados. 
                Planejamos, executamos e dominamos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
