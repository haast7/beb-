'use client';

import { motion } from 'framer-motion';
import { XCircle, Instagram, MessageSquare, Zap, Palette, Target } from 'lucide-react';

const whatWeDontDo = [
  {
    icon: Instagram,
    title: 'Não fazemos "gestão de redes sociais" tradicional',
    description: 'Não postamos 5x/semana no Instagram sobre "Dia do Médico" e "Cuide da Sua Saúde".',
    reason: 'Criamos conteúdo estratégico: 12 peças/mês focadas em conversão. Se você quer feed lotado de frase motivacional, não somos a escolha certa.',
  },
  {
    icon: MessageSquare,
    title: 'Não atendemos WhatsApp pelo cliente',
    description: 'Treinamos SUA equipe. Fornecemos scripts. Configuramos automações.',
    reason: 'Mas o atendimento humanizado é SEU diferencial, não terceirizamos isso. Se você quer alguém pra responder WhatsApp por você, existem empresas especializadas nisso (e indicamos).',
  },
  {
    icon: Zap,
    title: 'Não criamos "viral" ou "conteúdo de awareness"',
    description: 'Não estamos aqui pra fazer sua clínica "bombar no Instagram" com dancinha ou meme.',
    reason: 'Estamos aqui pra encher sua agenda e aumentar faturamento. Se viralizar no processo, ótimo. Mas não é a meta.',
  },
  {
    icon: Palette,
    title: 'Não fazemos design "porque é bonito"',
    description: 'Nosso designer cria pra converter, não pra ganhar prêmio.',
    reason: 'Se você quer arte conceitual linda com tipografia experimental, contrate estúdio de branding. Se você quer criativo que faz botão ser clicado, está no lugar certo.',
  },
  {
    icon: Target,
    title: 'Não gerenciamos expectativa irreal',
    description: 'Não prometemos "100 leads em 7 dias" ou "ROI de 20x garantido".',
    reason: 'Prometemos processo honesto, transparência total, e resultado previsível em 60-90 dias. Se você quer ouvir promessas mágicas, vai se decepcionar com nossa honestidade.',
  },
];

export function OQueNaoFazemosSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-red-500/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              O que NÃO fazemos{' '}
              <span className="gradient-text">(E Por Quê)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Muita agência vende o que não entrega.  
              Preferimos deixar claro o que NÃO fazemos para você não ter surpresa.
            </p>
          </div>
        </motion.div>

        {/* O que não fazemos */}
        <div className="space-y-8">
          {whatWeDontDo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-haast-black-graphite mb-3">
                    ❌ {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {item.description}
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <p className="text-gray-600 text-sm">
                      <strong className="text-haast-black-graphite">Por quê:</strong> {item.reason}
                    </p>
                  </div>
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
              Transparência desde o primeiro contato
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              É melhor ser claro sobre o que não fazemos do que prometer o mundo e entregar migalhas. 
              <strong className="text-yellow-400"> Honestidade é nossa base.</strong>
            </p>
            <div className="flex items-center justify-center space-x-2">
              <XCircle className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold text-yellow-400">
                Sem surpresas. Sem decepções. Apenas resultados reais.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
