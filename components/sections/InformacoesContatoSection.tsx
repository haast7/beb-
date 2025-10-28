'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle, Zap } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone/WhatsApp',
    value: '+55 11 91442-3606',
    description: 'Resposta em até 2h úteis',
    action: 'whatsapp',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'contato@haast.com.br',
    description: 'Para propostas e documentação',
    action: 'email',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    value: 'Segunda a Sexta',
    description: '9h às 18h (horário de Brasília)',
    action: 'none',
    color: 'from-orange-500 to-orange-600',
  },
];

export function InformacoesContatoSection() {
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
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-primary-dark/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-haast-primary/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              Informações de{' '}
              <span className="gradient-text">Contato</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Escolha a forma mais conveniente para entrar em contato conosco.
            </p>
          </div>
        </motion.div>

        {/* Cards de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-haast-black-graphite mb-2">
                {info.title}
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {info.value}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {info.description}
              </p>
              
              {info.action === 'whatsapp' && (
                <WhatsAppButton
                  size="sm"
                  source="contato-info-whatsapp"
                  message="Olá! Gostaria de falar sobre marketing digital para minha clínica."
                  className="group w-full"
                >
                  Falar no WhatsApp
                </WhatsAppButton>
              )}
              
              {info.action === 'email' && (
                <a
                  href="mailto:contato@haast.com.br"
                  className="inline-flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
                >
                  Enviar E-mail
                </a>
              )}
              
              {info.action === 'map' && (
                <a
                  href="https://maps.google.com/?q=Av+Juracy+Magalhães+-+Bairro+Felícia,+Vitória+da+Conquista,+BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
                >
                  Ver no Maps
                </a>
              )}
              
              {info.action === 'none' && (
                <div className="flex items-center justify-center space-x-2 text-orange-500">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-semibold">Disponível</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
