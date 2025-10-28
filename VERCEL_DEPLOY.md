# Deploy no Vercel - Haast Site

## Configurações Necessárias

### 1. Variáveis de Ambiente
Configure as seguintes variáveis no painel do Vercel:

```
NEXT_PUBLIC_GTM_ID=GTM-5Q2XJMZ9
NEXT_PUBLIC_SITE_URL=https://haast.com.br
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-L258ZZZ9SF
NEXT_PUBLIC_META_PIXEL_ID=24928923856775541
NEXT_PUBLIC_WHATSAPP_NUMBER=5511914423606
```

### 2. Configurações do Projeto
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3. Domínio
- Configure o domínio `haast.com.br` no painel do Vercel
- Configure redirecionamento de `www.haast.com.br` para `haast.com.br`

### 4. Verificações Pós-Deploy
- [ ] Site carrega corretamente
- [ ] Analytics funcionando (GTM + GA4)
- [ ] Meta Pixel funcionando
- [ ] Formulários de contato funcionando
- [ ] WhatsApp buttons funcionando
- [ ] Sitemap acessível em `/sitemap.xml`
- [ ] Robots.txt acessível em `/robots.txt`
- [ ] Imagens carregando corretamente
- [ ] Performance Lighthouse > 90

### 5. URLs Importantes
- Home: `https://haast.com.br/`
- Serviços: `https://haast.com.br/servicos`
- Como Funciona: `https://haast.com.br/como-funciona`
- Sobre: `https://haast.com.br/sobre`
- Contato: `https://haast.com.br/contato`
- Sitemap: `https://haast.com.br/sitemap.xml`
- Robots: `https://haast.com.br/robots.txt`

### 6. SEO Checklist
- [x] Meta tags configuradas
- [x] Open Graph configurado
- [x] Twitter Cards configurado
- [x] Sitemap configurado
- [x] Robots.txt configurado
- [x] Canonical URLs configuradas
- [x] Structured data (JSON-LD) implementado
- [x] Headers de segurança configurados

### 7. Performance
- [x] Next.js Image otimização
- [x] Fontes otimizadas (Inter + Poppins)
- [x] Bundle analyzer configurado
- [x] Headers de cache configurados
- [x] Compressão habilitada

### 8. Segurança
- [x] X-Frame-Options: DENY
- [x] X-Content-Type-Options: nosniff
- [x] Referrer-Policy: strict-origin-when-cross-origin
- [x] Permissions-Policy configurado
- [x] CSP headers (via Next.js)

### 9. Analytics & Tracking
- [x] Google Tag Manager
- [x] Google Analytics 4
- [x] Meta Pixel
- [x] Consent Mode v2
- [x] Scroll tracking
- [x] Form submission tracking
- [x] WhatsApp click tracking

### 10. LGPD Compliance
- [x] Consent banner implementado
- [x] Cookie management
- [x] Privacy policy page
- [x] Terms of service page
- [x] Cookie policy page
