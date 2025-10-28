'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Shield, Clock, Target, Users, BarChart3 } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const guarantees = [
  {
    icon: CheckCircle,
    title: 'Processo comprovado',
    description: 'Metodologia testada em dezenas de clínicas e laboratórios',
    color: 'text-green-500',
  },
  {
    icon: Shield,
    title: 'Transparência total',
    description: 'Acesso completo a tudo, sem caixa preta',
    color: 'text-blue-500',
  },
  {
    icon: Clock,
    title: 'Suporte real',
    description: 'Resposta em até 2h úteis via WhatsApp',
    color: 'text-purple-500',
  },
  {
    icon: BarChart3,
    title: 'Otimização contínua',
    description: 'Não "configuramos e esquecemos", otimizamos toda semana',
    color: 'text-orange-500',
  },
  {
    icon: Target,
    title: 'Conformidade legal',
    description: 'Anúncios seguindo normas dos conselhos profissionais + LGPD',
    color: 'text-red-500',
  },
];

const noGuarantees = [
  {
    icon: XCircle,
    title: 'Número exato de leads',
    description: 'Depende de budget, concorrência, sazonalidade',
    color: 'text-gray-500',
  },
  {
    icon: XCircle,
    title: 'ROI específico',
    description: 'Depende do seu atendimento, qualidade do serviço, ticket médio',
    color: 'text-gray-500',
  },
  {
    icon: XCircle,
    title: 'Resultados em 7 dias',
    description: 'Marketing digital sério leva 30-90 dias para maturar',
    color: 'text-gray-500',
  },
];

const realGuarantee = {
  title: 'Nossa garantia real',
  description: 'Se após 60 dias seguindo todo o processo (fornecendo acessos, treinando equipe, investindo budget mínimo) você não ver aumento mensurável em agendamentos, fazemos revisão completa sem custo adicional ou você pode cancelar sem multa.',
  conditions: [
    'Fornecer acessos necessários',
    'Treinar equipe conforme orientado',
    'Investir budget mínimo recomendado',
    'Seguir processo por 60 dias completos',
  ],
};

export function GarantiasSection() {
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
              Nossa promessa é{' '}
              <span className="gradient-text">simples</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Trabalhamos com transparência total. Você sabe exatamente o que garantimos, 
              o que não garantimos, e qual é nossa garantia real.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* O que garantimos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                O que garantimos
              </h3>
              <p className="text-white/80">
                Compromissos que cumprimos 100%
              </p>
            </div>

            <div className="space-y-6">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <guarantee.icon className={`h-6 w-6 ${guarantee.color} flex-shrink-0 mt-1`} />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {guarantee.title}
                    </h4>
                    <p className="text-white/80 text-sm">
                      {guarantee.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* O que NÃO garantimos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <XCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                O que NÃO garantimos
              </h3>
              <p className="text-white/80">
                Realidade sobre o que não controlamos
              </p>
            </div>

            <div className="space-y-6">
              {noGuarantees.map((noGuarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <noGuarantee.icon className={`h-6 w-6 ${noGuarantee.color} flex-shrink-0 mt-1`} />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {noGuarantee.title}
                    </h4>
                    <p className="text-white/80 text-sm">
                      {noGuarantee.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Garantia Real */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-haast-primary/20 to-haast-primary/10 rounded-2xl p-8 border border-haast-primary/30"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {realGuarantee.title}
            </h3>
            <p className="text-white/90 text-lg max-w-4xl mx-auto">
              {realGuarantee.description}
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h4 className="text-white font-semibold mb-4 text-center">
              Condições para a garantia:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {realGuarantee.conditions.map((condition, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0" />
                  <span className="text-white/90 text-sm">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para trabalhar com transparência total?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Sem promessas vazias, sem caixa preta. Apenas processo estruturado, 
              transparência total e resultado previsível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                variant="outline-white"
                size="lg"
                source="garantias-diagnostico"
                message="Olá! Gostaria de agendar um diagnóstico gratuito de 30min sobre minha clínica/laboratório."
                className="bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Agende diagnóstico gratuito
              </WhatsAppButton>
              <WhatsAppButton
                variant="outline-white"
                size="lg"
                source="garantias-info"
                message="Olá! Gostaria de saber mais sobre o processo da Haast - 30min sem compromisso."
                className="bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                30min sem compromisso
              </WhatsAppButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

