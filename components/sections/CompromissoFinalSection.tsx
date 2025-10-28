'use client';

import { motion } from 'framer-motion';
import { Crown, CheckCircle, Target, Shield, BarChart3, Zap } from 'lucide-react';

const promises = [
  {
    icon: Shield,
    title: 'Transparência radical',
    description: 'Você vê tudo, sempre',
  },
  {
    icon: Zap,
    title: 'Execução técnica superior',
    description: 'Infraestrutura que agência comum não domina',
  },
  {
    icon: BarChart3,
    title: 'Processo comprovado',
    description: 'Metodologia testada em +45 clientes',
  },
  {
    icon: Target,
    title: 'Suporte real',
    description: '2h de resposta, não 2 dias',
  },
  {
    icon: CheckCircle,
    title: 'Resultado mensurável',
    description: 'ROI, não vaidade',
  },
];

const requirements = [
  'Está cansado de "marketing que não traz paciente"',
  'Quer parar de depender só de indicação',
  'Precisa de previsibilidade na agenda',
  'Valoriza transparência e dados reais',
  'Está disposto a seguir processo estruturado',
];

export function CompromissoFinalSection() {
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
              A promessa da{' '}
              <span className="gradient-text">águia</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              A águia Haast não caçava por diversão.  
              Caçava para sobreviver. Cada ataque tinha que dar certo.
            </p>
          </div>
        </motion.div>

        {/* Nossa Mentalidade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Nós operamos com a mesma mentalidade
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Não estamos aqui pra "rodar campanha" e ver no que dá.  
                Estamos aqui pra construir infraestrutura que gera agendamento previsível, mês após mês.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Nossa Promessa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Nossa promessa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promises.map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                    <promise.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">
                    ✅ {promise.title}
                  </h4>
                  <p className="text-white/80 text-sm">
                    {promise.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Se você */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-haast-primary/20 to-haast-primary/10 rounded-2xl p-8 border border-haast-primary/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Se você:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0" />
                  <span className="text-white/90">{requirement}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-2xl font-bold text-white">
                Então nós fomos feitos um para o outro.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              A águia voa sozinha
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Mas quando escolhe parceiro, é pra vida toda.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Crown className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold text-yellow-400">
                Parceria de longo prazo. Resultado de curto prazo.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
