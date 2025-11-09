'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Check, Building2, User, Mail, Phone, DollarSign, TrendingUp, Calendar } from 'lucide-react';
import { trackFormSubmit, trackEvent, trackMetaLead, trackMetaCompleteRegistration } from '@/lib/analytics';
import { sendWebhook, formatBrazilianDateTime, getLeadSource, getFormType, mapCompanySize } from '@/lib/webhook';

// Lazy load do Cal.com widget - só carrega quando necessário
const CalComInlineWidget = lazy(() => import('@/components/ui/CalComInlineWidget').then(mod => ({ default: mod.CalComInlineWidget })));

interface LeadFormData {
  // Etapa 1
  trabalhaEmLabClinicaHospital: string; // "Sim" ou "Não"
  fullName: string; // Nome completo (nome e sobrenome)
  phone: string;
  email: string;
  companyHandle: string;
  
  // Etapa 2
  company: string;
  position: string;
  segment: string;
  customSegment: string;
  monthlyRevenue: string;
}

const segments = [
  'Clínica Médica',
  'Laboratório de Análises',
  'Clínica Odontológica',
  'Clínica Veterinária',
  'Hospital',
  'Farmácia',
  'Clínica de Estética',
  'Centro de Diagnóstico',
  'Outro'
];

const revenueRanges = [
  'Até R$ 50k',
  'R$ 50k - R$ 100k',
  'R$ 101k - R$ 500k',
  'R$ 501k - R$ 1MM',
  'R$ 1MM - R$ 10MM',
  'Acima de R$ 10MM'
];

export function LeadFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showCalCom, setShowCalCom] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<LeadFormData>({
    trabalhaEmLabClinicaHospital: '',
    fullName: '',
    phone: '',
    email: '',
    companyHandle: '',
    company: '',
    position: '',
    segment: '',
    customSegment: '',
    monthlyRevenue: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<LeadFormData>>({});

  // Get source from URL params or default
  const [source, setSource] = useState('lead_page');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlSource = params.get('source') || 'lead_page';
      setSource(urlSource);
    }
  }, []);

  const validateStep1 = () => {
    const newErrors: Partial<LeadFormData> = {};
    
    if (!formData.trabalhaEmLabClinicaHospital) {
      newErrors.trabalhaEmLabClinicaHospital = 'Por favor, selecione uma opção';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<LeadFormData> = {};
    
    // Validar apenas campos pessoais
    if (!formData.fullName.trim()) newErrors.fullName = 'Nome e Sobrenome é obrigatório';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    if (!formData.companyHandle.trim()) newErrors.companyHandle = '@ da empresa é obrigatório';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\d\s\(\)\-\+]+$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Telefone inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      // Sempre vai para etapa 2, independente de "Sim" ou "Não"
      setCurrentStep(2);
      
      // Google Analytics 4
      trackEvent('form_step_completed', {
        event_category: 'conversion',
        event_label: 'step_1',
        form_source: source,
        step: 1
      });

      // Google Tag Manager
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'form_step_completed',
          form_step: 1,
          form_source: source,
          timestamp: new Date().toISOString(),
        });
      }
    } else if (currentStep === 2 && validateStep2()) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Google Analytics 4 - Form Submit
      trackFormSubmit('lead_form', true);
      trackEvent('form_submit', {
        event_category: 'conversion',
        event_label: 'lead_form_complete',
        form_source: source,
        form_data: {
          segment: formData.segment === 'Outro' ? formData.customSegment : formData.segment,
          original_segment: formData.segment,
          custom_segment: formData.customSegment,
          monthly_revenue: formData.monthlyRevenue,
          company_size: formData.company.length > 0 ? 'provided' : 'not_provided'
        }
      });

      // Google Tag Manager - DataLayer
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'lead_form_submit',
          form_name: 'lead_form',
          form_source: source,
          form_step: currentStep,
          lead_data: {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            company_handle: formData.companyHandle,
            segment: formData.segment === 'Outro' ? formData.customSegment : formData.segment,
            monthly_revenue: formData.monthlyRevenue,
          },
          timestamp: new Date().toISOString(),
        });
      }

      // Meta Pixel - Lead Event (quando o lead é gerado)
      trackMetaLead(0, 'BRL');
      
      // Meta Pixel - Complete Registration (quando o formulário é completado)
      trackMetaCompleteRegistration(0, 'BRL');
      
      // Meta Pixel - Custom Event para tracking adicional
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', 'LeadFormCompleted', {
          form_source: source,
          form_step: currentStep,
          content_name: 'Lead Form - Haast',
        });
      }

      // Preparar dados para webhook
      const now = new Date();
      const { data, hora, timestamp } = formatBrazilianDateTime(now);
      
      const webhookPayload = {
        // Dados pessoais
        nome: formData.fullName,
        email: formData.email,
        whatsapp: formData.phone,
        site: formData.companyHandle,
        
        // Dados da empresa
        segmento: formData.segment === 'Outro' ? formData.customSegment : formData.segment,
        tamanhoEmpresa: mapCompanySize(formData.monthlyRevenue),
        
        // Dados de agendamento (opcional - pode ser implementado futuramente)
        dataAgendamento: data,
        horarioAgendamento: hora,
        
        // Dados de tracking
        nomeFormulario: 'Formulário de Lead Haast',
        carimboDataHora: timestamp,
        agenteUsuario: typeof window !== 'undefined' ? window.navigator.userAgent : 'N/A',
        referenciador: typeof window !== 'undefined' ? document.referrer : 'N/A',
        fonteLeads: getLeadSource(source),
        fonte: getLeadSource(source),
        tipoFormulario: getFormType(source),
        
        // Dados adicionais
        cargo: formData.position || '',
        empresa: formData.company || '',
        faturamentoMensal: formData.monthlyRevenue || '',
        segmentoPersonalizado: formData.segment === 'Outro' ? formData.customSegment : undefined
      };

      // Debug: Log dos dados que serão enviados
      console.log('Webhook payload:', webhookPayload);
      console.log('Cargo específico:', formData.position);

      // Enviar webhook
      const webhookSuccess = await sendWebhook(webhookPayload);
      
      if (!webhookSuccess) {
        console.warn('Webhook falhou, mas formulário foi processado');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Move to success step
      setCurrentStep(3);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      trackFormSubmit('lead_form', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    
    // Debug: Log quando o cargo é alterado
    if (field === 'position') {
      console.log('Cargo alterado para:', value);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-haast-primary to-haast-primary-dark p-6 text-white relative">
        {mounted && (currentStep === 1 || currentStep === 2 || currentStep === 3) ? (
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center overflow-hidden shadow-lg relative">
              <Image 
                src="/deyvisson.jpg" 
                alt="Deyvisson Moitinho" 
                fill
                sizes="64px"
                className="object-cover"
                priority
                quality={85}
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Deyvisson Moitinho</h2>
              <p className="text-white/90 text-sm">Especialista Haast</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Haast Marketing</h2>
              <p className="text-white/90">Etapa {currentStep} de 3</p>
            </div>
          </div>
        )}
        
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-white/20 rounded-full h-2">
          <div
            className="bg-white rounded-full h-2 transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 max-h-[60vh] overflow-y-auto">
        {currentStep === 1 && (
          <div key="step1" className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-haast-black-graphite mb-2">
                Vamos personalizar seu diagnóstico 🚀
                </h3>
                <p className="text-gray-600 text-lg">
                Antes de começar, me conta:
                </p>
              </div>

              <div className="space-y-4">
                <label className="block text-base font-semibold text-haast-black-graphite mb-4">
                Você atua em uma clínica, laboratório ou hospital?
                </label>
                
                <div className="space-y-3">
                  <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.trabalhaEmLabClinicaHospital === 'Sim' 
                      ? 'border-haast-primary bg-haast-primary/5' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <input
                      type="radio"
                      name="trabalhaEmLabClinicaHospital"
                      value="Sim"
                      checked={formData.trabalhaEmLabClinicaHospital === 'Sim'}
                      onChange={(e) => handleInputChange('trabalhaEmLabClinicaHospital', e.target.value)}
                      className="w-5 h-5 text-haast-primary focus:ring-haast-primary focus:ring-2"
                    />
                    <span className="ml-3 text-gray-700 font-medium">Sim</span>
                  </label>

                  <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.trabalhaEmLabClinicaHospital === 'Não' 
                      ? 'border-haast-primary bg-haast-primary/5' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <input
                      type="radio"
                      name="trabalhaEmLabClinicaHospital"
                      value="Não"
                      checked={formData.trabalhaEmLabClinicaHospital === 'Não'}
                      onChange={(e) => handleInputChange('trabalhaEmLabClinicaHospital', e.target.value)}
                      className="w-5 h-5 text-haast-primary focus:ring-haast-primary focus:ring-2"
                    />
                    <span className="ml-3 text-gray-700 font-medium">Não</span>
                  </label>
                </div>

                {errors.trabalhaEmLabClinicaHospital && (
                  <p className="text-red-500 text-sm mt-1">{errors.trabalhaEmLabClinicaHospital}</p>
                )}
              </div>
          </div>
        )}

        {currentStep === 2 && (
          <div key="step2" className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-haast-black-graphite mb-2">
                Quase lá!
                </h3>
                <p className="text-gray-600">
                Só preciso de algumas informações rápidas pra agendar seu diagnóstico 📲
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome e Sobrenome *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-haast-primary focus:border-transparent transition-all ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-2" />
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-haast-primary focus:border-transparent transition-all ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="(11) 99999-9999"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-2" />
                  E-mail *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-haast-primary focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building2 className="inline h-4 w-4 mr-2" />
                  @ da empresa *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">@</span>
                  <input
                    type="text"
                    value={formData.companyHandle}
                    onChange={(e) => handleInputChange('companyHandle', e.target.value)}
                    className={`w-full pl-8 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-haast-primary focus:border-transparent transition-all ${
                      errors.companyHandle ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="nome_da_empresa"
                  />
                </div>
                {errors.companyHandle && (
                  <p className="text-red-500 text-sm mt-1">{errors.companyHandle}</p>
                )}
              </div>
          </div>
        )}

        {currentStep === 3 && (
          <div key="step3" className="text-center py-12 animate-fadeIn">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-12 w-12 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-haast-black-graphite mb-4">
                🎉 Perfeito! Recebemos seus dados!
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                {!showCalCom ? (
                  <>
                    Agende agora mesmo uma conversa estratégica ou nossa equipe entrará em contato em até <strong>15 minutos úteis</strong>.
                  </>
                ) : (
                  <>
                    Escolha o melhor horário para sua reunião estratégica de <strong>35 minutos</strong>.
                  </>
                )}
              </p>

              {!showCalCom ? (
                <div className="mb-8">
                  <button
                    onClick={() => {
                      setShowCalCom(true);
                      
                      // Google Analytics 4 - Cal.com Open
                      trackEvent('cal_com_open', {
                        event_category: 'conversion',
                        event_label: 'cal_com_button_click',
                        form_source: source,
                        form_step: 'success',
                        button_location: 'step_3',
                      });

                      // Google Tag Manager - DataLayer
                      if (typeof window !== 'undefined' && window.dataLayer) {
                        window.dataLayer.push({
                          event: 'cal_com_open',
                          form_source: source,
                          form_step: 'success',
                          button_location: 'step_3',
                          timestamp: new Date().toISOString(),
                        });
                      }

                      // Meta Pixel - Schedule Event
                      if (typeof window !== 'undefined' && window.fbq) {
                        window.fbq('track', 'Schedule', {
                          content_name: 'Agendar Reunião Estratégica',
                          content_category: 'Appointment',
                        });
                        
                        // Custom event para tracking adicional
                        window.fbq('trackCustom', 'CalComOpened', {
                          form_source: source,
                          form_step: 'success',
                        });
                      }
                    }}
                    className="w-full md:w-auto mx-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-haast-primary to-haast-primary-dark hover:from-haast-primary-dark hover:to-haast-primary text-white font-bold py-4 px-6 md:px-8 rounded-xl transition-all duration-300 hover:scale-100 md:hover:scale-105 hover:shadow-lg shadow-md"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>📅 Agendar Reunião Estratégica</span>
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-4 md:p-6 mb-8 border border-gray-200 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-haast-black-graphite">
                      📅 Agende sua reunião estratégica
                    </h4>
                    <button
                      onClick={() => {
                        setShowCalCom(false);
                        
                        // Track quando fecha o calendário
                        trackEvent('cal_com_close', {
                          event_category: 'engagement',
                          event_label: 'cal_com_closed',
                          form_source: source,
                        });
                      }}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="Fechar calendário"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="w-full">
                    <Suspense fallback={
                      <div className="w-full h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <div className="w-8 h-8 border-4 border-haast-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                          <p className="text-gray-600 text-sm">Carregando calendário...</p>
                        </div>
                      </div>
                    }>
                      <CalComInlineWidget />
                    </Suspense>
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-r from-haast-primary/10 to-haast-primary-dark/10 rounded-2xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-haast-black-graphite mb-4">
                  O que acontece agora?
                </h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-haast-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <span className="text-gray-700">Análise do seu perfil e segmento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-haast-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <span className="text-gray-700">Preparação de diagnóstico personalizado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-haast-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <span className="text-gray-700">Agendamento de reunião estratégica</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Enquanto isso, que tal nos seguir nas redes sociais?</strong>
                </p>
                <div className="flex justify-center space-x-4">
                  {/* Instagram */}
                  <button
                    onClick={() => window.open('https://instagram.com/haastmarketing', '_blank')}
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Seguir no Instagram"
                    title="Seguir no Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </button>

                  {/* LinkedIn */}
                  <button
                    onClick={() => window.open('https://linkedin.com/company/haastoficial', '_blank')}
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Seguir no LinkedIn"
                    title="Seguir no LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>

                  {/* WhatsApp */}
                  <button
                    onClick={() => {
                      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511914423606';
                      window.open(`https://wa.me/${whatsappNumber}?text=Olá! Preenchi o formulário e gostaria de conversar sobre os próximos passos.`, '_blank');
                    }}
                    className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Falar no WhatsApp"
                    title="Falar no WhatsApp"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </button>
                </div>
              </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {currentStep < 3 && (
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Voltar</span>
          </button>

          <button
            onClick={handleNext}
            disabled={isSubmitting}
            className="flex items-center space-x-2 bg-haast-primary hover:bg-haast-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <span>{currentStep === 2 ? 'Finalizar' : 'Continuar'}</span>
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

