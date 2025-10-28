'use client';

import { trackWhatsAppClick, trackWhatsAppButtonInteraction } from '@/lib/analytics';
import { useLeadForm } from '@/lib/hooks/useLeadForm';
import { LeadFormModal } from '@/components/ui/LeadFormModal';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface FixedWhatsAppButtonProps {
  message?: string;
  source?: string;
}

export function FixedWhatsAppButton({ 
  message = 'Olá! Gostaria de saber mais sobre os serviços da Haast.',
  source = 'fixed_button'
}: FixedWhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, openForm, closeForm } = useLeadForm();

  useEffect(() => {
    // Mostra o botão após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    trackWhatsAppClick(source, {
      button_type: 'fixed_floating',
      message_preview: message.substring(0, 50) + '...',
      visibility_duration: Date.now() - (isVisible ? 3000 : 0),
    });
    openForm(source, message);
  };

  const handleMouseEnter = () => {
    trackWhatsAppButtonInteraction(source, 'hover', {
      button_type: 'fixed_floating',
    });
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          className="group relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
          aria-label="Falar no WhatsApp"
          title="Falar no WhatsApp"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
              priority
            />
          </div>
          
          {/* Efeito de pulso */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Falar no WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </button>
      </div>
      
      <LeadFormModal
        isOpen={isOpen}
        onClose={closeForm}
        source={source}
        initialMessage={message}
      />
    </>
  );
}
