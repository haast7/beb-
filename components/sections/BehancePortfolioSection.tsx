'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { getPortfolioItems, type PortfolioItem } from '@/lib/portfolio-data';

interface CarrosselData {
  id: string;
  name: string;
  images: string[];
}

interface LaboPortfolioItem {
  id: string;
  name: string;
  logo: string;
  cover: string;
  carrossels: CarrosselData[];
}

interface CicatriclinPortfolioItem {
  id: string;
  name: string;
  logo: string;
  coverImage: string;
  carrossels: CarrosselData[];
}

interface MicrolinsPortfolioItem {
  id: string;
  name: string;
  logo: string;
  coverImage: string;
  carrossels: CarrosselData[];
}

export function BehancePortfolioSection() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [laboData, setLaboData] = useState<LaboPortfolioItem | null>(null);
  const [cicatriclinData, setCicatriclinData] = useState<CicatriclinPortfolioItem | null>(null);
  const [microlinsData, setMicrolinsData] = useState<MicrolinsPortfolioItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | LaboPortfolioItem | CicatriclinPortfolioItem | MicrolinsPortfolioItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Debug: Log quando selectedImage muda
  useEffect(() => {
    console.log('selectedImage mudou para:', selectedImage);
  }, [selectedImage]);
  const [currentCarrosselIndex, setCurrentCarrosselIndex] = useState(0);

  // Carrega automaticamente os itens do portfólio
  useEffect(() => {
    try {
      const items = getPortfolioItems();
      setPortfolioItems(items);
    } catch (error) {
      console.error('Erro ao carregar portfólio:', error);
    }
  }, []);

  // Carrega dados da Labo
  useEffect(() => {
    const loadLaboData = async () => {
      try {
        const response = await fetch('/api/labo-data');
        if (response.ok) {
          const data = await response.json();
          setLaboData(data);
        }
      } catch (error) {
        console.error('Erro ao carregar dados da Labo:', error);
      }
    };
    loadLaboData();
  }, []);

  // Carrega dados da Cicatriclin
  useEffect(() => {
    const loadCicatriclinData = async () => {
      try {
        const response = await fetch('/api/cicatriclin-data');
        if (response.ok) {
          const data = await response.json();
          setCicatriclinData(data);
        }
      } catch (error) {
        console.error('Erro ao carregar dados da Cicatriclin:', error);
      }
    };
    loadCicatriclinData();
  }, []);

  // Carrega dados da Microlins
  useEffect(() => {
    const loadMicrolinsData = async () => {
      try {
        const response = await fetch('/api/microlins-data');
        if (response.ok) {
          const data = await response.json();
          setMicrolinsData(data);
        }
      } catch (error) {
        console.error('Erro ao carregar dados da Microlins:', error);
      }
    };
    loadMicrolinsData();
  }, []);

  const openModal = (item: PortfolioItem | LaboPortfolioItem | CicatriclinPortfolioItem | MicrolinsPortfolioItem) => {
    setSelectedItem(item);
    setCurrentCarrosselIndex(0);
    setSelectedImage(null);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentCarrosselIndex(0);
    setSelectedImage(null);
  };

  const openImageModal = (imageSrc: string) => {
    console.log('Tentando abrir modal de imagem:', imageSrc);
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Fechar modal com ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        closeImageModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage]);

  const nextCarrossel = () => {
    if (selectedItem && 'carrossels' in selectedItem) {
      setCurrentCarrosselIndex((prev) => 
        prev === selectedItem.carrossels.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevCarrossel = () => {
    if (selectedItem && 'carrossels' in selectedItem) {
      setCurrentCarrosselIndex((prev) => 
        prev === 0 ? selectedItem.carrossels.length - 1 : prev - 1
      );
    }
  };

  // Função para calcular o tamanho das imagens baseado na quantidade
  // Todas as fileiras terão a mesma largura total, com imagens distribuídas uniformemente
  const getImageSize = (imageCount: number, carrosselId?: string) => {
    // Outdoors sempre ocupam largura total
    if (carrosselId && (carrosselId.includes('outdoor') || carrosselId === 'outros')) {
      return 'w-full';
    }
    
    if (imageCount === 1) return 'w-full'; // 1 imagem = largura total
    if (imageCount === 2) return 'w-1/2'; // 2 imagens = metade cada
    if (imageCount === 3) return 'w-1/3'; // 3 imagens = terço cada
    if (imageCount === 4) return 'w-1/4'; // 4 imagens = quarto cada
    if (imageCount === 5) return 'w-1/5'; // 5 imagens = quinto cada
    if (imageCount === 6) return 'w-1/6'; // 6 imagens = sexto cada
    if (imageCount === 7) return 'w-1/7'; // 7 imagens = sétimo cada
    if (imageCount === 8) return 'w-1/8'; // 8 imagens = oitavo cada
    return 'w-1/4'; // padrão para mais de 8 imagens
  };

  // Combinar todos os itens do portfólio
  const allItems = [...portfolioItems];
  if (laboData) {
    allItems.push(laboData as any);
  }
  if (cicatriclinData) {
    allItems.push(cicatriclinData as any);
  }
  if (microlinsData) {
    allItems.push(microlinsData as any);
  }

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
          Falamos tanto de ROI <span className="gradient-text">que você deve estar pensando...</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          "Será que esses caras sabem fazer algo visualmente atraente?" Justo. Clique aqui e julgue você mesmo.
          </p>
        </motion.div>

        {/* Grid de Cards de Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              {/* Card de Preview */}
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-haast-primary transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-haast-primary/20">
                {/* Imagem de Capa */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={'cover' in item ? item.cover : (item as any).coverImage}
                    alt={`Capa do projeto ${item.name}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Ícone de Visualização */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-haast-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                        {/* Título */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-haast-black-graphite group-hover:text-haast-primary transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Estilo Behance - Visualização Completa */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/95 backdrop-blur-sm"
                onClick={closeModal}
              />

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-7xl max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Header do Modal - Simplificado */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedItem.name}
                    </h3>
                  </div>
                  
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Conteúdo do Modal - Scroll Vertical */}
                <div className="max-h-[calc(95vh-120px)] overflow-y-auto">
                  <div className="p-6">
                    {'carrossels' in selectedItem ? (
                      // Layout com carrosséis (Labo) - Mosaico Horizontal
                      <>
                        {selectedItem.carrossels.map((carrossel, carrosselIndex) => (
                          <div key={carrossel.id} className={`w-full ${carrosselIndex > 0 ? 'mt-4' : ''}`}>
                            {/* Carrossel de Imagens - Sem Título */}
                            <div className="flex gap-2 w-full">
                              {carrossel.images.map((image, imageIndex) => (
                                <motion.div
                                  key={imageIndex}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: imageIndex * 0.1 }}
                                  className={`${getImageSize(carrossel.images.length, carrossel.id)} cursor-pointer group relative`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log('Clique na imagem detectado:', image);
                                    console.log('Evento de clique:', e);
                                    console.log('Target:', e.target);
                                    openImageModal(image);
                                  }}
                                  onMouseDown={(e) => e.preventDefault()}
                                >
                                  <div className={`relative overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg ${
                                    carrossel.id.includes('outdoor') || carrossel.id === 'outros' 
                                      ? 'w-full h-[28rem]' 
                                      : 'border-2 border-gray-200 hover:border-haast-green'
                                  } ${
                                    carrossel.images.length === 1 && !carrossel.id.includes('outdoor') && carrossel.id !== 'outros' 
                                      ? 'w-full aspect-square' 
                                      : carrossel.images.length > 1 
                                        ? 'aspect-square' 
                                        : ''
                                  }`}>
                                    <Image
                                      src={image}
                                      alt={`Imagem ${imageIndex + 1}`}
                                      fill
                                      className={`group-hover:scale-105 transition-transform duration-300 ${
                                        carrossel.images.length === 1 || carrossel.id.includes('outdoor') || carrossel.id === 'outros' ? 'object-contain' : 'object-cover'
                                      }`}
                                    />
                                    
                                    {/* Overlay de Zoom */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2">
                                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                          <ZoomIn className="w-6 h-6 text-haast-primary" />
                                        </div>
                                        <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">
                                          Clique para ampliar
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      // Layout tradicional (outros projetos)
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {selectedItem.pieces.map((piece, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="cursor-pointer group"
                            onClick={() => openImageModal(piece)}
                          >
                            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-gray-200 hover:border-haast-green transition-all duration-300 group-hover:shadow-lg">
                              <Image
                                src={piece}
                                alt={`Peça ${index + 1} de ${selectedItem.name}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              
                              {/* Overlay de Zoom */}
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal de Imagem Individual - Melhorado */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            >
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/95 backdrop-blur-sm"
                onClick={closeImageModal}
              />

              {/* Modal de Imagem */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-7xl max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Melhorado */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-haast-primary rounded-full flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Visualização em Tela Cheia
                    </h4>
                  </div>
                  <button
                    onClick={closeImageModal}
                    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200 group"
                    title="Fechar visualização (ESC)"
                  >
                    <X className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                  </button>
                </div>

                {/* Imagem com Melhor Controle */}
                <div className="relative w-full h-[calc(95vh-80px)] bg-gray-100">
                  <Image
                    src={selectedImage}
                    alt="Visualização individual"
                    fill
                    className="object-contain p-4"
                    priority
                    quality={95}
                  />
                  
                  {/* Overlay de Instruções */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm">
                    💡 Clique fora da imagem para fechar
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}