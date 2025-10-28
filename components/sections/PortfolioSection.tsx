'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ExternalLink, Eye, Calendar, Tag } from 'lucide-react';
import { PortfolioCTAButton } from '@/components/ui/PortfolioCTAButton';

// Dados do portfólio - você pode adicionar seus trabalhos aqui
const portfolioItems = [
  {
    id: 1,
    title: 'Clínica Ortopédica São Paulo',
    category: 'Landing Page + Tráfego Pago',
    description: 'Landing page de alta conversão para clínica ortopédica com foco em agendamentos online. Resultado: 47 agendamentos/mês com CPL de R$ 22.',
    images: [
      '/portfolio/clinica-ortopedica-1.jpg',
      '/portfolio/clinica-ortopedica-2.jpg',
      '/portfolio/clinica-ortopedica-3.jpg',
      '/portfolio/clinica-ortopedica-4.jpg',
    ],
    tags: ['Landing Page', 'Google Ads', 'Meta Ads', 'Conversão'],
    metrics: {
      agendamentos: '47/mês',
      cpl: 'R$ 22',
      roi: '5.2x',
      periodo: '90 dias'
    },
    color: 'from-blue-500 to-blue-600',
    year: '2024'
  },
  {
    id: 2,
    title: 'Laboratório Diagnóstico Plus',
    category: 'Estratégia Digital Completa',
    description: 'Estratégia completa de marketing digital para laboratório de análises clínicas. Implementação de tracking, automações e campanhas otimizadas.',
    images: [
      '/portfolio/laboratorio-1.jpg',
      '/portfolio/laboratorio-2.jpg',
      '/portfolio/laboratorio-3.jpg',
      '/portfolio/laboratorio-4.jpg',
    ],
    tags: ['Estratégia', 'Tracking', 'Automação', 'ROI'],
    metrics: {
      leads: '120/mês',
      cpl: 'R$ 18',
      roi: '6.8x',
      periodo: '6 meses'
    },
    color: 'from-green-500 to-green-600',
    year: '2024'
  },
  {
    id: 3,
    title: 'Clínica Odontológica Premium',
    category: 'Redes Sociais + Conversão',
    description: 'Gestão completa de redes sociais com foco em conversão para clínica odontológica. Criativos que vendem e scripts de WhatsApp que convertem.',
    images: [
      '/portfolio/odontologica-1.jpg',
      '/portfolio/odontologica-2.jpg',
      '/portfolio/odontologica-3.jpg',
      '/portfolio/odontologica-4.jpg',
    ],
    tags: ['Social Media', 'Criativos', 'WhatsApp', 'Vendas'],
    metrics: {
      showRate: '78%',
      conversao: '35%',
      roi: '4.5x',
      periodo: '4 meses'
    },
    color: 'from-purple-500 to-purple-600',
    year: '2024'
  },
  {
    id: 4,
    title: 'Centro de Imagem Médica',
    category: 'Google Ads + Landing Page',
    description: 'Campanha Google Ads otimizada para centro de imagem médica com landing page focada em exames de alta margem. Resultados excepcionais.',
    images: [
      '/portfolio/imagem-medica-1.jpg',
      '/portfolio/imagem-medica-2.jpg',
      '/portfolio/imagem-medica-3.jpg',
      '/portfolio/imagem-medica-4.jpg',
    ],
    tags: ['Google Ads', 'Landing Page', 'Exames', 'Otimização'],
    metrics: {
      exames: '85/mês',
      cpl: 'R$ 25',
      roi: '7.2x',
      periodo: '5 meses'
    },
    color: 'from-red-500 to-red-600',
    year: '2024'
  },
  {
    id: 5,
    title: 'Clínica de Cardiologia',
    category: 'Meta Ads + Remarketing',
    description: 'Estratégia de remarketing inteligente para clínica de cardiologia. Campanhas que recuperam leads perdidos e maximizam conversões.',
    images: [
      '/portfolio/cardiologia-1.jpg',
      '/portfolio/cardiologia-2.jpg',
      '/portfolio/cardiologia-3.jpg',
      '/portfolio/cardiologia-4.jpg',
    ],
    tags: ['Meta Ads', 'Remarketing', 'Recuperação', 'Maximização'],
    metrics: {
      recuperacao: '30%',
      cpl: 'R$ 15',
      roi: '8.1x',
      periodo: '3 meses'
    },
    color: 'from-orange-500 to-orange-600',
    year: '2024'
  },
  {
    id: 6,
    title: 'Laboratório de Análises',
    category: 'Automação + Follow-up',
    description: 'Sistema completo de automação e follow-up para laboratório de análises. Scripts de WhatsApp que convertem 40% dos leads.',
    images: [
      '/portfolio/analises-1.jpg',
      '/portfolio/analises-2.jpg',
      '/portfolio/analises-3.jpg',
      '/portfolio/analises-4.jpg',
    ],
    tags: ['Automação', 'Follow-up', 'Scripts', 'WhatsApp'],
    metrics: {
      conversao: '40%',
      cpl: 'R$ 20',
      roi: '5.8x',
      periodo: '7 meses'
    },
    color: 'from-teal-500 to-teal-600',
    year: '2024'
  }
];

export function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-haast-gray-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trabalhos que{' '}
            <span className="gradient-text">falam por si</span>
          </h2>
          <p className="text-xl text-haast-gray-light max-w-3xl mx-auto">
            Cada projeto é uma história de sucesso. Veja como transformamos clínicas e laboratórios em máquinas de agendamento.
          </p>
        </motion.div>

        {/* Grid do Portfólio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-haast-black-graphite border border-haast-gray-medium hover:border-haast-green transition-all duration-300 group-hover:scale-105 group-hover:shadow-haast-glow">
                {/* Imagem Principal */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/portfolio/placeholder.jpg';
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Overlay com ícone */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-haast-green rounded-full flex items-center justify-center">
                      <Eye className="h-8 w-8 text-haast-black-graphite" />
                    </div>
                  </div>

                  {/* Badge de categoria */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-haast-green text-haast-black-graphite text-xs font-bold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Ano */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-haast-black-graphite/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-haast-green transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-haast-gray-light text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-haast-gray-medium text-haast-gray-light px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-xs text-haast-gray-light">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Métricas */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-haast-green">
                        {item.metrics.agendamentos || item.metrics.leads || item.metrics.exames || item.metrics.showRate || item.metrics.conversao || item.metrics.recuperacao}
                      </div>
                      <div className="text-xs text-haast-gray-light">Resultado</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-haast-green">
                        {item.metrics.roi}
                      </div>
                      <div className="text-xs text-haast-gray-light">ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-haast-black-graphite rounded-2xl p-8 border border-haast-gray-medium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer ser o próximo caso de sucesso?
            </h3>
            <p className="text-haast-gray-light mb-6">
              Vamos transformar sua clínica ou laboratório em uma máquina de agendamentos.
            </p>
            <PortfolioCTAButton
              message="Olá! Vi o portfólio da Haast e quero ser o próximo caso de sucesso!"
              source="portfolio-main"
            >
              Quero ser o próximo
            </PortfolioCTAButton>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-haast-black-graphite rounded-2xl overflow-hidden border border-haast-gray-medium"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-haast-gray-medium">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                  <p className="text-haast-gray-light">{selectedItem.category}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-haast-gray-light hover:text-white transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col lg:flex-row max-h-[calc(90vh-120px)]">
                {/* Imagens */}
                <div className="flex-1 relative">
                  <div className="relative h-96 lg:h-full">
                    <Image
                      src={selectedItem.images[currentImageIndex]}
                      alt={`${selectedItem.title} - Imagem ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/portfolio/placeholder.jpg';
                      }}
                    />
                    
                    {/* Navegação de imagens */}
                    {selectedItem.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </>
                    )}

                    {/* Indicadores */}
                    {selectedItem.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {selectedItem.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === currentImageIndex ? 'bg-haast-green' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Informações */}
                <div className="w-full lg:w-96 p-6 bg-haast-gray-dark overflow-y-auto">
                  <div className="space-y-6">
                    {/* Descrição */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Sobre o Projeto</h4>
                      <p className="text-haast-gray-light text-sm leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Tecnologias & Estratégias</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-haast-green/20 text-haast-green px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Métricas */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Resultados</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(selectedItem.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-haast-green">{value}</div>
                            <div className="text-xs text-haast-gray-light capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <PortfolioCTAButton
                        message="Olá! Vi o projeto da Haast e quero resultados similares!"
                        source="portfolio-project"
                        className="w-full bg-haast-green hover:bg-haast-green-success text-haast-black-graphite font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                      >
                        Quero resultados similares
                      </PortfolioCTAButton>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
