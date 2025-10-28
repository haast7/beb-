'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, CheckCircle, DollarSign, Clock, Target, Users, BarChart3 } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const services = [
  {
    title: 'Treinamento Comercial',
    items: [
      'Scripts de vendas para WhatsApp',
      'Técnicas de contorno de objeção',
      'Fechamento de agendamentos',
      'Follow-up estruturado',
      'Redução de no-show',
      'Upsell e cross-sell',
    ],
    price: 'Sob consulta',
  },
  {
    title: 'Treinamento em Marketing Digital',
    items: [
      'Como interpretar métricas',
      'Gestão de redes sociais',
      'Criação de conteúdo básico',
      'Boas práticas de atendimento online',
    ],
    price: 'Sob consulta',
  },
  {
    title: 'Consultoria Estratégica',
    items: [
      'Análise de mercado e concorrência',
      'Definição de posicionamento',
      'Estratégia de precificação',
      'Expansão geográfica',
      'Novos serviços e produtos',
    ],
    price: 'Sob consulta',
  },
  {
    title: 'Planejamento de Crescimento',
    items: [
      'Roadmap de 12 meses',
      'Metas e KPIs definidos',
      'Budget marketing otimizado',
      'Plano de contratações',
      'Projeção de ROI',
    ],
    price: 'Sob consulta',
  },
  {
    title: 'Auditoria de Operações',
    items: [
      'Processos comerciais',
      'Fluxo de atendimento',
      'Gargalos operacionais',
      'Tecnologias subutilizadas',
      'Recomendações práticas',
    ],
    price: 'Sob consulta',
  },
  {
    title: 'Mentoría Executiva',
    items: [
      'Reuniões mensais 1-on-1',
      'Análise de resultados',
      'Decisões estratégicas',
      'Networking e conexões',
      'Aceleração de crescimento',
    ],
    price: 'Sob consulta',
  },
];

export function ConsultoriaSection() {
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
          <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-indigo-500/20">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Consultoria &{' '}
              <span className="gradient-text">Treinamento</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Capacitação de equipes e consultoria estratégica para crescimento sustentável.
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
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
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
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h4>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 rounded-xl p-3 text-center">
                  <p className="text-indigo-400 font-bold">
                    {service.price}
                  </p>
                </div>
              </motion.div>
            ))}
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
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para acelerar seu crescimento?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Agende uma consultoria estratégica e descubra como potencializar os resultados da sua clínica.
            </p>
            <WhatsAppButton
              size="lg"
              source="consultoria"
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
