'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight, CheckCircle, DollarSign, Clock, Code, Brain, Shield } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const services = [
  {
    title: 'Plataformas Customizadas',
    items: [
      'Sistema de gestão de clínicas (do zero)',
      'Portal do paciente proprietário',
      'Telemedicina integrada',
      'Marketplace médico',
      'Rede de clínicas integrada',
    ],
  },
  {
    title: 'Integrações Avançadas',
    items: [
      'API de prontuário eletrônico',
      'Sistemas legados (SOAP, REST)',
      'Equipamentos médicos (IoT)',
      'Laboratórios terceirizados',
      'Convênios e operadoras',
    ],
  },
  {
    title: 'Inteligência Artificial & Machine Learning',
    items: [
      'Chatbot com IA',
      'Análise de sentimento',
      'Predição de no-show',
      'Sugestão de diagnósticos (apoio)',
      'Otimização de agenda (IA)',
    ],
  },
  {
    title: 'Blockchain & Web3',
    items: [
      'Prontuário em blockchain',
      'NFT de certificados médicos',
      'Smart contracts para pagamentos',
    ],
  },
  {
    title: 'Consultoria Técnica Avançada',
    items: [
      'Arquitetura de sistemas',
      'Escolha de tecnologias (tech stack)',
      'Escalabilidade e performance',
      'DevOps e infraestrutura cloud',
    ],
  },
];

export function ProjetosComplexosSection() {
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
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-purple-500/20">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              Projetos Complexos &{' '}
              <span className="gradient-text">Desenvolvimento Customizado</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Soluções sob medida para necessidades específicas que ferramentas prontas não resolvem.
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
          <h3 className="text-2xl font-bold text-haast-black-graphite mb-8 text-center">
            O que fazemos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl"
              >
                <h4 className="text-xl font-bold text-haast-black-graphite mb-4">
                  {service.title}
                </h4>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
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
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para acelerar seu crescimento?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Agende uma consultoria estratégica e descubra como potencializar os resultados da sua clínica.
            </p>
            <WhatsAppButton
              size="lg"
              source="projetos-complexos"
              message="Olá! Gostaria de agendar uma consultoria estratégica para minha clínica."
              className="group w-full md:w-auto hover:scale-100 md:hover:scale-105"
            >
              Agendar Consultoria Estratégica
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0 md:group-hover:translate-x-1 transition-transform" />
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
