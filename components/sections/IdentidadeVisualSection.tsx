'use client';

import { motion } from 'framer-motion';
import { Palette, ArrowRight, CheckCircle, DollarSign, Camera, Video, Star } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const services = [
  {
    title: 'Branding Completo',
    items: [
      'Criação de logotipo',
      'Manual de identidade visual',
      'Paleta de cores estratégica',
      'Tipografia definida',
      'Aplicações em diferentes formatos',
    ],
    price: 'Sob consulta',
  },
  {
    title: 'Materiais Gráficos',
    items: [
      'Cartão de visita',
      'Papel timbrado',
      'Receituário médico',
      'Pasta/envelope',
      'Crachás e uniformes',
      'Sinalização interna',
    ],
    price: 'Sob consulta',
  },
  {
    title: 'Materiais Digitais',
    items: [
      'Assinatura de e-mail',
      'Capa Facebook/LinkedIn',
      'Avatar redes sociais',
      'Stories highlights',
      'Thumbnails YouTube',
    ],
    price: 'Sob consulta',
  },
  {
    title: 'Pack Social Mensal',
    items: [
      '12-20 peças criativas/mês',
      'Posts feed (Instagram/Facebook)',
      'Stories/Reels',
      'Copy persuasiva',
      'Calendário editorial',
    ],
    price: 'Sob consulta',
  },
  {
    title: 'Fotografia & Vídeo',
    items: [
      'Ensaio fotográfico profissional',
      'Vídeos institucionais',
      'Vídeos para anúncios (15-30s)',
      'Depoimentos de pacientes',
      'Tour virtual da clínica',
    ],
    price: 'Sob consulta',
  },
];

export function IdentidadeVisualSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-pink-500/20">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Palette className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              Identidade Visual &{' '}
              <span className="gradient-text">Branding</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Criação e padronização de identidade visual profissional para clínicas e laboratórios.
            </p>
          </div>
        </motion.div>

        {/* Serviços */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-haast-black-graphite mb-8 text-center">
            O que fazemos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-pink-300 transition-all duration-300 hover:shadow-xl"
              >
                <h4 className="text-xl font-bold text-haast-black-graphite mb-4">
                  {service.title}
                </h4>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-pink-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/10 rounded-xl p-3 text-center">
                  <p className="text-pink-600 font-bold">
                    {service.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para acelerar seu crescimento?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Agende uma consultoria estratégica e descubra como potencializar os resultados da sua clínica.
            </p>
            <WhatsAppButton
              size="lg"
              source="identidade-visual"
              message="Olá! Gostaria de agendar uma consultoria estratégica para minha clínica."
              className="group w-full md:w-auto hover:scale-100 md:hover:scale-105"
            >
              Agendar Consultoria Estratégica
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0 md:group-hover:translate-x-1 transition-transform" />
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
