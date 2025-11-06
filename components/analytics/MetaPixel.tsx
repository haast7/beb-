'use client';

import Script from 'next/script';

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '24928923856775541';
const META_PIXEL_ID_2 = '24928923856775541'; // Segundo pixel
const META_PIXEL_ID_3 = '1165825704980714'; // Terceiro pixel

export function MetaPixel() {
  return (
    <>
      {/* Carregar script do Facebook apenas uma vez e inicializar todos os pixels */}
      <Script
        id="meta-pixel-loader"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            // Aguardar script carregar e inicializar todos os pixels
            (function() {
              if (window.fbq) {
                // Script já carregado, inicializar pixels imediatamente
                window.fbq('init', '${META_PIXEL_ID}');
                window.fbq('track', 'PageView', {}, {eventID: 'pixel1_' + Date.now()});
                
                window.fbq('init', '${META_PIXEL_ID_2}');
                window.fbq('track', 'PageView', {}, {eventID: 'pixel2_' + Date.now()});
                
                window.fbq('init', '${META_PIXEL_ID_3}');
                window.fbq('track', 'PageView', {}, {eventID: 'pixel3_' + Date.now()});
              } else {
                // Aguardar script carregar
                var checkFbq = setInterval(function() {
                  if (window.fbq) {
                    clearInterval(checkFbq);
                    window.fbq('init', '${META_PIXEL_ID}');
                    window.fbq('track', 'PageView', {}, {eventID: 'pixel1_' + Date.now()});
                    
                    window.fbq('init', '${META_PIXEL_ID_2}');
                    window.fbq('track', 'PageView', {}, {eventID: 'pixel2_' + Date.now()});
                    
                    window.fbq('init', '${META_PIXEL_ID_3}');
                    window.fbq('track', 'PageView', {}, {eventID: 'pixel3_' + Date.now()});
                  }
                }, 100);
                
                // Timeout de segurança após 5 segundos
                setTimeout(function() {
                  clearInterval(checkFbq);
                }, 5000);
              }
            })();
          `,
        }}
      />
      <noscript>
        <div
          style={{ 
            height: '1px', 
            width: '1px', 
            display: 'none',
            backgroundImage: `url(https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1)`
          }}
          aria-hidden="true"
        />
        <div
          style={{ 
            height: '1px', 
            width: '1px', 
            display: 'none',
            backgroundImage: `url(https://www.facebook.com/tr?id=${META_PIXEL_ID_2}&ev=PageView&noscript=1)`
          }}
          aria-hidden="true"
        />
        <div
          style={{ 
            height: '1px', 
            width: '1px', 
            display: 'none',
            backgroundImage: `url(https://www.facebook.com/tr?id=${META_PIXEL_ID_3}&ev=PageView&noscript=1)`
          }}
          aria-hidden="true"
        />
      </noscript>
    </>
  );
}
