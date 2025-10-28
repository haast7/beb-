'use client';

import { ExternalLink } from 'lucide-react';
import { trackWhatsAppClick, trackWhatsAppButtonInteraction } from '@/lib/analytics';
import { useLeadForm } from '@/lib/hooks/useLeadForm';
import { LeadFormModal } from '@/components/ui/LeadFormModal';

interface PortfolioCTAButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  message?: string;
  source?: string;
  useForm?: boolean;
}

export function PortfolioCTAButton({ 
  href,
  children, 
  className = "inline-flex items-center justify-center bg-haast-green hover:bg-haast-green-success text-haast-black-graphite font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-haast-glow",
  message = 'Olá! Vi o portfólio da Haast e quero ser o próximo caso de sucesso!',
  source = 'portfolio',
  useForm = true
}: PortfolioCTAButtonProps) {
  const { isOpen, openForm, closeForm } = useLeadForm();

  const handleClick = () => {
    trackWhatsAppClick(source, {
      button_text: typeof children === 'string' ? children : 'Portfolio CTA',
      message_preview: message.substring(0, 50) + '...',
    });

    if (useForm) {
      openForm(source, message);
    } else if (href) {
      window.open(href, '_blank');
    }
  };

  const handleMouseEnter = () => {
    trackWhatsAppButtonInteraction(source, 'hover', {
      button_text: typeof children === 'string' ? children : 'Portfolio CTA',
    });
  };

  return (
    <>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        className={className}
      >
        {children}
        <ExternalLink className="ml-2 h-5 w-5" />
      </button>
      
      <LeadFormModal
        isOpen={isOpen}
        onClose={closeForm}
        source={source}
        initialMessage={message}
      />
    </>
  );
}
