'use client';

import { motion } from 'framer-motion';
import { BarChart3, FileText, Monitor, Calendar, CheckCircle, Clock, Eye, Shield } from 'lucide-react';

const reportTypes = [
  {
    icon: FileText,
    title: 'Relatório Semanal',
    frequency: 'Toda segunda, 9h',
    content: 'PDF executivo (2-3 páginas)',
    includes: [
      'Principais métricas da semana',
      'Gráficos de evolução',
      'Ações tomadas',
      'Plano para próxima semana',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Relatório Mensal',
    frequency: 'Todo dia 5',
    content: 'PDF completo (15-20 páginas)',
    includes: [
      'Análise profunda de performance',
      'ROI calculado',
      'Comparativo com mês anterior',
      'Recomendações estratégicas',
      'Roadmap para próximo mês',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Monitor,
    title: 'Dashboard em Tempo Real',
    frequency: '24/7',
    content: 'Google Data Studio customizado',
    includes: [
      'Métricas atualizadas em tempo real',
      'Acesso via navegador (qualquer dispositivo)',
      'Leads de hoje/semana/mês',
      'CPL atual e taxa de conversão',
      'Agendamentos confirmados',
      'Investimento em mídia e ROI estimado',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Calendar,
    title: 'Reunião Estratégica Mensal',
    frequency: '60min',
    content: 'Presencial ou online',
    includes: [
      'Review completo do mês',
      'Definição de metas para próximo mês',
      'Ajustes de estratégia',
      'Planejamento de novas campanhas',
    ],
    color: 'from-orange-500 to-orange-600',
  },
];

const accessFeatures = [
  'Google Ads (administrador)',
  'Meta Business Manager (administrador)',
  'Google Analytics (administrador)',
  'Google Tag Manager (administrador)',
  'Você vê cada centavo gasto, cada clique, cada conversão',
];

const kpis = [
  { metric: 'Leads de hoje/semana/mês', description: 'Volume de leads em tempo real' },
  { metric: 'CPL atual', description: 'Custo por lead atualizado' },
  { metric: 'Taxa de conversão', description: 'Leads que viraram agendamentos' },
  { metric: 'Agendamentos confirmados', description: 'Agendamentos reais confirmados' },
  { metric: 'Investimento em mídia', description: 'Quanto foi gasto em anúncios' },
  { metric: 'ROI estimado', description: 'Retorno sobre investimento' },
];

export function MetricasSection() {
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
              Transparência radical:{' '}
              <span className="gradient-text">você vê tudo, sempre</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Não trabalhamos com caixa preta. Você tem acesso total a todas as contas, métricas e decisões. 
              Transparência é nossa base de confiança.
            </p>
          </div>
        </motion.div>

        {/* Report Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reportTypes.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-haast-primary/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${report.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <report.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{report.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-white/80">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {report.frequency}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-white/90 text-sm font-medium">{report.content}</p>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Inclui:</h4>
                  <ul className="space-y-2">
                    {report.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-haast-primary flex-shrink-0" />
                        <span className="text-white/90 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Dashboard em Tempo Real - Principais KPIs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kpis.map((kpi, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">{kpi.metric}</h4>
                  <p className="text-white/80 text-sm">{kpi.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Access Total */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-haast-primary/20 to-haast-primary/10 rounded-2xl p-8 border border-haast-primary/30"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-haast-primary mr-3" />
              <h3 className="text-2xl font-bold text-white">Acesso Total às Contas</h3>
            </div>
            <p className="text-white/90 text-lg">
              Você tem acesso de administrador a todas as plataformas. Zero caixa preta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0" />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

