'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function FixedCalComButton() {
  const initializedRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    // Se estiver na página /lead, remover o botão se existir
    if (pathname === '/lead') {
      // Tentar remover o botão flutuante do Cal.com se existir
      const removeCalButton = () => {
        try {
          // Procurar por diferentes seletores que o Cal.com pode usar
          const selectors = [
            '[data-cal-namespace="diagnosticogratuito"]',
            '[data-cal-link="erickhaast/diagnosticogratuito"]',
            'iframe[src*="cal.com"]',
            '.cal-floating-button',
            '#cal-floating-button',
          ];
          
          selectors.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
              element.remove();
            }
          });

          // Tentar destruir via API do Cal.com
          if ((window as any).Cal && (window as any).Cal.ns && (window as any).Cal.ns.diagnosticogratuito) {
            try {
              (window as any).Cal.ns.diagnosticogratuito("destroy");
            } catch (e) {
              // Ignorar erros
            }
          }
        } catch (e) {
          // Ignorar erros
        }
      };

      // Remover imediatamente
      removeCalButton();
      
      // Remover após um pequeno delay para garantir que o DOM foi atualizado
      const timeout = setTimeout(removeCalButton, 100);
      
      return () => {
        clearTimeout(timeout);
      };
    }

    if (initializedRef.current) return;

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
            api.q = api.q || []; 
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
      if (initializedRef.current) return;
      if (!(window as any).Cal) {
        // Aguardar Cal estar disponível
        setTimeout(initializeCalCom, 100);
        return;
      }
      
      try {
        // Inicializar conforme código fornecido
        (window as any).Cal("init", "diagnosticogratuito", {origin:"https://app.cal.com"});
        
        (window as any).Cal.ns.diagnosticogratuito("floatingButton", {
          "calLink": "erickhaast/diagnosticogratuito",
          "config": {"layout":"month_view"},
          "buttonText": "Agendar Reunião",
          "buttonColor": "#0bfbf4",
          "buttonTextColor": "#000000"
        });

        (window as any).Cal.ns.diagnosticogratuito("ui", {
          "cssVarsPerTheme":{
            "light":{"cal-brand":"#171515"},
            "dark":{"cal-brand":"#0bfbf4"}
          },
          "hideEventTypeDetails":true,
          "layout":"month_view"
        });

        initializedRef.current = true;
      } catch (error) {
        console.error('Erro ao inicializar Cal.com floating button:', error);
      }
    };

    // Inicializar loader do Cal.com
    initCalLoader();
    
    // Aguardar interação do usuário ou delay para não bloquear renderização inicial
    const initOnInteraction = () => {
      if (initializedRef.current) return;
      initializeCalCom();
    };

    // Inicializar após interação do usuário ou após 3 segundos (não bloqueia LCP)
    const timer = setTimeout(() => {
      if (document.readyState === 'complete') {
        initializeCalCom();
      } else {
        window.addEventListener('load', initializeCalCom, { once: true });
      }
    }, 3000);

    // Inicializar em interações do usuário
    ['mousedown', 'touchstart', 'keydown'].forEach(event => {
      document.addEventListener(event, initOnInteraction, { once: true, passive: true });
    });

    return () => {
      clearTimeout(timer);
      // Limpar event listeners
      ['mousedown', 'touchstart', 'keydown'].forEach(event => {
        document.removeEventListener(event, initOnInteraction);
      });
    };
  }, [pathname]);

  // O Cal.com cria o botão flutuante automaticamente, então não precisamos retornar JSX
  return null;
}

