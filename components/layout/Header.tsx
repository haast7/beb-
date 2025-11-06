'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Como Funciona', href: '/como-funciona' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
                  {/* Logo */}
                  <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="/logo.png"
                        alt="Haast - Marketing de Performance"
                        width={200}
                        height={60}
                        className="h-12 w-auto"
                        priority
                        fetchPriority="high"
                        quality={90}
                      />
                    </Link>
                  </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-haast-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <WhatsAppButton 
              size="sm" 
              source="header"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Falar no WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-haast-primary transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu" role="menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-haast-primary hover:bg-gray-100 rounded-md transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <WhatsAppButton 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300" 
                  source="mobile_menu"
                >
                  Falar no WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
