'use client';

import { motion } from 'framer-motion';
import { Code, ArrowRight, CheckCircle, DollarSign, Clock, Smartphone, Globe, ShoppingCart } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const services = [
  {
    icon: Globe,
    title: 'Landing Pages de Alta Conversão',
    items: [
      'Design focado em CTA único',
      'Mobile-first (responsivo total)',
      'Carregamento < 2 segundos',
      'A/B testing structure',
      'Integração com CRM/WhatsApp',
      'Formulários inteligentes',
    ],
    price: 'Sob consulta',
  },
  {
    icon: Globe,
    title: 'Sites Institucionais',
    items: [
      'WordPress customizado',
      'React/Next.js (tecnologia moderna)',
      'CMS fácil de usar',
      'SEO-friendly desde o início',
      'Integração com Google Analytics',
      'Sistema de blog integrado',
    ],
    price: 'Sob consulta',
  },
  {
    icon: Globe,
    title: 'Portais Médicos Complexos',
    items: [
      'Agendamento online integrado',
      'Portal do paciente',
      'Sistema de prontuário (integração)',
      'Área restrita/login',
      'Múltiplos profissionais',
      'Multi-unidades',
    ],
    price: 'Sob consulta',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Médico',
    items: [
      'Venda de planos/pacotes',
      'Produtos (suplementos, equipamentos)',
      'Gateway de pagamento',
      'Gestão de estoque',
      'Sistema de cupons/desconto',
    ],
    price: 'Sob consulta',
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    items: [
      'App iOS e Android',
      'Sistema de notificações',
      'Agendamento via app',
      'Telemedicina (videochamada)',
      'Integração com wearables',
    ],
    price: 'Sob consulta',
  },
];

const maintenance = [
  'Atualizações de segurança',
  'Backup automático',
  'Monitoramento 24/7',
  'Correções de bugs',
  'Melhorias contínuas',
];

export function DesenvolvimentoWebSection() {
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
              <Code className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              Desenvolvimento Web &{' '}
              <span className="gradient-text">Apps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Sites, landing pages, portais e aplicativos desenvolvidos para conversão e performance.
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
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-haast-black-graphite">
                    {service.title}
                  </h4>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl p-3 text-center">
                  <p className="text-purple-600 font-bold">
                    {service.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Manutenção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-purple-500/5 to-purple-600/5 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-haast-black-graphite mb-6 text-center">
              Manutenção & Suporte
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {maintenance.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
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
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para acelerar seu crescimento?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Agende uma consultoria estratégica e descubra como potencializar os resultados da sua clínica.
            </p>
            <WhatsAppButton
              size="lg"
              source="desenvolvimento-web"
              message="Olá! Gostaria de agendar uma consultoria estratégica para minha clínica."
              className="group"
            >
              Agendar Consultoria Estratégica
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
