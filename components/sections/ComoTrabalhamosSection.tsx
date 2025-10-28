'use client';

import { motion } from 'framer-motion';
import { Settings, Target, Users, CheckCircle, ArrowRight, Zap, BarChart3, MessageSquare } from 'lucide-react';

const pillars = [
  {
    icon: Settings,
    title: 'PILAR 1: INFRAESTRUTURA TÉCNICA',
    subtitle: 'O que outras agências chamam de "firula", nós chamamos de fundação.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: [
      {
        icon: BarChart3,
        title: 'Tracking que realmente funciona',
        description: 'Google Tag Manager configurado. Conversions API implementada. Eventos customizados rastreando cada interação. Você vê o caminho completo: anúncio → clique → formulário → WhatsApp → agendamento → receita.',
      },
      {
        icon: Zap,
        title: 'Landing pages que convertem 3-5x mais que site institucional',
        description: 'Mobile-first. Carregamento < 2s. Uma oferta. Um CTA. Zero distração. Testamos headline, imagem, copy, formulário. O que converte fica. O resto morre.',
      },
      {
        icon: Settings,
        title: 'Automações que trabalham 24/7',
        description: 'Resposta automática em 30s. Follow-up programado. Lembrete de consulta. Remarketing para quem não agendou. Sua equipe atende. A tecnologia escala.',
      },
    ],
  },
  {
    icon: Target,
    title: 'PILAR 2: TRÁFEGO QUALIFICADO',
    subtitle: 'Volume sem qualidade é vanidade. Queremos agendamento, não curtida.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    features: [
      {
        icon: Target,
        title: 'Campanhas orientadas a serviços estratégicos',
        description: 'Serviços de alta procura (check-up, exames sazonais), alta margem (que justificam CAC), porta de entrada (geram recorrência).',
      },
      {
        icon: BarChart3,
        title: 'Segmentação geográfica e demográfica precisa',
        description: 'Raio de 5-15km da clínica. Bairros com renda compatível. Idade e gênero alinhados ao serviço. Seu anúncio aparece para quem pode e vai fechar.',
      },
      {
        icon: Zap,
        title: 'Google + Meta sincronizados',
        description: 'Pessoa pesquisa no Google. Vê no Instagram. Clica no Facebook. Agenda no WhatsApp. Omnichannel não é buzzword. É estratégia de cerco.',
      },
    ],
  },
  {
    icon: Users,
    title: 'PILAR 3: VENDAS ESTRUTURADAS',
    subtitle: 'Tráfego sem vendas treinadas = dinheiro no lixo.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    features: [
      {
        icon: MessageSquare,
        title: 'Scripts de WhatsApp que convertem 30-40%',
        description: 'Saudação + qualificação + proposta + agendamento em 5 mensagens. Objeções mapeadas e contornadas. Urgência sem ser apelativo.',
      },
      {
        icon: Users,
        title: 'Treinamento comercial para recepção',
        description: 'Transformamos atendentes em agendadores profissionais. Como qualificar lead. Como criar urgência. Como fechar sem ser insistente.',
      },
      {
        icon: ArrowRight,
        title: 'Follow-up que recupera 20-30% dos perdidos',
        description: 'Lead perguntou preço e sumiu? Follow-up em 2h, 24h, 72h. 70% dos agendamentos acontecem após 2+ toques.',
      },
    ],
  },
];

export function ComoTrabalhamosSection() {
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
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-gray-dark/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 shadow-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              O método Haast em{' '}
              <span className="gradient-text">3 pilares</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Não trabalhamos com "marketing digital genérico". 
              Construímos infraestrutura específica para clínicas e laboratórios.
            </p>
          </div>
        </motion.div>

        {/* Pilares */}
        <div className="space-y-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Header do Pilar */}
              <div className="text-center">
                <div className={`inline-flex items-center space-x-4 ${pillar.bgColor} rounded-2xl p-6 border-2 ${pillar.borderColor} hover:border-haast-primary transition-all duration-300`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center`}>
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-haast-black-graphite">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Features do Pilar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pillar.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-haast-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${pillar.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-haast-black-graphite mb-2">
                          {feature.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Separador */}
              {index < pillars.length - 1 && (
                <div className="flex items-center justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Estes 3 pilares trabalham juntos
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Infraestrutura técnica + Tráfego qualificado + Vendas estruturadas = 
              <strong className="text-yellow-400"> Máquina de agendamento previsível</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400 mb-1">1</div>
                <div className="text-sm text-white/90">Infraestrutura</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400 mb-1">+</div>
                <div className="text-sm text-white/90">Soma</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400 mb-1">=</div>
                <div className="text-sm text-white/90">Resultado</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
