'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, Clock, Star, BarChart3, CheckCircle } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    title: '+45 clínicas e laboratórios atendidos',
    description: 'Desde pequenos labs de bairro até redes com 3-4 unidades',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: DollarSign,
    title: 'R$ 3.2M+ em investimento gerenciado',
    description: 'Cada centavo rastreado, otimizado e justificado',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Target,
    title: '+12.000 agendamentos gerados',
    description: 'Leads que viraram horário confirmado na agenda dos clientes',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'ROI médio de 4.8x em 90 dias',
    description: 'Para cada R$ 1,00 investido, retornam R$ 4,80 em receita média',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: CheckCircle,
    title: '82% de retenção de clientes após 6 meses',
    description: 'Quem fica, fica porque vê resultado',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: BarChart3,
    title: 'CPL médio: R$ 18-42',
    description: 'Dependendo do serviço (check-up = mais caro, exames simples = mais barato)',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Target,
    title: 'Taxa de conversão média: 32%',
    description: 'Leads que viram agendamento confirmado (mercado médio é 15-20%)',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Clock,
    title: 'Show rate médio: 79%',
    description: 'Com nosso sistema de lembretes (mercado médio é 60-65%)',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Clock,
    title: 'Tempo médio de resposta: 47 minutos',
    description: 'Das equipes que treinamos (antes do treinamento: 4-6 horas)',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Star,
    title: 'NPS (Net Promoter Score): 78',
    description: 'Pergunta: "Você recomendaria a Haast para outro dono de clínica?"',
    color: 'from-yellow-500 to-yellow-600',
  },
];

const highlights = [
  {
    number: '4.8x',
    label: 'ROI médio',
    description: 'Retorno sobre investimento em 90 dias',
    color: 'from-green-500 to-green-600',
  },
  {
    number: '32%',
    label: 'Taxa de conversão',
    description: 'Leads que viram agendamento',
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '79%',
    label: 'Show rate',
    description: 'Pacientes que comparecem',
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: '78',
    label: 'NPS Score',
    description: 'Satisfação dos clientes',
    color: 'from-orange-500 to-orange-600',
  },
];

export function NumerosSection() {
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
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-gray-dark/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 shadow-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              Nossos números{' '}
              <span className="gradient-text">(Sem Filtro)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Dados reais de 4 anos de operação. Sem maquiagem, sem exageros. 
              Apenas resultados que falam por si.
            </p>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl font-bold text-white">{highlight.number}</span>
              </div>
              <h3 className="text-lg font-bold text-haast-black-graphite mb-2">
                {highlight.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Todas as Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-haast-primary/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-haast-black-graphite font-bold text-lg mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {metric.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Números não mentem
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Estes são os resultados reais que entregamos para nossos clientes. 
              <strong className="text-yellow-400"> Sem promessas vazias. Sem exageros.</strong>
            </p>
            <div className="flex items-center justify-center space-x-2">
              <BarChart3 className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold text-yellow-400">
                Dados reais. Resultados comprovados.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
