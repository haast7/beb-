// Utilitários para gerenciamento de cookies e LGPD

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
  version: string;
}

export const COOKIE_VERSION = '1.0';
export const CONSENT_KEY = 'haast_consent';

// Função para obter consentimento salvo
export function getSavedConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) return null;
    
    const consent = JSON.parse(saved);
    
    // Verificar se a versão é compatível
    if (consent.version !== COOKIE_VERSION) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    
    return consent;
  } catch (error) {
    console.error('Erro ao carregar consentimento:', error);
    return null;
  }
}

// Função para salvar consentimento
export function saveConsent(consent: Omit<CookieConsent, 'timestamp' | 'version'>): void {
  if (typeof window === 'undefined') return;
  
  const fullConsent: CookieConsent = {
    ...consent,
    timestamp: Date.now(),
    version: COOKIE_VERSION,
  };
  
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(fullConsent));
  } catch (error) {
    console.error('Erro ao salvar consentimento:', error);
  }
}

// Função para aplicar consentimento no Google Analytics
export function applyGoogleConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('consent', 'update', {
    ad_storage: consent.marketing ? 'granted' : 'denied',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied',
    functionality_storage: 'granted',
    personalization_storage: consent.marketing ? 'granted' : 'denied',
    security_storage: 'granted',
  });
}

// Função para aplicar consentimento no Meta Pixel
export function applyMetaConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  
  if (consent.marketing) {
    window.fbq('consent', 'grant');
  } else {
    window.fbq('consent', 'revoke');
  }
}

// Função para aplicar consentimento no GTM
export function applyGTMConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  window.dataLayer.push({
    event: 'consent_update',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied',
  });
}

// Função para aplicar consentimento em todas as plataformas
export function applyAllConsent(consent: CookieConsent): void {
  applyGoogleConsent(consent);
  applyMetaConsent(consent);
  applyGTMConsent(consent);
}

// Função para verificar se o consentimento é válido
export function isConsentValid(consent: CookieConsent | null): boolean {
  if (!consent) return false;
  
  // Verificar se não é muito antigo (1 ano)
  const oneYear = 365 * 24 * 60 * 60 * 1000;
  const isRecent = Date.now() - consent.timestamp < oneYear;
  
  return isRecent && consent.version === COOKIE_VERSION;
}

// Função para limpar todos os cookies (exceto essenciais)
export function clearNonEssentialCookies(): void {
  if (typeof window === 'undefined') return;
  
  // Lista de cookies essenciais que não devem ser removidos
  const essentialCookies = [
    'haast_consent',
    'PHPSESSID',
    'csrf_token',
  ];
  
  // Obter todos os cookies
  const cookies = document.cookie.split(';');
  
  cookies.forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim();
    
    // Remover apenas cookies não essenciais
    if (!essentialCookies.includes(cookieName)) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.haast.com.br`;
    }
  });
  
  // Limpar localStorage (exceto consentimento)
  const keysToKeep = [CONSENT_KEY];
  Object.keys(localStorage).forEach(key => {
    if (!keysToKeep.includes(key)) {
      localStorage.removeItem(key);
    }
  });
  
  // Limpar sessionStorage
  sessionStorage.clear();
}

// Função para obter informações sobre cookies ativos
export function getActiveCookies(): Array<{name: string; value: string; domain: string}> {
  if (typeof window === 'undefined') return [];
  
  const cookies: Array<{name: string; value: string; domain: string}> = [];
  
  document.cookie.split(';').forEach(cookie => {
    const [name, value] = cookie.split('=');
    if (name && value) {
      cookies.push({
        name: name.trim(),
        value: value.trim(),
        domain: window.location.hostname,
      });
    }
  });
  
  return cookies;
}

// Declaração global para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
  }
}
