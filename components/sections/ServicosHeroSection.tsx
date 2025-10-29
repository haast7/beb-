'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Target, Search, Code, Settings, Palette, BookOpen, Shield, BarChart3, Zap } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const services = [
  {
    icon: Target,
    title: 'Tráfego Pago & Performance',
    description: 'Campanhas estruturadas para gerar agendamentos e receita real',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Search,
    title: 'SEO & Presença Orgânica',
    description: 'Posicionamento no topo do Google sem pagar por clique',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: Code,
    title: 'Desenvolvimento Web & Apps',
    description: 'Sites, landing pages e aplicativos para conversão',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: Settings,
    title: 'Automação & Integrações',
    description: 'Conectamos sistemas e eliminamos trabalho manual',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: Palette,
    title: 'Identidade Visual & Branding',
    description: 'Criação e padronização de identidade visual profissional',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
  },
  {
    icon: BookOpen,
    title: 'Consultoria & Treinamento',
    description: 'Capacitação de equipes e consultoria estratégica',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
  },
];

export function ServicosHeroSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-haast-black-graphite via-haast-gray-dark to-haast-black-graphite">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Infraestrutura digital{' '}
            <span className="gradient-text">completa</span>
          </h1>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            Do diagnóstico ao domínio de mercado.
          </p>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Mais que agência. Somos seu departamento de tecnologia e marketing em um único lugar.
          </p>
        </motion.div>

        {/* Grid de Serviços */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${service.bgColor} ${service.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-haast-black-graphite group-hover:text-haast-primary transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-haast-primary font-semibold group-hover:translate-x-2 transition-transform">
                <span>Saiba mais</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para dominar o digital?
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Agende um diagnóstico gratuito e descubra como transformar sua clínica em uma máquina de agendamentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton
                size="lg"
                source="servicos-hero"
                message="Olá! Gostaria de agendar um diagnóstico gratuito para minha clínica."
                className="group w-full md:w-auto hover:scale-100 md:hover:scale-105"
              >
                Agendar Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0 md:group-hover:translate-x-1 transition-transform" />
              </WhatsAppButton>
              <div className="flex items-center space-x-2 text-white/80">
                <Zap className="h-5 w-5" />
                <span className="text-sm">Resposta em até 2h</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


