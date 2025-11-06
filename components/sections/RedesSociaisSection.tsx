'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, ArrowRight, ExternalLink } from 'lucide-react';

const socialNetworks = [
  {
    name: 'Instagram',
    handle: '@haastmarketing',
    url: 'https://instagram.com/haastmarketing',
    description: 'Acompanhe nossos cases, dicas e novidades',
    icon: Instagram,
    color: 'from-pink-500 to-purple-600',
    bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50',
    borderColor: 'border-pink-200',
  },
  {
    name: 'LinkedIn',
    handle: 'Haast Oficial',
    url: 'https://linkedin.com/company/haastoficial',
    description: 'Conteúdo profissional e networking',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
  },
  {
    name: 'YouTube',
    handle: 'Haast Marketing',
    url: 'https://youtube.com/@haastmarketing',
    description: 'Tutoriais e cases detalhados',
    icon: Youtube,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
    borderColor: 'border-red-200',
  },
];

const contentTypes = [
  'Cases de sucesso detalhados',
  'Dicas de marketing digital',
  'Tutoriais práticos',
  'Novidades do mercado',
  'Depoimentos de clientes',
  'Webinars e lives',
];

export function RedesSociaisSection() {
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
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-primary-dark/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-haast-primary/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Siga-nos nas{' '}
              <span className="gradient-text">Redes Sociais</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Acompanhe nosso conteúdo exclusivo e fique por dentro das novidades do marketing digital.
            </p>
          </div>
        </motion.div>

        {/* Redes Sociais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialNetworks.map((network, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-haast-primary/30 transition-all duration-300 text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${network.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <network.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {network.name}
              </h3>
              <p className="text-haast-primary font-semibold mb-4">
                {network.handle}
              </p>
              <p className="text-white/80 mb-6">
                {network.description}
              </p>
              <a
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group"
              >
                <span>Seguir</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Tipos de Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            O que você vai encontrar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentTypes.map((content, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-haast-primary rounded-full flex-shrink-0"></div>
                <span className="text-white/90">{content}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Não perca nenhuma novidade!
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Siga-nos nas redes sociais e seja o primeiro a saber sobre nossos cases, 
              dicas e novidades do marketing digital.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialNetworks.map((network, index) => (
                <a
                  key={index}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group"
                >
                  <network.icon className="h-5 w-5" />
                  <span>{network.name}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





