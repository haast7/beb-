'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, CheckCircle, AlertCircle } from 'lucide-react';

const schedules = [
  {
    day: 'Segunda a Sexta',
    hours: '9h às 18h',
    status: 'Disponível',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    day: 'Sábado',
    hours: '9h às 12h',
    status: 'Horário Reduzido',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
  {
    day: 'Domingo',
    hours: 'Fechado',
    status: 'Indisponível',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
];

const responseTimes = [
  {
    channel: 'WhatsApp',
    time: 'Até 2h úteis',
    icon: Zap,
    color: 'from-green-500 to-green-600',
  },
  {
    channel: 'E-mail',
    time: 'Até 2h úteis',
    icon: Clock,
    color: 'from-blue-500 to-blue-600',
  },
  {
    channel: 'Formulário',
    time: 'Até 4h úteis',
    icon: CheckCircle,
    color: 'from-purple-500 to-purple-600',
  },
];

export function HorariosAtendimentoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-primary-dark/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-haast-primary/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              Horários de{' '}
              <span className="gradient-text">Atendimento</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Conheça nossos horários de funcionamento e tempo de resposta.
            </p>
          </div>
        </motion.div>

        {/* Horários de Funcionamento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-haast-black-graphite mb-8 text-center">
            Horários de Funcionamento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schedules.map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${schedule.bgColor} ${schedule.borderColor} border-2 rounded-2xl p-6 text-center`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-haast-primary to-haast-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-haast-black-graphite mb-2">
                  {schedule.day}
                </h4>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  {schedule.hours}
                </p>
                <div className={`inline-flex items-center space-x-2 ${schedule.color}`}>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                  <span className="text-sm font-semibold">{schedule.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tempos de Resposta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-haast-black-graphite mb-8 text-center">
            Tempo de Resposta
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {responseTimes.map((response, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${response.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <response.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-haast-black-graphite mb-2">
                  {response.channel}
                </h4>
                <p className="text-lg font-semibold text-gray-700">
                  {response.time}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nota Importante */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-500/20">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
              <h4 className="text-lg font-bold text-haast-black-graphite">
                Importante
              </h4>
            </div>
            <p className="text-gray-700">
              Todos os horários são baseados no horário de Brasília (GMT-3). 
              Para emergências fora do horário comercial, utilize o WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


