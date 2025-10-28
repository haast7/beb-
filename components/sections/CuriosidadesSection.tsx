'use client';

import { motion } from 'framer-motion';
import { Eye, Zap, Target, Crown, AlertTriangle, ArrowRight } from 'lucide-react';

const curiosities = [
  {
    icon: Eye,
    title: 'Visão 8x mais aguçada que humanos',
    description: 'Detectava movimento de presas a quilômetros de distância',
  },
  {
    icon: Zap,
    title: 'Velocidade de ataque: 80 km/h',
    description: 'Mergulhava dos céus com precisão letal',
  },
  {
    icon: Target,
    title: 'Garras de 7-9cm',
    description: 'Projetadas para perfurar e segurar presas grandes',
  },
  {
    icon: Crown,
    title: 'Caçava presas 15x seu peso',
    description: 'Algo que nenhuma outra águia moderna consegue',
  },
  {
    icon: Crown,
    title: 'Domínio territorial absoluto',
    description: 'Nenhum predador ousava invadir seu espaço',
  },
];

const extinction = {
  title: 'Por que se extinguiu?',
  description: 'Quando os Moas (sua presa principal) foram extintos por humanos, a águia Haast perdeu sua base alimentar e desapareceu em poucas gerações.',
  lesson: 'A lição: Adaptação é sobrevivência. Negócios que não evoluem, morrem. Por isso revisamos estratégias toda semana, não todo ano.',
};

export function CuriosidadesSection() {
  return (
    <section className="section-padding bg-gray-50">
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
              Curiosidades sobre a{' '}
              <span className="gradient-text">águia Haast</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Conheça a inspiração por trás do nome. 
              Uma criatura que dominou os céus da Nova Zelândia há 600 anos.
            </p>
          </div>
        </motion.div>

        {/* Informações Básicas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-haast-black-graphite mb-6 text-center">
              Informações científicas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <h4 className="text-haast-black-graphite font-bold mb-2">Nome científico</h4>
                <p className="text-gray-600 text-sm">Hieraaetus moorei</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">NZ</span>
                </div>
                <h4 className="text-haast-black-graphite font-bold mb-2">Habitat</h4>
                <p className="text-gray-600 text-sm">Nova Zelândia (extinta há ~600 anos)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3m</span>
                </div>
                <h4 className="text-haast-black-graphite font-bold mb-2">Envergadura</h4>
                <p className="text-gray-600 text-sm">Até 3 metros</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">15kg</span>
                </div>
                <h4 className="text-haast-black-graphite font-bold mb-2">Peso</h4>
                <p className="text-gray-600 text-sm">10-15 kg (fêmeas eram maiores)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Características Únicas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-haast-black-graphite mb-8 text-center">
            Características únicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curiosities.map((curiosity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-haast-primary/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                    <curiosity.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-haast-black-graphite font-bold text-lg mb-2">
                      {curiosity.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {curiosity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extinção e Lição */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-red-500/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-haast-black-graphite mb-4">
                {extinction.title}
              </h3>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                {extinction.description}
              </p>
            </div>
            
            <div className="bg-white/50 rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-3">
                <ArrowRight className="h-5 w-5 text-haast-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-haast-black-graphite font-semibold mb-2">
                    A lição para os negócios:
                  </h4>
                  <p className="text-gray-700">
                    {extinction.lesson}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Inspirados pela maior águia que já existiu
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Construídos para resultados que permanecem. 
              <strong className="text-yellow-400"> Como a águia Haast, nós não improvisamos. Executamos.</strong>
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Crown className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold text-yellow-400">
                Precisão. Estratégia. Resultado.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
