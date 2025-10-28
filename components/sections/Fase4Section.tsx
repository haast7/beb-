'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Target, DollarSign, Smartphone, BarChart3, CheckCircle, Clock, Zap } from 'lucide-react';

const scalingSteps = [
  {
    icon: Target,
    title: '4.1. Identificação de Campanhas Vencedoras (Semana 7-8)',
    description: 'Com 4-6 semanas de dados, identificamos',
    items: [
      'Campanhas com ROI positivo',
      'Criativos/copies campeões',
      'Públicos mais qualificados',
      'Horários e dispositivos ideais',
    ],
    decision: 'Decisão estratégica: Matar o que não funciona. Escalar o que funciona.',
  },
  {
    icon: DollarSign,
    title: '4.2. Aumento Gradual de Budget (Semanas 8-10)',
    description: 'Não aumentamos tudo de uma vez. É ciência, não aposta.',
    items: [
      'Escala gradual: +50% → +33% → +25%',
      'Monitoramento de saturação de público',
      'Expansão de raio geográfico quando necessário',
      'Teste de novos serviços',
    ],
    rule: 'Se CPL se mantém ou diminui → podemos aumentar mais. Se CPL aumenta muito → pausamos e otimizamos.',
  },
  {
    icon: Smartphone,
    title: '4.3. Expansão de Canais (Semana 9-10)',
    description: 'Além de Google e Meta, testamos',
    items: [
      'Google Performance Max (IA do Google)',
      'YouTube Ads (vídeos 15-30s)',
      'LinkedIn Ads (para clínicas corporativas)',
      'Waze Ads (tráfego local via GPS)',
    ],
    criteria: 'Budget de teste (10-20% do total) por 2-4 semanas.',
  },
  {
    icon: BarChart3,
    title: '4.4. Implementação de Conversões Offline',
    description: 'Nem tudo que importa acontece online',
    items: [
      'CRM integrado com Google/Meta',
      'Upload de conversões offline',
      'Fechamento do ciclo (lead → agendamento → comparecimento)',
      'ROI verdadeiro calculado por receita real',
    ],
    example: 'Campanha A: 50 leads, CPL R$ 30, 15 agendamentos, R$ 45K faturado → ROI 10x',
  },
  {
    icon: TrendingUp,
    title: '4.5. Otimização de Show Rate (Semanas 10-12)',
    description: 'No-show é o assassino silencioso da rentabilidade',
    items: [
      'Lembrete 48h antes (WhatsApp automatizado)',
      'Lembrete 24h antes (SMS + WhatsApp)',
      'Lembrete 2h antes (WhatsApp + ligação)',
      'Sistema de fila de espera para cancelamentos',
    ],
    result: 'Show rate de 70% → 80-85%',
  },
];

const finalResults = [
  { title: 'Custo de aquisição previsível', description: 'Sabemos quanto custa trazer 1 paciente' },
  { title: 'Agenda lotada com antecedência', description: '3-4 semanas de antecedência' },
  { title: 'Equipe treinada e autônoma', description: 'Processo escalável' },
  { title: 'Dados para decisões estratégicas', description: 'Qual serviço anunciar mais?' },
];

const finalMetrics = [
  { metric: 'CPL', value: 'R$ 15-45', description: 'Otimizado' },
  { metric: 'Taxa de conversão', value: '30-40%', description: 'Melhorada' },
  { metric: 'Show rate', value: '75-85%', description: 'Sistema de lembretes' },
  { metric: 'ROI', value: '3-8x', description: 'Receita vs investimento total' },
];

export function Fase4Section() {
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
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-orange-500/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite">
                  Fase 4: Escala e Previsibilidade
                </h2>
                <p className="text-orange-600 text-lg">Semanas 7-12</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-haast-black-graphite mb-4">
              Agora que funciona, vamos multiplicar
            </h3>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              Com dados sólidos e campanhas otimizadas, é hora de escalar com confiança e construir previsibilidade real.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {scalingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-orange-300 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Header */}
                <div className="lg:col-span-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
                          <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  {step.decision && (
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <div className="flex items-start space-x-3">
                        <Target className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-haast-black-graphite font-semibold mb-1">Decisão estratégica:</h6>
                          <p className="text-gray-700 text-sm">{step.decision}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.rule && (
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <div className="flex items-start space-x-3">
                        <Zap className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-haast-black-graphite font-semibold mb-1">Regra de escala:</h6>
                          <p className="text-gray-700 text-sm">{step.rule}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.criteria && (
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-haast-black-graphite font-semibold mb-1">Critério de teste:</h6>
                          <p className="text-gray-700 text-sm">{step.criteria}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.example && (
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <div className="flex items-start space-x-3">
                        <BarChart3 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-haast-black-graphite font-semibold mb-1">Exemplo:</h6>
                          <p className="text-gray-700 text-sm">{step.example}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.result && (
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h6 className="text-haast-black-graphite font-semibold mb-1">Resultado:</h6>
                          <p className="text-gray-700 text-sm">{step.result}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Previsibilidade Construída */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-haast-black-graphite mb-6 text-center">
              Após 90 dias, você tem:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {finalResults.map((result, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-haast-black-graphite mb-1">{result.title}</h4>
                    <p className="text-gray-700 text-sm">{result.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Métricas típicas ao final de 90 dias
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {finalMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-orange-200 mb-2">{metric.value}</div>
                  <div className="text-white font-semibold mb-1">{metric.metric}</div>
                  <div className="text-orange-200 text-sm">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Time Investment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-8 border border-orange-500/30 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-haast-black-graphite mb-2">Tempo Total da Fase 4</h3>
                <p className="text-3xl font-bold text-orange-600">5-6 semanas</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-haast-black-graphite mb-2">Seu Investimento</h3>
                <p className="text-3xl font-bold text-orange-600">1 hora/semana</p>
                <p className="text-gray-600 text-sm mt-1">Reuniões estratégicas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

