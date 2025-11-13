'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Clock, Zap, CheckCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const benefits = [
  'Resposta em até 2h úteis',
  'Consultoria gratuita de 30min',
  'Proposta personalizada em 24h',
  'Suporte especializado',
];

export function ContatoHeroSection() {
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
            Fale com a{' '}
            <span className="gradient-text">Haast</span>
          </h1>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            Pronto para transformar sua clínica em uma máquina de agendamentos?
          </p>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Agende uma consultoria gratuita e descubra como podemos acelerar seu crescimento.
          </p>
        </motion.div>

        {/* Benefícios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-haast-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-white font-semibold">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTAs Principais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                WhatsApp
              </h3>
              <p className="text-white/90 mb-6">
                Resposta rápida e direta. Ideal para dúvidas urgentes e agendamentos.
              </p>
              <WhatsAppButton
                size="lg"
                source="contato-hero-whatsapp"
                message="Olá! Gostaria de agendar uma consultoria gratuita para minha clínica."
                className="group w-full"
              >
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </WhatsAppButton>
            </div>

            {/* E-mail */}
            <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                E-mail
              </h3>
              <p className="text-white/90 mb-6">
                Para propostas detalhadas e documentação. Resposta em até 2h úteis.
              </p>
              <a
                href="mailto:contato@haast.com.br"
                className="inline-flex items-center justify-center w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group"
              >
                Enviar E-mail
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}










