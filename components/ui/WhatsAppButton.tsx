'use client';

import { Button } from '@/components/ui/Button';
import { trackWhatsAppClick, trackWhatsAppButtonInteraction } from '@/lib/analytics';
import { useLeadForm } from '@/lib/hooks/useLeadForm';
import { LeadFormModal } from '@/components/ui/LeadFormModal';

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
  variant?: 'default' | 'secondary' | 'outline' | 'outline-dark' | 'conversion-green' | 'ghost' | 'destructive';
  source?: string;
  message?: string;
  useForm?: boolean; // Nova prop para controlar se usa formulário ou WhatsApp direto
}

export function WhatsAppButton({ 
  children, 
  className, 
  size = 'default',
  variant = 'default',
  source = 'button',
  message = 'Olá! Gostaria de saber mais sobre o Plano Captação 3K da Haast.',
  useForm = true // Por padrão, usa o formulário
}: WhatsAppButtonProps) {
  const { isOpen, openForm, closeForm } = useLeadForm();

  const handleClick = () => {
    trackWhatsAppClick(source, {
      button_text: typeof children === 'string' ? children : 'WhatsApp Button',
      message_preview: message.substring(0, 50) + '...',
    });

    if (useForm) {
      openForm(source, message);
    } else {
      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511914423606';
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const handleMouseEnter = () => {
    trackWhatsAppButtonInteraction(source, 'hover', {
      button_text: typeof children === 'string' ? children : 'WhatsApp Button',
    });
  };

  return (
    <>
      <Button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        className={className}
        size={size}
        variant={variant}
      >
        {children}
      </Button>
      
      <LeadFormModal
        isOpen={isOpen}
        onClose={closeForm}
        source={source}
        initialMessage={message}
      />
    </>
  );
}
