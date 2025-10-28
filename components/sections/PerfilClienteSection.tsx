'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Building, Target, Users, DollarSign, Clock, Shield } from 'lucide-react';

const workWithUs = [
  {
    icon: Building,
    title: 'Você tem estrutura mínima',
    items: [
      'Clínica/lab funcionando há pelo menos 6 meses',
      'Equipe que atende telefone/WhatsApp em horário comercial',
      'Capacidade de investir R$ 3K-5K/mês (gestão + mídia)',
    ],
  },
  {
    icon: Target,
    title: 'Você quer resultado, não milagre',
    items: [
      'Entende que leva 60-90 dias para maturar',
      'Aceita seguir processo estruturado',
      'Está disposto a treinar equipe comercial',
      'Quer transparência e dados reais',
    ],
  },
  {
    icon: Shield,
    title: 'Você valoriza execução técnica',
    items: [
      'Prefere "funciona" do que "é bonito"',
      'Quer entender onde cada real está sendo gasto',
      'Está aberto a testar, otimizar, ajustar',
      'Busca parceiro de longo prazo, não fornecedor pontual',
    ],
  },
];

const dontWorkWithUs = [
  {
    icon: Clock,
    title: 'Você quer resultado instantâneo',
    items: [
      'Espera 50 leads em 7 dias',
      'Acha que marketing é "botão mágico"',
      'Não tem paciência para processo de 90 dias',
    ],
  },
  {
    icon: Building,
    title: 'Você não tem estrutura',
    items: [
      'Não tem ninguém para atender WhatsApp',
      'Não pode investir mínimo necessário',
      'Quer "testar com R$ 500" (não funciona)',
    ],
  },
  {
    icon: Users,
    title: 'Você quer ser enganado',
    items: [
      'Prefere ouvir "vamos viralizar" do que "vamos converter"',
      'Quer relatórios bonitos cheios de métricas de vaidade',
      'Não aceita transparência (quer caixa preta)',
    ],
  },
  {
    icon: Target,
    title: 'Você não segue processo',
    items: [
      'Não fornece acessos necessários',
      'Ignora recomendações técnicas',
      'Não treina equipe depois que entregamos playbook',
      'Quer "fazer do seu jeito" (tudo bem, mas não com a gente)',
    ],
  },
];

export function PerfilClienteSection() {
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
              Para quem trabalhamos{' '}
              <span className="gradient-text">(E Para Quem Não Trabalhamos)</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Transparência total sobre quem é nosso cliente ideal. 
              É melhor ser claro desde o início do que frustrar expectativas depois.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Trabalhamos com você SE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Trabalhamos com você SE
              </h3>
              <p className="text-white/80">
                Perfil de cliente ideal
              </p>
            </div>

            <div className="space-y-6">
              {workWithUs.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">
                        {category.title}
                      </h4>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-white/90 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NÃO trabalhamos com você SE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <XCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                NÃO trabalhamos com você SE
              </h3>
              <p className="text-white/80">
                Realidade sobre o que não funciona
              </p>
            </div>

            <div className="space-y-6">
              {dontWorkWithUs.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">
                        {category.title}
                      </h4>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-1" />
                        <span className="text-white/90 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-haast-primary/20 to-haast-primary/10 rounded-2xl p-8 border border-haast-primary/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Se você se identifica com o perfil ideal
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
              Então nós fomos feitos um para o outro. Vamos transformar sua clínica em uma máquina de agendamento previsível.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Target className="h-6 w-6 text-haast-primary" />
              <span className="text-lg font-semibold text-haast-primary">
                Parceria de longo prazo, resultado de curto prazo
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
