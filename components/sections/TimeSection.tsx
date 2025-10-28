'use client';

import { motion } from 'framer-motion';
import { User, Code, Target, BarChart3, Palette, Database, MessageSquare, Clock, Shield, CheckCircle } from 'lucide-react';

const teamMembers = [
  {
    icon: Code,
    name: 'Co-fundador & Estrategista de Performance',
    background: 'Background em engenharia de software + growth marketing',
    expertise: 'Obcecado por tracking, automação e otimização baseada em dados',
    experience: 'Construiu infraestrutura digital para +30 clínicas nos últimos 4 anos',
    quote: 'Se não consigo medir, não vale a pena fazer.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    name: 'Co-fundador & Especialista Comercial',
    background: '10 anos vendendo para área da saúde (equipamentos médicos, tecnologia hospitalar)',
    expertise: 'Entende as dores de donos de clínica porque viveu o mercado por dentro',
    experience: 'Treinou +200 equipes comerciais em vendas consultivas',
    quote: 'Marketing traz lead. Vendas traz receita. Os dois precisam conversar.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: BarChart3,
    name: 'Head de Mídia Paga',
    background: 'Certificado Google Ads e Meta Blueprint',
    expertise: 'Gerenciou +R$ 2M em investimento publicitário nos últimos 3 anos',
    experience: 'Especialista em otimização de CPL e taxa de conversão',
    quote: 'Budget mal investido é budget roubado. Cada real tem que ter propósito.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Palette,
    name: 'Designer de Conversão',
    background: 'Não faz "arte bonita". Faz criativo que vende',
    expertise: 'Especialista em neuromarketing aplicado e psicologia de cores',
    experience: '+500 campanhas criadas para área da saúde',
    quote: 'Beleza sem conversão é desperdício. Prioridade é fazer o botão ser clicado.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Database,
    name: 'Analista de Performance & BI',
    background: 'Constrói dashboards, analisa funis, identifica gargalos',
    expertise: 'Especialista em Google Analytics, Looker Studio, SQL',
    experience: 'Transforma dados caóticos em decisões claras',
    quote: 'Se você não sabe onde está vazando dinheiro, eu encontro.',
    color: 'from-red-500 to-red-600',
  },
];

const supportTeam = [
  {
    icon: MessageSquare,
    title: 'Atendimento via WhatsApp/Slack',
    description: 'Resposta em até 2h úteis',
  },
  {
    icon: Shield,
    title: 'Suporte técnico',
    description: 'Resolução de bugs e problemas em até 24h',
  },
  {
    icon: Target,
    title: 'Consultoria comercial',
    description: 'Apoio contínuo para equipes de atendimento',
  },
];

export function TimeSection() {
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
              As pessoas por trás do{' '}
              <span className="gradient-text">processo</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Não somos 50 pessoas. Somos um time enxuto e técnico.  
              Cada pessoa resolve problemas que agências grandes terceirizam.
            </p>
          </div>
        </motion.div>

        {/* Membros do Time */}
        <div className="space-y-12 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-haast-primary/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Avatar e Info Básica */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center`}>
                      <member.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {member.background}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detalhes */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Especialização:</h4>
                    <p className="text-white/90 text-sm">{member.expertise}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Experiência:</h4>
                    <p className="text-white/90 text-sm">{member.experience}</p>
                  </div>

                  <div className="bg-gradient-to-r from-haast-primary/20 to-haast-primary/10 rounded-xl p-4 border border-haast-primary/30">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl text-haast-primary">"</div>
                      <div>
                        <p className="text-white/90 text-sm italic">
                          {member.quote}
                        </p>
                      </div>
                      <div className="text-2xl text-haast-primary">"</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Time de Suporte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Time de Suporte
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportTeam.map((support, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                    <support.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{support.title}</h4>
                  <p className="text-white/80 text-sm">{support.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Diferencial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-haast-primary/20 to-haast-primary/10 rounded-2xl p-8 border border-haast-primary/30"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Por que um time enxuto é melhor?
            </h3>
            <p className="text-white/90 text-lg max-w-3xl mx-auto mb-6">
              <strong className="text-white">Importante:</strong> Não somos agência de 100 pessoas com 80 estagiários.  
              Somos 8-12 profissionais seniores que realmente entendem do que fazem.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0" />
                <span className="text-white/90">Cada pessoa é especialista em sua área</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0" />
                <span className="text-white/90">Comunicação direta e ágil</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0" />
                <span className="text-white/90">Sem burocracias desnecessárias</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-haast-primary flex-shrink-0" />
                <span className="text-white/90">Foco total no resultado do cliente</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
