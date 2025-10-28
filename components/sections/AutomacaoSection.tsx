'use client';

import { motion } from 'framer-motion';
import { Settings, ArrowRight, CheckCircle, DollarSign, Clock, Zap, BarChart3, MessageSquare } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const automationTypes = [
  {
    title: 'Automação de Marketing',
    items: [
      'E-mail marketing automatizado',
      'Sequências de nutrição de leads',
      'Remarketing automatizado',
      'Follow-up programado',
      'Segmentação dinâmica',
    ],
  },
  {
    title: 'Automação de Vendas',
    items: [
      'WhatsApp Business API',
      'Chatbots inteligentes',
      'Respostas rápidas configuradas',
      'Régua de follow-up',
      'Qualificação automática de leads',
    ],
  },
  {
    title: 'Automação de Agendamento',
    items: [
      'Integração com Google Calendar',
      'Lembretes automáticos (24h, 2h antes)',
      'Confirmação via WhatsApp/SMS',
      'Reagendamento automatizado',
      'Fila de espera inteligente',
    ],
  },
  {
    title: 'Integrações de Sistemas',
    items: [
      'CRM ↔ Google Ads/Meta',
      'Site ↔ WhatsApp',
      'Formulário ↔ Planilha/CRM',
      'Agendamento ↔ Prontuário',
      'Gateway pagamento ↔ Faturamento',
    ],
  },
];

const advanced = [
  'Webhooks & APIs Customizadas',
  'Integração com qualquer sistema',
  'Desenvolvimento de APIs proprietárias',
  'Sincronização de dados em tempo real',
  'Dashboards Customizados',
  'Google Data Studio (Looker Studio)',
  'Power BI',
  'Metabase',
  'Dados consolidados de múltiplas fontes',
];

export function AutomacaoSection() {
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
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-orange-500/20">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Automação &{' '}
              <span className="gradient-text">Integrações</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Conectamos sistemas, automatizamos processos e eliminamos trabalho manual repetitivo.
            </p>
          </div>
        </motion.div>

        {/* Tipos de Automação */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-4">
                  {type.title}
                </h4>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Avançado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Soluções Avançadas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advanced.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
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
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para acelerar seu crescimento?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Agende uma consultoria estratégica e descubra como potencializar os resultados da sua clínica.
            </p>
            <WhatsAppButton
              size="lg"
              source="automacao"
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
