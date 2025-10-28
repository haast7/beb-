'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Lightbulb, Target, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

const problems = [
  'Relatórios bonitos cheios de métricas inúteis (curtidas, impressões, "engajamento")',
  'Promessas de "resultado em 7 dias" que nunca chegavam',
  'Agências que somem quando é hora de prestar contas',
  'Campanhas que "rodaram verba" mas não trouxeram paciente nenhum',
  'Zero transparência (contas de anúncio no nome da agência)',
];

const solutions = [
  'Infraestrutura técnica de verdade (tracking avançado, automações, integração de sistemas)',
  'Mentalidade de resultado (ROI, não vaidade. Agendamentos, não likes)',
];

const results = [
  {
    clinic: 'Clínica A',
    before: '12 agendamentos/mês',
    after: '47 agendamentos/mês',
    improvement: '+292%',
    color: 'from-green-500 to-green-600',
  },
  {
    clinic: 'Lab B',
    before: 'CPL alto',
    after: 'CPL de R$ 22',
    improvement: 'Otimizado',
    color: 'from-blue-500 to-blue-600',
  },
  {
    clinic: 'Clínica C',
    before: 'Show rate 52%',
    after: 'Show rate 78%',
    improvement: '+50%',
    color: 'from-purple-500 to-purple-600',
  },
];

const whyHaast = [
  'Visão estratégica de longo alcance',
  'Precisão técnica na execução',
  'Foco absoluto no objetivo (conversão)',
  'Domínio do território (seu mercado local)',
  'A águia não improvisa. Ela executa.',
];

export function NossaOrigemSection() {
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
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-orange-500/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Como começamos{' '}
              <span className="gradient-text">(e por que somos diferentes)</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              A Haast não nasceu de um MBA ou de uma teoria bonita.  
              <strong className="text-white"> Nasceu da frustração.</strong>
            </p>
          </div>
        </motion.div>

        {/* 2019: O Problema */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">2019: O problema que vimos</h3>
                <p className="text-white/80">Donos de clínicas e laboratórios investindo milhares em "marketing digital"</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                  <span className="text-white/90 text-sm">{problem}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
              <p className="text-white/90 text-center">
                <strong className="text-white">Pior ainda:</strong> Ninguém falava de infraestrutura.
              </p>
              <p className="text-white/80 text-sm text-center mt-2">
                Tracking quebrado. Landing pages lentas. Equipe comercial improvisando no WhatsApp. 
                Leads evaporando porque ninguém respondia em menos de 4 horas.
              </p>
            </div>
          </div>
        </motion.div>

        {/* O Ponto de Virada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">O Ponto de Virada</h3>
                <p className="text-white/80">Juntamos os dois mundos</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-white/90">{solution}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
              <p className="text-white/90 text-center text-lg">
                <strong className="text-white">Testamos em 3 clínicas de amigos próximos.</strong><br />
                <span className="text-yellow-400">Funcionou.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Resultados em 90 dias */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Em 90 dias</h3>
                <p className="text-white/80">Os resultados que mudaram tudo</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <div className="text-center">
                    <h4 className="text-white font-bold text-lg mb-2">{result.clinic}</h4>
                    <div className="space-y-2 mb-4">
                      <p className="text-white/80 text-sm">Antes: {result.before}</p>
                      <p className="text-white/90 text-sm">Depois: {result.after}</p>
                    </div>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${result.color} text-white text-sm font-semibold`}>
                      {result.improvement}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 2021: Haast nasce */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-haast-primary/20 to-haast-primary/10 rounded-2xl p-8 border border-haast-primary/30">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                2021: Haast nasce oficialmente
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
                Pegamos o nome da águia extinta porque representa tudo que acreditamos:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {whyHaast.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-haast-primary flex-shrink-0" />
                    <span className="text-white/90 text-sm">{reason}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <p className="text-white text-lg font-semibold">
                  E principalmente: <span className="text-yellow-400">a águia não improvisa. Ela executa.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
