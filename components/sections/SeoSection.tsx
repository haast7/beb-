'use client';

import { motion } from 'framer-motion';
import { Search, ArrowRight, CheckCircle, Clock, Target, BarChart3, Globe, FileText, Settings, DollarSign } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const seoCategories = [
  {
    title: 'SEO Técnico',
    icon: Settings,
    items: [
      'Auditoria completa do site',
      'Correção de erros (404, redirect chains, canonical)',
      'Otimização de velocidade (Core Web Vitals)',
      'Schema Markup para saúde',
      'XML Sitemap otimizado',
      'Robots.txt configurado',
      'HTTPS e segurança',
    ],
  },
  {
    title: 'SEO On-Page',
    icon: FileText,
    items: [
      'Pesquisa de palavras-chave (local + nacional)',
      'Otimização de títulos e meta descriptions',
      'Estrutura de headings (H1, H2, H3)',
      'Otimização de imagens (alt text, compressão)',
      'URL structure amigável',
      'Internal linking estratégico',
    ],
  },
  {
    title: 'Conteúdo Otimizado',
    icon: Globe,
    items: [
      'Blog com artigos SEO-friendly',
      'Páginas de serviços otimizadas',
      'FAQ estruturado (rich snippets)',
      'Conteúdo para long-tail keywords',
    ],
  },
  {
    title: 'SEO Local (Fundamental para Clínicas)',
    icon: Target,
    items: [
      'Google Meu Negócio otimizado',
      'Citações em diretórios médicos',
      'Avaliações e gestão de reputação',
      'Local backlinks',
      'Otimização para "perto de mim"',
    ],
  },
  {
    title: 'Link Building',
    icon: BarChart3,
    items: [
      'Backlinks de qualidade',
      'Guest posts em portais de saúde',
      'Parcerias estratégicas',
      'Menções em mídia local',
    ],
  },
];

const reports = [
  'Posicionamento de keywords',
  'Tráfego orgânico',
  'Taxa de conversão',
  'Comparativo com concorrentes',
];

export function SeoSection() {
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
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-green-500/20">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              SEO & Presença{' '}
              <span className="gradient-text">Orgânica</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Otimização para buscadores que posiciona sua clínica no topo do Google sem pagar por clique.
            </p>
          </div>
        </motion.div>

        {/* Categorias SEO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            O que fazemos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {category.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Relatórios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Relatórios Mensais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {reports.map((report, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">{report}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Investimento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para acelerar seu crescimento?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Agende uma consultoria estratégica e descubra como potencializar os resultados da sua clínica.
            </p>
            <WhatsAppButton
              size="lg"
              source="seo"
              message="Olá! Gostaria de agendar uma consultoria estratégica para minha clínica."
              className="group"
            >
              Agendar Consultoria Estratégica
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </WhatsAppButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
