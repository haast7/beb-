# Haast - Site Institucional

Site institucional da Haast desenvolvido com Next.js 14, TypeScript e Tailwind CSS, seguindo as melhores práticas de SEO, performance e UX.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** (animações)
- **Lucide React** (ícones)
- **Google Tag Manager** + **GA4**
- **Meta Pixel** + **CAPI**

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp env.example .env.local
   ```

4. Configure as variáveis no `.env.local`:
   - `NEXT_PUBLIC_GTM_ID`: ID do Google Tag Manager
   - `NEXT_PUBLIC_SITE_URL`: URL do site
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: ID do Google Analytics
   - `NEXT_PUBLIC_META_PIXEL_ID`: ID do Meta Pixel
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Número do WhatsApp

## 🏃‍♂️ Executando o projeto

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint

# Formatação
npm run format
```

## 📁 Estrutura do Projeto

```
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página home
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap.xml
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── layout/           # Header, Footer
│   ├── sections/         # Seções da página home
│   ├── analytics/        # GTM, Consent Banner
│   └── seo/              # JSON-LD, metadata
├── lib/                  # Utilitários
│   └── utils.ts          # Funções auxiliares
└── public/               # Assets estáticos
```

## 🎨 Design System

### Cores
- **Verde Haast**: `#00FFB4` (primária)
- **Verde Sucesso**: `#00E697` (hover)
- **Preto Grafite**: `#050505` (fundo)
- **Cinza Escuro**: `#1C1C1C` (cards)
- **Cinza Médio**: `#404040` (bordas)
- **Cinza Claro**: `#F2F2F2` (texto secundário)

### Tipografia
- **Títulos**: Poppins (700-900)
- **Corpo**: Inter (400-500)

## 📊 SEO & Performance

- ✅ **Core Web Vitals** otimizados
- ✅ **SEO técnico** completo
- ✅ **JSON-LD** estruturado
- ✅ **Sitemap** automático
- ✅ **Robots.txt** configurado
- ✅ **Meta tags** completas
- ✅ **Open Graph** + Twitter Cards

## 🔧 Analytics & Tracking

- ✅ **Google Tag Manager** configurado
- ✅ **Google Analytics 4** integrado
- ✅ **Meta Pixel** + CAPI
- ✅ **Consent Mode v2** (LGPD)
- ✅ **Eventos personalizados**
- ✅ **UTM tracking**

## 📱 Responsividade

- ✅ **Mobile-first** design
- ✅ **Breakpoints** otimizados
- ✅ **Touch targets** adequados
- ✅ **Tipografia fluida**

## ♿ Acessibilidade

- ✅ **WCAG 2.1 AA** compliance
- ✅ **Navegação por teclado**
- ✅ **Screen readers** compatível
- ✅ **Contraste** adequado
- ✅ **Alt texts** descritivos

## 🚀 Deploy

O projeto está configurado para deploy na **Vercel**:

1. Conecte o repositório na Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

## 📈 Monitoramento

- **Lighthouse CI** configurado
- **Core Web Vitals** monitorados
- **Error tracking** (opcional)
- **Analytics** em tempo real

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da Haast. Todos os direitos reservados.

---

**Desenvolvido com ❤️ pela equipe Haast**
