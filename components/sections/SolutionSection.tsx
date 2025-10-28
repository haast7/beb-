'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Globe, Users, Zap, Target, Shield, TrendingUp, ChevronDown } from 'lucide-react';

const solutions = [
  {
    icon: BarChart3,
    title: 'Tracking cirúrgico de eventos',
    description: 'Não basta "rodar anúncio". Instalamos pixel, conversões API, GTM, eventos personalizados. Sabemos exatamente qual campanha gerou qual agendamento e qual receita. Sem achismo.',
    features: ['Pixel + Conversões API', 'GTM configurado', 'Eventos personalizados', 'Relatórios em tempo real'],
  },
  {
    icon: Globe,
    title: 'Landing pages que vendem enquanto você dorme',
    description: 'Esqueça site institucional com 10 abas. LPs focadas em 1 serviço, 1 dor, 1 CTA. Mobile-first, carregamento em < 2s, otimizada para conversão. A página trabalha para você 24/7.',
    features: ['Mobile-first design', 'Carregamento < 2s', '1 serviço por página', 'CTAs otimizados'],
  },
  {
    icon: Zap,
    title: 'Automações que sua concorrência não usa',
    description: 'Resposta automática em 30s. Follow-up programado em 2h, 24h, 72h. Lembrete de consulta 24h antes. Remarketing para quem não agendou. Tudo automatizado, tudo rastreado.',
    features: ['Resposta em 30s', 'Follow-up automático', 'Lembretes de consulta', 'Remarketing inteligente'],
  },
  {
    icon: Target,
    title: 'Campanhas por intenção real',
    description: 'Check-up executivo. Exames pré-operatórios. Ultrassom obstétrico. Ressonância. Focamos em serviços de alta procura + margem boa. Nada de lead curioso que nunca fecha.',
    features: ['Serviços de alta margem', 'Segmentação precisa', 'Intenção de compra real', 'Qualificação automática'],
  },
  {
    icon: Users,
    title: 'Scripts de WhatsApp que convertem 30-40%',
    description: 'Atendimento não é "arte". É ciência. Saudação + qualificação + proposta + agendamento em 5 mensagens. Sua equipe para de improvisar.',
    features: ['Scripts testados', 'Qualificação automática', 'Fechamento estruturado', 'Treinamento da equipe'],
  },
  {
    icon: TrendingUp,
    title: 'Follow-up que recupera 20-30% dos leads perdidos',
    description: 'Pessoa perguntou preço e sumiu? Follow-up automático em 24h. 70% dos agendamentos acontecem após 2+ toques. Sua concorrência desiste no primeiro "vou pensar".',
    features: ['Follow-up automático', 'Múltiplos toques', 'Recuperação de leads', 'Persistência inteligente'],
  },
];

// Componente para card interativo
function InteractiveSolutionCard({ 
  solution, 
  index, 
  activeTooltip, 
  onMouseEnter, 
  onMouseLeave, 
  onClick 
}: {
  solution: typeof solutions[0];
  index: number;
  activeTooltip: number | null;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onClick: (index: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Card Principal - Compacto */}
      <div 
        className="bg-haast-gray-dark rounded-xl p-6 border border-haast-gray-medium hover:border-haast-primary transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-haast-primary/20"
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
        onClick={() => onClick(index)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-haast-primary/10 rounded-xl flex items-center justify-center group-hover:bg-haast-primary/20 transition-colors duration-300">
              <solution.icon className="h-7 w-7 text-haast-primary" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white group-hover:text-haast-primary transition-colors duration-300">
                {solution.title}
              </h4>
              <p className="text-haast-gray-light text-sm">
                Clique para saber mais
              </p>
            </div>
          </div>
          <ChevronDown 
            className={`h-5 w-5 text-haast-gray-light transition-transform duration-300 ${
              activeTooltip === index ? 'rotate-180' : 'group-hover:translate-y-1'
            }`} 
          />
        </div>
      </div>

      {/* Tooltip/Balão - Aparece no hover ou click */}
      <AnimatePresence>
        {activeTooltip === index && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", damping: 20 }}
            className="absolute top-full left-0 right-0 mt-4 z-20"
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 relative">
              {/* Seta do balão */}
              <div className="absolute -top-3 left-8 w-6 h-6 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
              
              {/* Conteúdo do tooltip */}
              <div className="relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-haast-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="h-6 w-6 text-haast-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-haast-primary rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function SolutionSection() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveTooltip(index);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  const handleClick = (index: number) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  return (
    <section id="solucao" className="section-padding bg-haast-black-graphite">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 mx-4 md:mx-0 shadow-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              A diferença entre{' '}
              <span className="gradient-text">gastar e investir</span> em marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Enquanto agências generalistas "postam no Instagram", nós configuramos infraestrutura de verdade.
            </p>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              
            </p>
          </div>
        </motion.div>

        <div className="space-y-16">
          {/* Bloco 1: Infraestrutura */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Infraestrutura que Agências Comuns Ignoram
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {solutions.slice(0, 3).map((solution, index) => (
                <InteractiveSolutionCard
                  key={`infra-${index}`}
                  solution={solution}
                  index={index}
                  activeTooltip={activeTooltip}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                />
              ))}
            </div>
          </motion.div>

          {/* Bloco 2: Tráfego Qualificado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Tráfego Qualificado (Nada de Volume Fake)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {solutions.slice(3, 5).map((solution, index) => (
                <InteractiveSolutionCard
                  key={`trafico-${index}`}
                  solution={solution}
                  index={index + 3}
                  activeTooltip={activeTooltip}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                />
              ))}
            </div>
          </motion.div>

          {/* Bloco 3: Vendas Estruturadas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Vendas Estruturadas (O Elo que Falta)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {solutions.slice(4, 6).map((solution, index) => (
                <InteractiveSolutionCard
                  key={`vendas-${index}`}
                  solution={solution}
                  index={index + 5}
                  activeTooltip={activeTooltip}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-gray-dark rounded-2xl p-8 border border-haast-gray-medium">
            <h3 className="text-2xl font-bold text-white mb-4">
              Enquanto sua concorrência improvisa, você terá{' '}
              <span className="gradient-text">processos que funcionam</span>
            </h3>
            <p className="text-haast-gray-light text-lg mb-6">
              A diferença entre clínica cheia e clínica vazia não é localização ou preço. 
              É <strong className="text-haast-primary">estratégia digital executada com precisão cirúrgica</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
