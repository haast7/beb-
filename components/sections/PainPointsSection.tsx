'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Clock, Users, TrendingDown, MessageCircle, Eye, ChevronDown } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    title: 'Agenda imprevisível',
    description: 'Segunda cheia, sexta vazia. Você depende de indicação e não consegue prever o mês que vem. Resultado? Equipe ociosa, custos fixos altos, ansiedade financeira.',
  },
  {
    icon: TrendingDown,
    title: 'Leads que evaporam',
    description: 'Gastou R$ 3K em anúncios. Vieram 50 mensagens. Respondeu 20. Agendou 3. Compareceu 1. E você nem sabe onde perdeu os outros 49.',
  },
  {
    icon: Users,
    title: 'No-show matando a operação',
    description: '25-40% de falta nas consultas. Horários que poderiam estar faturando ficam vazios. Sua equipe trabalha de graça preparando a sala.',
  },
  {
    icon: AlertTriangle,
    title: 'Tráfego que não converte',
    description: '"Rodamos campanhas por 90 dias e gastamos R$12K". Ótimo. Quantos viraram pacientes pagantes? Silêncio constrangedor.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp desorganizado',
    description: 'Atendente responde quando pode. Paciente espera 4h. Vai no concorrente que respondeu em 4 minutos. Você perdeu R$ 800 por causa de desorganização.',
  },
  {
    icon: Eye,
    title: 'Você não sabe o que funciona',
    description: 'Qual exame dá mais lucro? Qual horário converte melhor? Qual anúncio traz paciente qualificado? Você está pilotando no escuro.',
  },
];

export function PainPointsSection() {
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
    <section id="dores" className="section-padding bg-haast-black-graphite">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Diagnóstico: sua estratégia digital está doente.{' '}
            <span className="gradient-text">Confira os sintomas:</span>
          </h2>
          <p className="text-haast-gray-light text-lg max-w-2xl mx-auto">
            Passe o mouse ou clique nos cards para descobrir mais detalhes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Principal - Compacto */}
              <div 
                className="bg-haast-gray-dark rounded-xl p-6 border border-haast-gray-medium hover:border-haast-primary transition-all duration-300 cursor-pointer group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-haast-primary/20"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-haast-red-alert/10 rounded-xl flex items-center justify-center group-hover:bg-haast-red-alert/20 transition-colors duration-300">
                      <point.icon className="h-7 w-7 text-haast-red-alert" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-haast-primary transition-colors duration-300">
                        {point.title}
                      </h3>
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
                          <div className="w-12 h-12 bg-haast-red-alert/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <point.icon className="h-6 w-6 text-haast-red-alert" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                              {point.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed text-base">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-haast-gray-dark rounded-2xl p-8 border border-haast-gray-medium max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Se você se identificou com pelo menos 2 desses problemas...
            </h3>
            <p className="text-haast-gray-light text-lg">
              <strong className="text-haast-primary">Você está perdendo dinheiro todos os dias</strong> por não ter uma infraestrutura digital que funciona de verdade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
