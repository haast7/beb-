'use client';

import { motion } from 'framer-motion';
import { Rocket, BarChart3, Target, RefreshCw, MessageSquare, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const activationSteps = [
  {
    icon: Rocket,
    title: '3.1. Lançamento de Campanhas (Semana 4)',
    description: 'Campanhas ao vivo. Dados chegando. Decisões sendo tomadas.',
    items: [
      'Google Ads: Campanhas de pesquisa ativadas',
      'Meta Ads: Campanhas de conversão ativadas',
      'WhatsApp Business: Respostas rápidas configuradas',
      'Budget diário definido (ex: R$ 100/dia)',
      'Raio geográfico ajustado (5-15km)',
    ],
    expectation: 'Primeiros leads: 24-48h | Volume significativo: 7-10 dias | Maturação completa: 30-60 dias',
  },
  {
    icon: BarChart3,
    title: '3.2. Monitoramento Diário (Semanas 4-6)',
    description: 'O que monitoramos TODO DIA',
    items: [
      'Volume de leads e CPL atual',
      'Qualidade dos leads (perfil, região, capacidade)',
      'Taxa de resposta da equipe (2min, 2h)',
      'Taxa de agendamento (meta: 25-35%)',
      'Performance técnica (campanhas, pixel, LP)',
    ],
    tools: 'Dashboard customizado + Slack/WhatsApp + Planilha compartilhada',
  },
  {
    icon: RefreshCw,
    title: '3.3. Otimizações Semanais',
    description: 'Toda segunda-feira, fazemos',
    items: [
      'Análise de dados da semana anterior',
      'Decisões baseadas em dados (pausar/escalar)',
      'Testes A/B contínuos',
      'Ajuste de segmentação geográfica',
      'Refinamento de públicos',
    ],
    deliverable: 'Relatório semanal: PDF com métricas + gráficos + ações + plano',
  },
  {
    icon: MessageSquare,
    title: '3.4. Ajuste de Scripts Comerciais',
    description: 'Com os primeiros leads chegando, identificamos',
    items: [
      'Objeções reais que estão aparecendo',
      'Dúvidas frequentes (FAQ + respostas rápidas)',
      'Gargalos no atendimento',
      'Sistema de lembretes automatizados',
    ],
    meeting: 'Reunião semanal de 30min com equipe comercial',
  },
  {
    icon: Target,
    title: '3.5. Implementação de Remarketing (Semana 5-6)',
    description: '70% das pessoas não convertem na primeira visita',
    items: [
      'Google Display: Banners para visitantes não-conversores',
      'Meta Remarketing: Stories/feed para público customizado',
      'Sequências de e-mail (quando aplicável)',
      'Ofertas especiais (desconto ou bônus)',
    ],
    result: 'Resultado esperado: +20-30% de agendamentos recuperados',
  },
];

const typicalMetrics = [
  { metric: 'CPL', value: 'R$ 15-60', description: 'Dependendo do serviço' },
  { metric: 'Taxa de conversão', value: '20-30%', description: 'Leads → agendamentos' },
  { metric: 'Show rate', value: '60-70%', description: 'Ainda melhorando' },
];

export function Fase3Section() {
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
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-green-500/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Fase 3: Ativação e Otimização
                </h2>
                <p className="text-green-400 text-lg">Semanas 4-6</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Campanhas ao vivo. Dados chegando. Decisões sendo tomadas.
            </h3>
            <p className="text-white/90 text-lg max-w-4xl mx-auto">
              Agora é onde a mágica acontece. Campanhas rodando, leads chegando, dados sendo coletados e otimizações sendo feitas em tempo real.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {activationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Header */}
                <div className="lg:col-span-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-white/80 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Items */}
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-4">O que fazemos:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-white/90 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  {step.expectation && (
                    <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-white font-semibold mb-1">Expectativa realista:</h6>
                          <p className="text-white/90 text-sm">{step.expectation}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.tools && (
                    <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                      <div className="flex items-start space-x-3">
                        <BarChart3 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-white font-semibold mb-1">Ferramentas:</h6>
                          <p className="text-white/90 text-sm">{step.tools}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.deliverable && (
                    <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-white font-semibold mb-1">Entregável:</h6>
                          <p className="text-white/90 text-sm">{step.deliverable}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.meeting && (
                    <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                      <div className="flex items-start space-x-3">
                        <MessageSquare className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-white font-semibold mb-1">Reunião:</h6>
                          <p className="text-white/90 text-sm">{step.meeting}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.result && (
                    <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-white font-semibold mb-1">Resultado:</h6>
                          <p className="text-white/90 text-sm">{step.result}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Typical Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Métricas típicas nessa fase
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {typicalMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{metric.value}</div>
                  <div className="text-white font-semibold mb-1">{metric.metric}</div>
                  <div className="text-white/80 text-sm">{metric.description}</div>
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
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Tempo Total da Fase 3</h3>
                <p className="text-3xl font-bold text-green-200">3-4 semanas</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Seu Investimento</h3>
                <p className="text-3xl font-bold text-green-200">1-2 horas/semana</p>
                <p className="text-green-200 text-sm mt-1">Reuniões + feedbacks</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

