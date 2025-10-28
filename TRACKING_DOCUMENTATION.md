# 📊 Sistema de Tracking - Haast

## 🎯 Visão Geral

Sistema completo de tracking integrado com Google Analytics, Google Tag Manager e Meta Pixel para captura detalhada de dados de conversão e comportamento do usuário.

## 🔧 Ferramentas Integradas

### 1. Google Analytics 4
- **ID**: `G-L258ZZZ9SF`
- **Função**: Análise de comportamento e conversões
- **Eventos**: PageView, scroll, cliques, formulários

### 2. Google Tag Manager
- **ID**: `GTM-5Q2XJMZ9`
- **Função**: Gerenciamento centralizado de tags
- **Benefícios**: Deploy sem código, testes A/B, remarketing

### 3. Meta Pixel (Facebook)
- **ID**: `24928923856775541`
- **Função**: Remarketing e otimização de campanhas
- **Eventos**: Lead, CompleteRegistration, ViewContent

## 📈 Eventos Rastreados

### Google Analytics 4
- **page_view**: Visualização de páginas
- **scroll**: Scroll depth (25%, 50%, 75%, 100%)
- **whatsapp_click**: Cliques em botões WhatsApp
- **whatsapp_button_interaction**: Interações com botões (hover, click)
- **form_step_completed**: Etapas do formulário completadas
- **form_submit**: Submissão de formulários
- **cta_click**: Cliques em CTAs

### Meta Pixel
- **PageView**: Visualização de páginas
- **Lead**: Geração de leads
- **CompleteRegistration**: Registro completo
- **ViewContent**: Visualização de conteúdo
- **InitiateCheckout**: Início de processo de compra

## 🎯 Dados Capturados

### Informações do Usuário
- **User Agent**: Navegador e sistema operacional
- **Referrer**: Página de origem
- **Timestamp**: Data e hora exata
- **Session ID**: Identificador da sessão

### Dados de Conversão
- **Fonte do Lead**: Origem específica (header, portfolio, etc.)
- **Tipo de Formulário**: Categoria do formulário
- **Segmento**: Área de atuação do lead
- **Faturamento**: Tamanho da empresa
- **Dados Pessoais**: Nome, email, telefone

### Comportamento
- **Tempo na Página**: Duração da sessão
- **Scroll Depth**: Profundidade de rolagem
- **Cliques**: Interações com elementos
- **Formulários**: Preenchimento e abandono

## 🔄 Fluxo de Tracking

### 1. Carregamento da Página
```
Google Analytics → PageView
Meta Pixel → PageView
GTM → Inicialização
```

### 2. Interação do Usuário
```
Scroll → GA4 Event
Hover → GA4 + Meta Event
Click → GA4 + Meta Event
```

### 3. Conversão
```
Form Submit → GA4 + Meta Lead
Webhook → Make.com
Planilha → Dados estruturados
```

## 📊 Relatórios Disponíveis

### Google Analytics 4
- **Audience**: Demografia e comportamento
- **Acquisition**: Origem do tráfego
- **Behavior**: Fluxo do usuário
- **Conversions**: Funil de conversão

### Meta Ads Manager
- **Campaigns**: Performance das campanhas
- **Audiences**: Públicos personalizados
- **Conversions**: Eventos de conversão
- **Attribution**: Atribuição de conversões

### Google Tag Manager
- **Debug**: Teste de tags
- **Preview**: Visualização em tempo real
- **Variables**: Dados dinâmicos
- **Triggers**: Condições de disparo

## 🛠️ Configuração

### Variáveis de Ambiente
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-L258ZZZ9SF
NEXT_PUBLIC_GTM_ID=GTM-5Q2XJMZ9
NEXT_PUBLIC_META_PIXEL_ID=24928923856775541
```

### Componentes
- **GoogleAnalytics.tsx**: GA4 tracking
- **GoogleTagManager.tsx**: GTM integration
- **MetaPixel.tsx**: Facebook Pixel
- **ScrollTracking.tsx**: Scroll depth
- **ConsentBanner.tsx**: LGPD compliance

## 📱 Eventos Específicos por Dispositivo

### Mobile
- **Touch Events**: Toques na tela
- **Swipe**: Deslizamentos
- **Orientation**: Mudança de orientação

### Desktop
- **Hover**: Passagem do mouse
- **Keyboard**: Teclas pressionadas
- **Window Resize**: Redimensionamento

## 🎯 Segmentação Avançada

### Por Fonte
- **Organic**: Tráfego orgânico
- **Paid**: Tráfego pago
- **Direct**: Acesso direto
- **Social**: Redes sociais
- **Email**: Campanhas de email

### Por Comportamento
- **New Visitors**: Primeira visita
- **Returning**: Visitantes recorrentes
- **High Intent**: Alta intenção de compra
- **Form Abandoners**: Abandonaram formulário

## 🔒 Privacidade e LGPD

### Consentimento
- **Banner**: Solicitação de consentimento
- **Granular**: Controle por categoria
- **Withdrawal**: Direito ao esquecimento

### Dados Coletados
- **Necessários**: Funcionamento básico
- **Analíticos**: Melhoria da experiência
- **Marketing**: Personalização de anúncios

## 📈 Métricas Principais

### Conversão
- **Taxa de Conversão**: Leads / Visitantes
- **Custo por Lead**: Investimento / Leads
- **ROI**: Retorno sobre investimento

### Engajamento
- **Tempo na Página**: Duração média
- **Páginas por Sessão**: Profundidade
- **Taxa de Rejeição**: Saída imediata

### Qualidade
- **Score de Lead**: Qualificação automática
- **Segmentação**: Categorização por perfil
- **Follow-up**: Próximos passos

## 🚀 Otimizações

### Performance
- **Lazy Loading**: Carregamento sob demanda
- **Minification**: Código otimizado
- **CDN**: Distribuição global

### Precisão
- **Deduplication**: Remoção de duplicatas
- **Validation**: Validação de dados
- **Cleanup**: Limpeza automática

## 📞 Suporte

### Debugging
- **Console Logs**: Logs detalhados
- **Network Tab**: Requisições de tracking
- **GTM Preview**: Teste de tags

### Monitoramento
- **Real-time**: Dados em tempo real
- **Alerts**: Notificações de erro
- **Reports**: Relatórios automáticos
