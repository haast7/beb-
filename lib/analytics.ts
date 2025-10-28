// Declaração global para gtag e fbq
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
  }
}

export interface EventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

export function trackEvent(eventName: string, parameters?: EventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters?.event_category || 'engagement',
      event_label: parameters?.event_label,
      value: parameters?.value,
      currency: parameters?.currency || 'BRL',
      ...parameters,
    });
  }
}

export function trackConversion(eventName: string, value: number, currency = 'BRL') {
  trackEvent(eventName, {
    event_category: 'conversion',
    value,
    currency,
  });
}

export function trackEngagement(action: string, label?: string) {
  trackEvent(action, {
    event_category: 'engagement',
    event_label: label,
  });
}

export function trackPageView(pagePath: string, pageTitle: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}

export function trackScroll(depth: number) {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: `${depth}%`,
    value: depth,
  });
}

export function trackWhatsAppClick(source: string, additionalData?: Record<string, any>) {
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    event_label: source,
    button_location: source,
    click_timestamp: new Date().toISOString(),
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    page_title: typeof window !== 'undefined' ? document.title : '',
    ...additionalData,
  });
}

export function trackWhatsAppButtonInteraction(
  source: string, 
  action: 'click' | 'hover' | 'view',
  additionalData?: Record<string, any>
) {
  trackEvent('whatsapp_button_interaction', {
    event_category: 'engagement',
    event_label: `${source}_${action}`,
    button_source: source,
    interaction_type: action,
    timestamp: new Date().toISOString(),
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    ...additionalData,
  });
}

export function trackFormSubmit(formName: string, success: boolean) {
  trackEvent('form_submit', {
    event_category: 'conversion',
    event_label: formName,
    value: success ? 1 : 0,
  });
}

// Meta Pixel tracking functions
export function trackMetaEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
}

export function trackMetaLead(value?: number, currency = 'BRL') {
  trackMetaEvent('Lead', {
    value: value || 0,
    currency: currency,
  });
}

export function trackMetaCompleteRegistration(value?: number, currency = 'BRL') {
  trackMetaEvent('CompleteRegistration', {
    value: value || 0,
    currency: currency,
  });
}

export function trackMetaViewContent(contentName?: string, value?: number, currency = 'BRL') {
  trackMetaEvent('ViewContent', {
    content_name: contentName,
    value: value || 0,
    currency: currency,
  });
}

export function trackMetaInitiateCheckout(value?: number, currency = 'BRL') {
  trackMetaEvent('InitiateCheckout', {
    value: value || 0,
    currency: currency,
  });
}
