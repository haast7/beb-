'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe, Users, Shield } from 'lucide-react';

const regions = [
  { name: 'Nordeste', states: 'BA, PE, CE, RN' },
  { name: 'Sudeste', states: 'SP, RJ, MG, ES' },
  { name: 'Sul', states: 'PR, SC, RS' },
];

const info = [
  {
    icon: MapPin,
    title: 'Sede física',
    description: 'Vitória da Conquista/BA',
    detail: 'Atendimento presencial para clientes da região',
  },
  {
    icon: Globe,
    title: 'Atuação remota',
    description: 'Todo Brasil',
    detail: '90% dos nossos clientes nunca pisaram no nosso escritório. Reuniões via Google Meet/Zoom funcionam perfeitamente.',
  },
  {
    icon: Users,
    title: 'Concentração de clientes',
    description: 'Regiões com maior presença',
    detail: 'Nordeste, Sudeste e Sul do Brasil',
  },
  {
    icon: Shield,
    title: 'Limitação estratégica',
    description: 'Máximo 2-3 clientes por especialidade',
    detail: 'Trabalhamos com no máximo 2-3 clientes da mesma especialidade por cidade/região (para evitar concorrência direta).',
  },
];

export function OndeAtuamosSection() {
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
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-gray-dark/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-haast-primary/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Onde{' '}
              <span className="gradient-text">atuamos</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Presencial e remoto. Onde você estiver, nossa infraestrutura digital chega.
            </p>
          </div>
        </motion.div>

        {/* Informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {info.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90 font-semibold mb-2">
                    {item.description}
                  </p>
                  <p className="text-white/80 text-sm">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regiões */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Regiões com maior concentração de clientes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{region.name}</h4>
                <p className="text-white/80">{region.states}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
