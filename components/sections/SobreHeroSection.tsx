'use client';

import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ArrowRight, Eye, Zap, Target, Shield, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const eagleAttributes = [
  {
    icon: Eye,
    title: 'Visão aguçada',
    description: 'Detectava presas a 3km de distância',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Velocidade de ataque',
    description: '80 km/h em mergulho de caça',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Target,
    title: 'Precisão cirúrgica',
    description: 'Nunca errava o alvo',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Crown,
    title: 'Domínio territorial',
    description: 'Controle absoluto do território',
    color: 'from-purple-500 to-purple-600',
  },
];

const dnaValues = [
  'Foco implacável',
  'Execução técnica superior',
  'Resultado que você pode medir',
  'Precisão cirúrgica na execução',
];

export function SobreHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-haast-primary to-haast-black-graphite">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-haast-primary to-haast-black-graphite" />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-haast-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-haast-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8 md:py-16">
          {/* Conteúdo Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-4">
                <Crown className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-bold text-white">Inspirados pela maior águia que já existiu</span>
              </div>
              
              <h1 className="text-hero text-white text-balance">
                Inspirados pela maior{' '}
                <span className="gradient-text">águia que já existiu.</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Construídos para{' '}
                <span className="text-yellow-400">resultados que permanecem.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-body text-white/90 max-w-2xl">
                A <strong className="text-white">Haast</strong> era a águia mais imponente da Nova Zelândia. 
                Visão aguçada. Precisão cirúrgica. Domínio territorial absoluto.
              </p>
              <p className="text-body text-white/90 max-w-2xl">
                <strong className="text-white">Nós carregamos o mesmo DNA:</strong> foco implacável, 
                execução técnica superior, e resultado que você pode medir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4 md:space-y-6"
            >
              <WhatsAppButton
                size="xl"
                source="sobre-hero"
                className="group w-full md:w-auto hover:scale-100 md:hover:scale-105"
              >
                Conheça nossa história
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0 md:group-hover:translate-x-1 transition-transform" />
              </WhatsAppButton>

              {/* DNA Values */}
              <div className="space-y-3">
                {dnaValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Shield className="h-5 w-5 text-haast-primary flex-shrink-0" />
                    <span className="text-sm text-white/90">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual da Águia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <h3 className="text-white font-bold text-xl mb-2">A Águia Haast</h3>
                  <p className="text-white/80 text-sm">Hieraaetus moorei - Extinta há 600 anos</p>
                </div>

                {/* Águia Visual */}
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Imagem da Águia Haast */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/aguiahaast.png"
                        alt="Águia Haast - Representação artística gerada por IA"
                        fill
                        className="object-cover rounded-xl"
                        priority
                      />
                    </div>
                    
                    {/* Elementos digitais */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-haast-primary/30 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-haast-primary rounded-sm" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-green-500/30 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-500 rounded-sm" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-500/30 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-sm" />
                    </div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-purple-500/30 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-purple-500 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* Legenda IA */}
                  <div className="mt-3 text-center">
                    <p className="text-xs text-white/60 italic">
                      * Representação artística gerada por inteligência artificial
                    </p>
                  </div>
                </div>

                {/* Atributos da Águia */}
                <div className="grid grid-cols-2 gap-4">
                  {eagleAttributes.map((attr, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="bg-white/5 rounded-lg p-3 border border-white/10"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-6 h-6 bg-gradient-to-r ${attr.color} rounded-full flex items-center justify-center`}>
                          <attr.icon className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-white font-semibold text-xs">{attr.title}</span>
                      </div>
                      <p className="text-white/80 text-xs">{attr.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-haast-primary/20 to-haast-primary/10 rounded-xl p-4 border border-haast-primary/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">3m</div>
                    <div className="text-sm text-white/80">Envergadura</div>
                    <div className="text-xs text-white/60 mt-1">Maior águia que já existiu</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-haast-primary/20 rounded-3xl blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
