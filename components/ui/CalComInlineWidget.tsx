'use client';

import { useEffect, useRef } from 'react';

export function CalComInlineWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return;

    // Função auto-executável do Cal.com (conforme código fornecido)
    const initCalLoader = () => {
      (function (C: any, A: string, L: string) { 
        let p = function (a: any, ar: any) { a.q.push(ar); }; 
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
            const api = function () { p(api, arguments); }; 
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
      if (!containerRef.current || initializedRef.current) return;
      if (!(window as any).Cal) {
        // Aguardar Cal estar disponível
        setTimeout(initializeCalCom, 100);
        return;
      }
      
      try {
        // Inicializar conforme código fornecido
        (window as any).Cal("init", "35min", {origin:"https://app.cal.com"});
        
        (window as any).Cal.ns["35min"]("inline", {
          elementOrSelector: containerRef.current,
          config: {"layout":"month_view"},
          calLink: "erickhaast/35min",
        });

        (window as any).Cal.ns["35min"]("ui", {
          "cssVarsPerTheme":{
            "light":{
              "cal-brand":"#23051d"
            }
          },
          "hideEventTypeDetails":true,
          "layout":"month_view"
        });

        initializedRef.current = true;
      } catch (error) {
        console.error('Erro ao inicializar Cal.com:', error);
      }
    };

    // Inicializar loader do Cal.com
    initCalLoader();
    
    // Aguardar um pouco e inicializar
    const timer = setTimeout(() => {
      initializeCalCom();
    }, 200);

    return () => {
      clearTimeout(timer);
      if (initializedRef.current && (window as any).Cal && containerRef.current) {
        try {
          if ((window as any).Cal.ns && (window as any).Cal.ns["35min"]) {
            (window as any).Cal.ns["35min"]("destroy", containerRef.current);
          }
        } catch (e) {
          // Ignorar erros de cleanup
        }
      }
    };
  }, []);

  return (
    <div
      id="my-cal-inline-35min"
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '600px',
        overflow: 'auto',
      }}
      className="cal-com-inline-widget"
    />
  );
}

