'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Imagens reais dos clientes
const companies = [
  {
    name: 'Clínica Ortopédica São Paulo',
    logo: '/clients/1.png',
    alt: 'Logo da Clínica Ortopédica São Paulo',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    name: 'Laboratório Diagnóstico Plus',
    logo: '/clients/2.png',
    alt: 'Logo do Laboratório Diagnóstico Plus',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
  },
  {
    name: 'Clínica Odontológica Premium',
    logo: '/clients/3.png',
    alt: 'Logo da Clínica Odontológica Premium',
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
  },
  {
    name: 'Centro de Imagem Médica',
    logo: '/clients/4.png',
    alt: 'Logo do Centro de Imagem Médica',
    color: 'bg-gradient-to-br from-red-500 to-red-600',
  },
  {
    name: 'Clínica de Cardiologia',
    logo: '/clients/5.png',
    alt: 'Logo da Clínica de Cardiologia',
    color: 'bg-gradient-to-br from-orange-500 to-orange-600',
  },
  {
    name: 'Laboratório de Análises',
    logo: '/clients/6.png',
    alt: 'Logo do Laboratório de Análises',
    color: 'bg-gradient-to-br from-teal-500 to-teal-600',
  },
  {
    name: 'Centro Médico Especializado',
    logo: '/clients/7.png',
    alt: 'Logo do Centro Médico Especializado',
    color: 'bg-gradient-to-br from-pink-500 to-pink-600',
  },
  {
    name: 'Clínica de Especialidades',
    logo: '/clients/8.png',
    alt: 'Logo da Clínica de Especialidades',
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
  },
];

export function TrustedCompaniesSection() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-haast-black-graphite mb-4">
            Empresas que{' '}
            <span className="bg-gradient-to-r from-haast-primary to-haast-primary-dark bg-clip-text text-transparent">confiam em nós</span>
          </h2>
          <p className="text-gray-600">
            Mais de 50 clínicas e laboratórios já transformaram seus resultados conosco
          </p>
        </motion.div>

        {/* Carrossel Infinito */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Primeira sequência de logos */}
            {companies.map((company, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex-shrink-0"
                style={{ marginRight: '4rem' }}
              >
                <div className="relative w-56 h-32 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200">
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    width={240}
                    height={140}
                    className="w-full h-full object-contain transition-all duration-300"
                    priority={false}
                  />
                </div>
              </motion.div>
            ))}

            {/* Segunda sequência de logos (duplicada para loop infinito) */}
            {companies.map((company, index) => (
              <motion.div
                key={`second-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex-shrink-0"
                style={{ marginRight: '4rem' }}
              >
                <div className="relative w-56 h-32 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200">
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    width={240}
                    height={140}
                    className="w-full h-full object-contain transition-all duration-300"
                    priority={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradientes laterais para suavizar as bordas */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>

        {/* Estatísticas de credibilidade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-haast-primary mb-2">50+</div>
              <div className="text-sm text-gray-600">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-haast-primary mb-2">R$ 1M+</div>
              <div className="text-sm text-gray-600">Receita Gerada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-haast-primary mb-2">95%</div>
              <div className="text-sm text-gray-600">Taxa de Satisfação</div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
