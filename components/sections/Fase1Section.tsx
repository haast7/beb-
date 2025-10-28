'use client';

import { motion } from 'framer-motion';
import { Search, FileText, Users, MapPin, Calendar, CheckCircle, Clock, Target } from 'lucide-react';

const diagnosticSteps = [
  {
    icon: Search,
    title: '1.1. Auditoria Digital Completa',
    description: 'Analisamos sua presença digital atual',
    items: [
      'Site/Landing Pages existentes',
      'Perfis nas redes sociais',
      'Presença no Google',
      'Campanhas anteriores (se houver)',
    ],
    deliverables: 'Relatório de auditoria (15-20 páginas) com diagnóstico honesto',
  },
  {
    icon: Target,
    title: '1.2. Mapeamento de Serviços Estratégicos',
    description: 'Nem todo serviço da sua clínica deve virar campanha',
    items: [
      'Serviços de alta procura',
      'Serviços de alta margem',
      'Serviços sazonais',
      'Serviços de entrada (porta de entrada)',
    ],
    deliverables: 'Matriz de priorização de serviços',
  },
  {
    icon: MapPin,
    title: '1.3. Análise de Concorrência Local',
    description: 'Sabemos quem você enfrenta',
    items: [
      'Clínicas/labs na mesma região',
      'Quanto eles investem em anúncios',
      'Que tipo de campanha rodam',
      'Pontos fortes e fracos deles',
    ],
    deliverables: 'Relatório competitivo com screenshots e análise',
  },
  {
    icon: Users,
    title: '1.4. Definição de Personas e ICP',
    description: 'Quem é seu paciente ideal?',
    items: [
      'Faixa etária e gênero',
      'Renda estimada',
      'Localização geográfica (bairros)',
      'Dores e objeções principais',
    ],
    deliverables: 'Documento de persona com avatar detalhado',
  },
  {
    icon: Calendar,
    title: '1.5. Reunião Estratégica de Alinhamento',
    description: 'Duração: 90 minutos (presencial ou online)',
    items: [
      'Apresentação da auditoria',
      'Validação de serviços prioritários',
      'Definição de meta mensal de agendamentos',
      'Alinhamento de orçamento',
    ],
    deliverables: 'Ata de reunião + Plano Estratégico Digital (10 páginas)',
  },
];

const timeInvestment = {
  total: '5-7 dias úteis',
  client: '2-3 horas (reuniões + fornecimento de acessos)',
};

export function Fase1Section() {
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
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-blue-500/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Fase 1: Diagnóstico e Estratégia
                </h2>
                <p className="text-blue-200 text-lg">Semana 1</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Antes de gastar 1 real em anúncio, precisamos saber onde estamos
            </h3>
            <p className="text-white/90 text-lg max-w-4xl mx-auto">
              A maioria das agências pula essa fase. Nós não. Porque sem diagnóstico honesto, você está pilotando no escuro.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {diagnosticSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Header */}
                <div className="lg:col-span-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-white/80 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Items */}
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-4">O que fazemos:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                          <span className="text-white/90 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                    <div className="flex items-start space-x-3">
                      <FileText className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h6 className="text-white font-semibold mb-1">Entregável:</h6>
                        <p className="text-white/90 text-sm">{step.deliverables}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Time Investment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl p-8 border border-blue-500/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Tempo Total da Fase 1</h3>
                </div>
                <p className="text-3xl font-bold text-blue-400">{timeInvestment.total}</p>
                <p className="text-white/80 text-sm mt-2">Dias úteis</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Seu Investimento</h3>
                </div>
                <p className="text-3xl font-bold text-blue-400">{timeInvestment.client}</p>
                <p className="text-white/80 text-sm mt-2">Reuniões + fornecimento de acessos</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

