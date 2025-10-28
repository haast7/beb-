'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Settings, Shield, Trash2 } from 'lucide-react';
import { 
  getSavedConsent, 
  saveConsent, 
  applyAllConsent, 
  isConsentValid,
  clearNonEssentialCookies,
  getActiveCookies,
  type CookieConsent 
} from '@/lib/cookies';

export function CookieManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState<Omit<CookieConsent, 'timestamp' | 'version'>>({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [activeCookies, setActiveCookies] = useState<Array<{name: string; value: string; domain: string}>>([]);

  useEffect(() => {
    const savedConsent = getSavedConsent();
    if (savedConsent && isConsentValid(savedConsent)) {
      setPreferences({
        necessary: savedConsent.necessary,
        analytics: savedConsent.analytics,
        marketing: savedConsent.marketing,
      });
    }
    
    setActiveCookies(getActiveCookies());
  }, []);

  const handlePreferenceChange = (key: keyof Omit<CookieConsent, 'timestamp' | 'version'>) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    const fullConsent: CookieConsent = {
      ...preferences,
      timestamp: Date.now(),
      version: '1.0',
    };
    
    saveConsent(preferences);
    applyAllConsent(fullConsent);
    setActiveCookies(getActiveCookies());
    setIsOpen(false);
  };

  const handleClearAll = () => {
    clearNonEssentialCookies();
    setActiveCookies(getActiveCookies());
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 text-sm text-gray-600 hover:text-haast-primary transition-colors"
      >
        <Settings className="h-4 w-4" />
        <span>Configurações de Cookies</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-haast-primary" />
              <h2 className="text-xl font-bold text-gray-900">
                Gerenciar Cookies
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Settings className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Configurações de Cookies */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Preferências de Cookies
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Cookies Necessários</h4>
                    <p className="text-sm text-gray-600">
                      Essenciais para o funcionamento do site
                    </p>
                  </div>
                  <div className="bg-haast-primary text-white px-3 py-1 rounded-full text-xs">
                    Sempre Ativo
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Cookies Analíticos</h4>
                    <p className="text-sm text-gray-600">
                      Nos ajudam a entender como você usa o site
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      preferences.analytics ? 'bg-haast-primary' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Cookies de Marketing</h4>
                    <p className="text-sm text-gray-600">
                      Usados para personalizar anúncios e medir eficácia
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      preferences.marketing ? 'bg-haast-primary' : 'bg-gray-300'
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
            </div>

            {/* Cookies Ativos */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Cookies Ativos ({activeCookies.length})
              </h3>
              
              <div className="max-h-40 overflow-y-auto border border-gray-200 rounded-lg">
                {activeCookies.length === 0 ? (
                  <p className="p-4 text-gray-500 text-center">
                    Nenhum cookie ativo
                  </p>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {activeCookies.map((cookie, index) => (
                      <div key={index} className="p-3 text-sm">
                        <div className="font-medium text-gray-900">{cookie.name}</div>
                        <div className="text-gray-600 truncate">{cookie.value}</div>
                        <div className="text-gray-500 text-xs">{cookie.domain}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Ações */}
            <div className="flex space-x-3 pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={handleClearAll}
                className="flex-1"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Limpar Cookies
              </Button>
              <Button
                onClick={handleSave}
                className="flex-1"
              >
                Salvar Preferências
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
