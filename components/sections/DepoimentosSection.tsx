'use client';

import { motion } from 'framer-motion';
import { Quote, Star, TrendingUp, Target, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Ricardo Mendes',
    clinic: 'Clínica Ortopédica Mendes - Salvador/BA',
    quote: 'Já tinha tentado 2 agências antes. As duas prometeram mundo e entregaram post no Instagram. A Haast foi a primeira que chegou falando de tracking, conversão, ROI. Pensei: "esses caras são diferentes".',
    results: 'Em 90 dias, minha agenda que tinha furos toda semana passou a ter fila de espera. CPL de R$ 58 em consultas ortopédicas especializadas. ROI de 5.2x.',
    highlight: 'O diferencial? Eles treinaram minha recepcionista. Antes ela só anotava nome. Agora ela vende. Conversão de lead pra agendamento saiu de 18% pra 37%.',
    conclusion: 'Não é mágica. É processo.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Dra. Camila Rocha',
    clinic: 'Laboratório Diagnóstico Advance - Vitória da Conquista/BA',
    quote: 'Contratei a Haast pra campanha sazonal de checkup de férias. Investimento: R$ 2.800 em ads. Retorno: R$ 392 mil em receita. ROAS de 140x.',
    results: 'Parece mentira, mas não é. Eles acertaram: 1. Timing perfeito (2 semanas antes das férias) 2. Público certo (executivos 35-55 anos) 3. Oferta matadora (checkup família com desconto) 4. Follow-up agressivo (automação + equipe treinada)',
    highlight: '27 famílias fecharam checkup completo. Ticket médio: R$ 14.5K.',
    conclusion: 'Nunca mais rodo campanha sem a Haast estruturando.',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Dr. Paulo Andrade',
    clinic: 'Clínica Vita - Fortaleza/CE',
    quote: 'O que mais me impressionou não foi o resultado (que foi ótimo). Foi a transparência.',
    results: 'Tenho acesso TOTAL às contas do Google e Meta. Vejo cada centavo sendo gasto. Recebo relatório SEMANAL, não mensal.',
    highlight: 'Em 6 meses: Agendamentos mensais: de 23 pra 51 | Show rate: de 64% pra 81% | Custo por paciente: de R$ 180 pra R$ 87',
    conclusion: 'E o melhor: agora SEI que mês que vem vou ter entre 45-55 agendamentos. Consigo planejar. Consigo crescer. Isso não tem preço.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Marina Costa',
    clinic: 'Administradora - Rede LabSaúde (3 unidades) - Recife/PE',
    quote: 'Sou administradora, não sou da área de saúde nem de marketing. Herdei a gestão das clínicas da família e estava perdida.',
    results: 'A Haast não só estruturou o digital, como me ENSINOU a entender as métricas. Hoje eu sei o que é CPL, taxa de conversão, ROI, show rate.',
    highlight: 'Resultado: Faturamento das 3 unidades cresceu 67% em 8 meses. Abri a 4ª unidade mês passado.',
    conclusion: 'Sem a Haast, eu ainda estaria "postando no Instagram e torcendo".',
    color: 'from-orange-500 to-orange-600',
  },
];

export function DepoimentosSection() {
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
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-gray-dark/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 shadow-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              O que clientes dizem{' '}
              <span className="gradient-text">(Depoimentos Reais)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Palavras de quem vive o resultado. Sem filtros, sem exageros. 
              Apenas a realidade de quem confiou na Haast.
            </p>
          </div>
        </motion.div>

        {/* Depoimentos */}
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Header */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-xl flex items-center justify-center`}>
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-haast-black-graphite">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {testimonial.clinic}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-700 italic text-sm leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-haast-primary/10 to-haast-primary/5 rounded-xl p-4 border border-haast-primary/20">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-haast-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-haast-black-graphite font-semibold mb-2">Resultados:</h4>
                        <p className="text-gray-700 text-sm">{testimonial.results}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-50 rounded-xl p-4 border border-green-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-haast-black-graphite font-semibold mb-2">Destaque:</h4>
                        <p className="text-gray-700 text-sm">{testimonial.highlight}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-xl p-4 text-white">
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {testimonial.conclusion}
                        </p>
                      </div>
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para ser o próximo case de sucesso?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Estes depoimentos são reais. Estes resultados são possíveis. 
              <strong className="text-yellow-400"> O próximo pode ser você.</strong>
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold text-yellow-400">
                Seu depoimento pode estar aqui em 90 dias
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
