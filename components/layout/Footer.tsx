import Link from 'next/link';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { CookieManager } from '@/components/analytics/CookieManager';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-haast-black-graphite border-t border-haast-gray-medium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <OptimizedImage
                src="/logo.png"
                alt="Haast Marketing de Performance"
                width={200}
                height={80}
                className="h-20 w-auto"
                priority={false}
              />
            </div>
            <p className="text-haast-gray-light text-sm mb-6 max-w-md">
              Infraestrutura Digital de Alta Performance para clínicas e laboratórios. 
              Transformamos marketing de despesa em investimento com ROI real.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contato@haast.com.br"
                className="text-haast-gray-light hover:text-haast-primary transition-colors duration-200"
                aria-label="Enviar e-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/haastmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-haast-gray-light hover:text-haast-primary transition-colors duration-200"
                aria-label="Seguir no Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/haastoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-haast-gray-light hover:text-haast-primary transition-colors duration-200"
                aria-label="Conectar no LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos" className="text-haast-gray-light hover:text-haast-primary transition-colors duration-200 text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-haast-gray-light hover:text-haast-primary transition-colors duration-200 text-sm">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-haast-gray-light hover:text-haast-primary transition-colors duration-200 text-sm">
                  Sobre a Haast
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-haast-gray-light">
              <p>contato@haast.com.br</p>
              <p>@haastmarketing</p>
            </div>
            <div className="mt-6">
              <WhatsAppButton size="sm" source="footer">
                Falar no WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-haast-gray-medium mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-haast-gray-light">
              © {currentYear} Haast. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link href="/termos" className="text-haast-gray-light hover:text-haast-primary transition-colors duration-200">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-haast-gray-light hover:text-haast-primary transition-colors duration-200">
                Política de Privacidade
              </Link>
              <Link href="/cookies" className="text-haast-gray-light hover:text-haast-primary transition-colors duration-200">
                Política de Cookies
              </Link>
              <CookieManager />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
