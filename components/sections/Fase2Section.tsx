'use client';

import { motion } from 'framer-motion';
import { Settings, BarChart3, Globe, Users, Camera, CheckCircle, Clock, Zap } from 'lucide-react';

const infrastructureSteps = [
  {
    icon: BarChart3,
    title: '2.1. Implementação de Tracking Avançado',
    description: 'Google Tag Manager (GTM) + Google Analytics 4 (GA4) + Meta Pixel + Google Ads Conversion Tracking',
    items: [
      'Google Tag Manager (GTM) configurado',
      'Google Analytics 4 (GA4) com eventos personalizados',
      'Meta Pixel + Conversions API (CAPI)',
      'Google Ads Conversion Tracking',
      'Rastreamento de telefone (quando necessário)',
    ],
    deliverables: 'Dashboard de tracking funcionando + documento de eventos configurados',
    time: '3-5 dias',
    whyImportant: 'Sem tracking correto, você não sabe qual campanha trouxe qual paciente, quanto custou cada agendamento, qual criativo funciona melhor, onde está vazando dinheiro.',
  },
  {
    icon: Globe,
    title: '2.2. Criação de Landing Pages de Alta Conversão',
    description: 'Não usamos site institucional para tráfego pago. Usamos landing pages focadas.',
    items: [
      'Landing page one-page responsiva (< 2s carregamento)',
      'Mobile-first (80% dos acessos vêm do celular)',
      'Elementos de conversão otimizados',
      'Copy persuasiva focada em benefícios',
      'Prova de autoridade e selos de confiança',
    ],
    deliverables: 'LP publicada + versão mobile testada + relatório de velocidade',
    time: '5-7 dias por landing page',
    whyImportant: 'Cada serviço prioritário ganha uma landing page dedicada, otimizada para conversão específica.',
  },
  {
    icon: Settings,
    title: '2.3. Estruturação de Contas de Anúncios',
    description: 'Google Ads + Meta Ads com acesso transparente total',
    items: [
      'Google Ads: Pesquisa + Performance Max + Display',
      'Meta Ads: Conversão + Tráfego + Engajamento',
      'Estrutura de campanhas por serviço',
      'Públicos salvos e customizados',
      'Acesso TOTAL (administrador) para você',
    ],
    deliverables: 'Contas estruturadas + documento de acessos + tutorial de visualização',
    time: '2-3 dias',
    whyImportant: 'Você recebe acesso TOTAL (administrador). Contas no seu nome. Você vê cada centavo gasto em tempo real. Zero caixa preta.',
  },
  {
    icon: Camera,
    title: '2.4. Criação de Pack Social (Bônus)',
    description: 'Enquanto preparamos as campanhas, já começamos a alimentar suas redes',
    items: [
      '12 peças criativas/mês (8 posts + 4 stories/reels)',
      'Copy persuasiva para cada arte',
      'Identidade visual alinhada com a clínica',
      'Banco de destaques no Instagram',
      'Calendário editorial',
    ],
    deliverables: 'Artes + calendário + agendamento automático',
    time: 'Recorrente (mensal)',
    whyImportant: 'Mantém suas redes ativas enquanto as campanhas de tráfego pago fazem o trabalho pesado.',
  },
  {
    icon: Users,
    title: '2.5. Treinamento da Equipe Comercial',
    description: 'Tráfego sem vendas treinadas = dinheiro jogado fora.',
    items: [
      'Módulo 1: Mindset Comercial (30min)',
      'Módulo 2: Scripts de WhatsApp (60min)',
      'Módulo 3: Follow-up Estruturado (30min)',
      'Módulo 4: Redução de No-Show (30min)',
    ],
    deliverables: 'Playbook comercial em PDF + gravação do treinamento + scripts prontos para usar',
    time: '2 horas de treinamento + 1 hora de Q&A',
    whyImportant: 'Cada lead custa dinheiro. Velocidade de resposta = taxa de conversão. Sua equipe para de improvisar.',
  },
];

const checkpoint = [
  'Tracking funcionando 100%',
  'Landing pages publicadas e rápidas',
  'Contas de anúncios estruturadas',
  'Equipe treinada',
  'Acessos fornecidos ao cliente',
];

export function Fase2Section() {
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
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite">
                  Fase 2: Infraestrutura Técnica
                </h2>
                <p className="text-purple-600 text-lg">Semanas 2-3</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-haast-black-graphite mb-4">
              Aqui está a diferença entre nós e agências comuns
            </h3>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              A maioria das agências pula essa fase. Nós não. Porque sem infraestrutura sólida, você está pilotando no escuro.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {infrastructureSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Header */}
                <div className="lg:col-span-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-haast-black-graphite mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Items */}
                  <div>
                    <h5 className="text-lg font-semibold text-haast-black-graphite mb-4">O que fazemos:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why Important */}
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <div className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h6 className="text-haast-black-graphite font-semibold mb-1">Por que isso importa?</h6>
                        <p className="text-gray-700 text-sm">{step.whyImportant}</p>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-haast-black-graphite font-semibold mb-1">Entregável:</h6>
                          <p className="text-gray-700 text-sm">{step.deliverables}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-haast-black-graphite font-semibold mb-1">Tempo:</h6>
                          <p className="text-gray-700 text-sm">{step.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Checkpoint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-haast-black-graphite mb-6 text-center">
              Checkpoint: Antes de ir para Fase 3, validamos TUDO
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {checkpoint.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <span className="text-haast-black-graphite font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Time Investment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Tempo Total da Fase 2</h3>
                <p className="text-3xl font-bold text-purple-200">10-15 dias úteis</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Seu Investimento</h3>
                <p className="text-3xl font-bold text-purple-200">4-6 horas</p>
                <p className="text-purple-200 text-sm mt-1">Aprovações + treinamento</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

