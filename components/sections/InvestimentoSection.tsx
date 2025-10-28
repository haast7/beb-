'use client';

import { motion } from 'framer-motion';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ArrowRight } from 'lucide-react';

export function InvestimentoSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Agende um diagnóstico gratuito de 30min e veja como podemos ajudar sua clínica.
            </p>
            
            <div className="space-y-4">
              <WhatsAppButton
                variant="conversion-green"
                size="lg"
                source="investimento"
                message="Olá! Gostaria de saber mais sobre o Plano Captação da Haast."
                className="w-full group"
              >
                Quero o Plano Captação
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </WhatsAppButton>

              <WhatsAppButton
                variant="outline-dark"
                size="lg"
                source="diagnostic"
                message="Olá! Gostaria de agendar um diagnóstico gratuito de 30min sobre minha clínica/laboratório."
                className="w-full"
              >
                Agendar diagnóstico gratuito
              </WhatsAppButton>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-white/90">
                <strong className="text-white">+50 empresas</strong> •{' '}
                <strong className="text-white">escalando hoje com a Haast.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

