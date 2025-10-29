'use client';

import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function FinalCTASection() {

  return (
    <section className="section-padding bg-gradient-to-br from-haast-primary to-haast-black-graphite relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-haast-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-haast-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 text-balance">
            Sua agenda não vai se{' '}
            <span className="gradient-text">encher sozinha</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 mb-12"
          >
            <p className="text-xl text-white/90 leading-relaxed">
              Enquanto você lê isso, seus concorrentes estão agendando os pacientes que deveriam ser seus.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              A diferença entre clínica cheia e clínica vazia não é localização, preço ou qualidade. 
              É <strong className="text-white">estratégia digital executada com precisão cirúrgica</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-2xl p-8 border border-white/20 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Você tem duas opções:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="text-lg font-bold text-haast-red-alert mb-3 flex items-center">
                  <span className="w-6 h-6 bg-haast-red-alert rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                  Opção 1: Continuar como está
                </h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Dependendo de indicação</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Rezando para o telefone tocar</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Improvisando no WhatsApp</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Se perguntando por que a conta não fecha</span>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-haast-black-graphite text-sm font-bold mr-3">2</span>
                  Opção 2: Trabalhar com a Haast
                </h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                    <span>Infraestrutura digital de verdade</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                    <span>Processo comprovado</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                    <span>Marketing de despesa em investimento</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                    <span>ROI real e previsível</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <WhatsAppButton
              size="xl"
              source="final_cta"
              message="Olá! Quero agenda lotada - falar com Haast agora!"
              className="group w-full md:w-auto text-lg md:text-xl py-4 md:py-6 px-6 md:px-12 hover:scale-100 md:hover:scale-105"
            >
              Quero Agenda Lotada — Falar com Haast Agora
              <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6 group-hover:translate-x-0 md:group-hover:translate-x-1 transition-transform" />
            </WhatsAppButton>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-haast-gray-light">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-haast-green" />
                <span>Resposta em até 2 minutos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-haast-green" />
                <span>Diagnóstico gratuito de 30min</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-haast-green" />
                <span>Onboarding em até 7 dias</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 relative"
          >
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 border-2 border-red-400 shadow-2xl shadow-red-500/25 relative overflow-hidden">
              {/* Efeito de brilho animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-pulse"></div>
              
              {/* Ícone de alerta */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-white font-bold text-xl mb-2">
                    ⚠️ <span className="text-yellow-300">ATENÇÃO:</span> Vagas Limitadas
                  </h4>
                  <p className="text-white/95 font-semibold text-lg leading-relaxed">
                    <span className="text-yellow-300 font-bold">P.S.:</span> Trabalhamos com no máximo{' '}
                    <span className="text-yellow-300 font-bold text-xl">3 clientes</span> por especialidade/região.{' '}
                    <span className="text-white font-bold">Se seu concorrente chegar primeiro, você ficou para trás.</span>
                  </p>
                  
                  {/* Barra de urgência */}
                  <div className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-300 to-orange-300 h-full w-3/4 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-white/80 text-sm mt-2 font-medium">
                    🚨 Últimas vagas disponíveis para 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
