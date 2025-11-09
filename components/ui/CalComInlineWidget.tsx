'use client';

import { useEffect, useRef } from 'react';

// Declaração global para tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
  }
}

export function CalComInlineWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const handleBookingConfirmedRef = useRef<((e: any) => void) | null>(null);

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return;

    // Função para trackear confirmação de agendamento
    const trackBookingConfirmed = (bookingData?: any) => {
      // Google Analytics 4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'cal_com_booking_confirmed', {
          event_category: 'conversion',
          event_label: 'appointment_scheduled',
          value: 1,
          currency: 'BRL',
        });
      }

      // Google Tag Manager
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'cal_com_booking_confirmed',
          event_category: 'conversion',
          event_label: 'appointment_scheduled',
          booking_data: bookingData || {},
          timestamp: new Date().toISOString(),
        });
      }

      // Meta Pixel - Schedule Confirmed
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Schedule', {
          content_name: 'Reunião Estratégica Agendada',
          content_category: 'Appointment',
          value: 0,
          currency: 'BRL',
        });

        // Custom event para tracking adicional
        window.fbq('trackCustom', 'CalComBookingConfirmed', {
          booking_data: bookingData || {},
        });
      }
    };

    // Função auto-executável do Cal.com (conforme código fornecido)
    const initCalLoader = () => {
      (function (C: any, A: string, L: string) { 
        let p = function (a: any, ar: any) { (a.q as any[]).push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api: any = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            (api as any).q = (api as any).q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
    };

    const initializeCalCom = () => {
      if (!containerRef.current || initializedRef.current) return;
      if (!(window as any).Cal) {
        // Aguardar Cal estar disponível
        setTimeout(initializeCalCom, 100);
        return;
      }
      
      try {
        // Inicializar conforme código fornecido
        (window as any).Cal("init", "diagnosticogratuito", {origin:"https://app.cal.com"});
        
        (window as any).Cal.ns.diagnosticogratuito("inline", {
          elementOrSelector: containerRef.current,
          config: {"layout":"week_view"},
          calLink: "erickhaast/diagnosticogratuito",
        });

        (window as any).Cal.ns.diagnosticogratuito("ui", {
          "cssVarsPerTheme":{
            "light":{
              "cal-brand":"#171515"
            },
            "dark":{
              "cal-brand":"#0bfbf4"
            }
          },
          "hideEventTypeDetails":true,
          "layout":"week_view"
        });

        // Adicionar listeners para eventos do Cal.com
        try {
          // Listener para quando o booking é confirmado
          handleBookingConfirmedRef.current = (e: any) => {
            trackBookingConfirmed(e.detail || {});
          };

          // Escutar eventos do Cal.com
          if (containerRef.current && handleBookingConfirmedRef.current) {
            containerRef.current.addEventListener('bookingSuccessful', handleBookingConfirmedRef.current);
            containerRef.current.addEventListener('bookingConfirmed', handleBookingConfirmedRef.current);
            
            // Também tentar escutar eventos globais do Cal.com
            if ((window as any).Cal && (window as any).Cal.ns && (window as any).Cal.ns.diagnosticogratuito) {
              // O Cal.com pode disparar eventos customizados
              document.addEventListener('cal:bookingSuccessful', handleBookingConfirmedRef.current);
              document.addEventListener('cal:bookingConfirmed', handleBookingConfirmedRef.current);
            }
          }
        } catch (error) {
          console.warn('Erro ao adicionar listeners do Cal.com:', error);
        }

        initializedRef.current = true;
      } catch (error) {
        console.error('Erro ao inicializar Cal.com:', error);
      }
    };

    // Inicializar loader do Cal.com apenas quando o componente estiver visível
    let fallbackTimer: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          initCalLoader();
          // Aguardar um pouco e inicializar
          setTimeout(() => {
            initializeCalCom();
          }, 200);
          observer.disconnect();
          if (fallbackTimer) clearTimeout(fallbackTimer);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Fallback: inicializar após 1s se não houver intersection
    fallbackTimer = setTimeout(() => {
      if (!initializedRef.current) {
        initCalLoader();
        setTimeout(() => {
          initializeCalCom();
        }, 200);
      }
      observer.disconnect();
    }, 1000);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
      const containerElement = containerRef.current;
      
      // Remover event listeners (usar a referência do handleBookingConfirmed se disponível)
      if (containerElement && handleBookingConfirmedRef.current) {
        containerElement.removeEventListener('bookingSuccessful', handleBookingConfirmedRef.current);
        containerElement.removeEventListener('bookingConfirmed', handleBookingConfirmedRef.current);
        document.removeEventListener('cal:bookingSuccessful', handleBookingConfirmedRef.current);
        document.removeEventListener('cal:bookingConfirmed', handleBookingConfirmedRef.current);
      }
      
      if (initializedRef.current && (window as any).Cal && containerElement) {
        try {
          if ((window as any).Cal.ns && (window as any).Cal.ns.diagnosticogratuito) {
            (window as any).Cal.ns.diagnosticogratuito("destroy", containerElement);
          }
        } catch (e) {
          // Ignorar erros de cleanup
        }
      }
    };
  }, []);

  return (
    <div
      id="my-cal-inline-diagnosticogratuito"
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '600px',
        overflow: 'scroll',
      }}
      className="cal-com-inline-widget"
    />
  );
}

