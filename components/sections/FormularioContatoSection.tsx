'use client';

import { motion } from 'framer-motion';
import { Send, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const formFields = [
  {
    name: 'nome',
    label: 'Nome Completo',
    type: 'text',
    required: true,
    placeholder: 'Digite seu nome completo',
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    required: true,
    placeholder: 'seu@email.com',
  },
  {
    name: 'telefone',
    label: 'Telefone/WhatsApp',
    type: 'tel',
    required: true,
    placeholder: '(77) 99999-9999',
  },
  {
    name: 'clinica',
    label: 'Instagram da Clínica',
    type: 'text',
    required: true,
    placeholder: '@sua_clinica',
  },
  {
    name: 'especialidade',
    label: 'Especialidade',
    type: 'text',
    required: false,
    placeholder: 'Ex: Odontologia, Medicina, Fisioterapia...',
  },
  {
    name: 'cidade',
    label: 'Cidade/Estado',
    type: 'text',
    required: true,
    placeholder: 'Ex: Vitória da Conquista/BA',
  },
];

const services = [
  'Tráfego Pago & Performance',
  'SEO & Presença Orgânica',
  'Desenvolvimento Web & Apps',
  'Automação & Integrações',
  'Identidade Visual & Branding',
  'Consultoria & Treinamento',
  'Compliance & Segurança',
  'Analytics & Business Intelligence',
  'Projetos Complexos',
];

export function FormularioContatoSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    clinica: '',
    especialidade: '',
    cidade: '',
    servicos: [] as string[],
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicos: prev.servicos.includes(service)
        ? prev.servicos.filter(s => s !== service)
        : [...prev.servicos, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-haast-black-graphite">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-white max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Mensagem Enviada com Sucesso!
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Obrigado pelo seu interesse! Nossa equipe entrará em contato em até 2h úteis.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Enviar Nova Mensagem
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

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
          <div className="bg-gradient-to-r from-haast-primary/10 to-haast-primary-dark/10 rounded-2xl p-8 md:p-12 mx-4 md:mx-0 border border-haast-primary/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-haast-black-graphite mb-6">
              Formulário de{' '}
              <span className="gradient-text">Contato</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Preencha o formulário abaixo e receba uma proposta personalizada para sua clínica.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
            {/* Campos Básicos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {formFields.map((field) => (
                <div key={field.name} className={field.name === 'especialidade' ? 'md:col-span-2' : ''}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData] as string}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-haast-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Serviços de Interesse */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Serviços de Interesse
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {services.map((service) => (
                  <label key={service} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.servicos.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="w-4 h-4 text-haast-primary border-gray-300 rounded focus:ring-haast-primary"
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Mensagem */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mensagem Adicional
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                placeholder="Conte-nos mais sobre sua clínica e objetivos..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-haast-primary focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Botão de Envio */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-haast-primary to-haast-primary-dark text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
