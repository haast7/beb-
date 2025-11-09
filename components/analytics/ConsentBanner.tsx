'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { X, Settings, Shield } from 'lucide-react';
import { 
  getSavedConsent, 
  saveConsent, 
  applyAllConsent, 
  isConsentValid,
  clearNonEssentialCookies,
  type CookieConsent 
} from '@/lib/cookies';

export function ConsentBanner() {
  const pathname = usePathname();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<Omit<CookieConsent, 'timestamp' | 'version'>>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Não mostrar banner na página /lead
    if (pathname === '/lead') {
      return;
    }

    const savedConsent = getSavedConsent();
    
    if (!savedConsent || !isConsentValid(savedConsent)) {
      setShowBanner(true);
    } else {
      setPreferences({
        necessary: savedConsent.necessary,
        analytics: savedConsent.analytics,
        marketing: savedConsent.marketing,
      });
      applyAllConsent(savedConsent);
    }
  }, [pathname]);

  const applyConsent = (consent: Omit<CookieConsent, 'timestamp' | 'version'>) => {
    const fullConsent: CookieConsent = {
      ...consent,
      timestamp: Date.now(),
      version: '1.0',
    };
    
    saveConsent(consent);
    applyAllConsent(fullConsent);
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPreferences);
    applyConsent(newPreferences);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(newPreferences);
    applyConsent(newPreferences);
    clearNonEssentialCookies();
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    applyConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (key: keyof Omit<CookieConsent, 'timestamp' | 'version'>) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Não mostrar banner na página /lead
  if (pathname === '/lead' || !showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-haast-gray-dark border-t border-haast-gray-medium p-4">
      <div className="container mx-auto max-w-4xl">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-haast-green mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold text-sm mb-1">
                  Respeitamos sua privacidade
                </h3>
                <p className="text-haast-gray-light text-xs">
                  Usamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdo. 
                  Você pode escolher quais tipos de cookies aceitar.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="w-full sm:w-auto"
              >
                <Settings className="h-4 w-4 mr-2" />
                Configurar
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
                className="w-full sm:w-auto"
              >
                Rejeitar
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto"
              >
                Aceitar Todos
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-bold text-sm">
                Configurações de Cookies
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-haast-gray-light hover:text-haast-green transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium text-sm">Cookies Necessários</h4>
                  <p className="text-haast-gray-light text-xs">
                    Essenciais para o funcionamento básico do site
                  </p>
                </div>
                <div className="bg-haast-gray-medium rounded-full px-3 py-1 text-xs text-haast-gray-light">
                  Sempre Ativo
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium text-sm">Cookies Analíticos</h4>
                  <p className="text-haast-gray-light text-xs">
                    Nos ajudam a entender como você usa o site
                  </p>
                </div>
                <button
                  onClick={() => handlePreferenceChange('analytics')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.analytics ? 'bg-haast-green' : 'bg-haast-gray-medium'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium text-sm">Cookies de Marketing</h4>
                  <p className="text-haast-gray-light text-xs">
                    Usados para personalizar anúncios e medir eficácia
                  </p>
                </div>
                <button
                  onClick={() => handlePreferenceChange('marketing')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.marketing ? 'bg-haast-green' : 'bg-haast-gray-medium'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
            
            <div className="flex space-x-3 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
                className="flex-1"
              >
                Rejeitar Todos
              </Button>
              <Button
                size="sm"
                onClick={handleSaveSettings}
                className="flex-1"
              >
                Salvar Preferências
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
