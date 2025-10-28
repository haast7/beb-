'use client';

import { motion } from 'framer-motion';
import { Eye, Zap, Target, Battery, Crown, CheckCircle, ArrowRight } from 'lucide-react';

const principles = [
  {
    icon: Eye,
    title: 'VISÃO AGUÇADA',
    subtitle: 'A águia Haast detectava presas a 3km de distância.',
    description: 'Auditoria completa antes de gastar 1 real em anúncio',
    practices: [
      'Identificação cirúrgica de oportunidades (quais serviços anunciar, quais públicos atacar)',
      'Análise de concorrência e posicionamento estratégico',
      'Decisões baseadas em dados, não achismos',
    ],
    promise: 'Você nunca vai nos ver "rodando campanha pra ver no que dá". Planejamos. Estruturamos. Executamos.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Zap,
    title: 'VELOCIDADE DE ATAQUE',
    subtitle: 'A águia Haast atingia 80 km/h em mergulho de caça.',
    description: 'Implementação rápida e resposta ágil',
    practices: [
      'Implementação rápida (onboarding em 7 dias, campanhas no ar em 14)',
      'Resposta em até 2h úteis via WhatsApp',
      'Otimizações semanais (não esperamos mês virar)',
      'Automações que respondem leads em 30 segundos',
    ],
    promise: 'No mundo digital, velocidade = conversão. Lead que espera 4h é lead que foi no concorrente.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
  {
    icon: Target,
    title: 'PRECISÃO CIRÚRGICA',
    subtitle: 'A águia Haast não errava o alvo. Nunca.',
    description: 'Tracking avançado e segmentação laser',
    practices: [
      'Tracking avançado (GTM, GA4, Conversions API, eventos customizados)',
      'Segmentação laser (idade, localização, renda, comportamento)',
      'Testes A/B contínuos (criativos, copies, públicos)',
      'Budget direcionado apenas para o que converte',
    ],
    promise: 'Não atiramos para todos os lados esperando acertar. Cada centavo investido tem propósito medido.',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    icon: Battery,
    title: 'EFICIÊNCIA ENERGÉTICA',
    subtitle: 'A águia Haast não desperdiçava energia. Cada movimento tinha ROI.',
    description: 'Foco em conversão, não em vaidade',
    practices: [
      'Zero "campanha de awareness" genérica',
      'Foco em serviços de alta procura + alta margem',
      'Landing pages com 1 objetivo: conversão (nada de 10 CTAs)',
      'Remarketing inteligente (não stalkeamos, convertemos)',
    ],
    promise: 'Seu dinheiro é limitado. Nosso dever é maximizar retorno. Se não gera agendamento ou receita, não fazemos.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: Crown,
    title: 'DOMÍNIO TERRITORIAL',
    subtitle: 'A águia Haast controlava seu território. Nenhum rival ousava invadir.',
    description: 'Estratégia de longo prazo e autoridade sustentável',
    practices: [
      'Estratégia de longo prazo (não campanha de 30 dias e "tchau")',
      'Construção de autoridade digital sustentável',
      'Sistema que funciona sem depender de nós (treinamos sua equipe)',
      'Previsibilidade de agendamentos (você controla seu mercado, não o contrário)',
    ],
    promise: 'O objetivo não é "ter clientes". É dominar sua região. Quando pesquisam seu serviço, encontram você primeiro.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
];

export function PrincipiosSection() {
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
              Os 5 atributos da águia que{' '}
              <span className="gradient-text">aplicamos em cada projeto</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Cada princípio da águia Haast se traduz em uma prática específica do nosso trabalho. 
              Não é metáfora bonita. É metodologia real.
            </p>
          </div>
        </motion.div>

        {/* Princípios */}
        <div className="space-y-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12 items-center`}
            >
              {/* Visual */}
              <div className="lg:w-1/2">
                <div className={`${principle.bgColor} rounded-2xl p-8 border-2 ${principle.borderColor} hover:border-haast-primary transition-all duration-300`}>
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <principle.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-haast-black-graphite mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 text-lg font-medium">
                      {principle.subtitle}
                    </p>
                  </div>

                  <div className="bg-white/50 rounded-xl p-6">
                    <h4 className="text-haast-black-graphite font-semibold mb-3">
                      Na prática:
                    </h4>
                    <p className="text-gray-700 text-sm mb-4">
                      {principle.description}
                    </p>
                    <ul className="space-y-2">
                      {principle.practices.map((practice, practiceIndex) => (
                        <li key={practiceIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-haast-primary flex-shrink-0 mt-0.5" />
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-haast-black-graphite mb-3">
                      Nossa promessa
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {principle.promise}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-haast-primary/10 to-haast-primary/5 rounded-xl p-6 border border-haast-primary/20">
                    <div className="flex items-start space-x-3">
                      <ArrowRight className="h-5 w-5 text-haast-primary flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="text-haast-black-graphite font-semibold mb-2">
                          Por que isso importa?
                        </h5>
                        <p className="text-gray-700 text-sm">
                          Este princípio é fundamental para o sucesso do seu marketing digital. 
                          Sem ele, você está desperdiçando recursos e oportunidades.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Estes não são apenas princípios bonitos
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              São a base de uma metodologia que já transformou <strong className="text-white">+45 clínicas e laboratórios</strong> 
              em máquinas de agendamento previsível.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Crown className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold text-yellow-400">
                A águia não improvisa. Ela executa.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
