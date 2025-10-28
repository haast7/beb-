# 📡 Webhook Integration - Haast Lead Form

## 🎯 Visão Geral

Sistema de webhook integrado para captura e envio automático de leads do formulário para o Make.com, que por sua vez envia os dados para uma planilha.

## 🔗 Webhook URL

```
https://hook.us2.make.com/36wse18cssqtw4ytl57ny7woif4r6m5l
```

## 📊 Estrutura de Dados Enviados

### Dados Pessoais
- **nome**: Nome completo (firstName + lastName)
- **email**: E-mail do lead
- **whatsapp**: Telefone/WhatsApp
- **site**: @ da empresa (companyHandle)

### Dados da Empresa
- **segmento**: Segmento selecionado ou personalizado
- **tamanhoEmpresa**: Faturamento mensal mapeado para formato brasileiro

### Dados de Agendamento
- **dataAgendamento**: Data atual no formato DD/MM/AAAA
- **horarioAgendamento**: Horário atual no formato HH:MM

### Dados de Tracking
- **nomeFormulario**: "Formulário de Lead Haast"
- **carimboDataHora**: Timestamp completo em português
- **agenteUsuario**: User Agent do navegador
- **referenciador**: URL de origem (referrer)
- **fonteLeads**: Fonte mapeada em português
- **fonte**: Mesmo que fonteLeads
- **tipoFormulario**: Tipo do formulário mapeado

### Dados Adicionais
- **cargo**: Cargo do lead
- **empresa**: Nome da empresa
- **faturamentoMensal**: Faturamento original selecionado
- **segmentoPersonalizado**: Segmento customizado (quando "Outro" é selecionado)

## 🕐 Fuso Horário

Todos os timestamps são convertidos para **UTC-3 (São Paulo)** automaticamente.

## 🗺️ Mapeamento de Fontes

| Source Original | Fonte Mapeada |
|----------------|---------------|
| header | cabeçalho |
| mobile_menu | menu_mobile |
| offer | seção_ofertas |
| diagnostic | diagnóstico_gratuito |
| contato-info-whatsapp | informações_contato |
| contato-hero-whatsapp | hero_contato |
| portfolio-main | portfólio_principal |
| portfolio-project | portfólio_projeto |
| fixed_button | botão_fixo |
| button | botão_genérico |

## 🏷️ Mapeamento de Tipos de Formulário

| Source | Tipo de Formulário |
|--------|-------------------|
| diagnostic | diagnóstico_gratuito |
| offer | plano_fundação |
| portfolio-main | portfólio_principal |
| portfolio-project | portfólio_projeto |
| contato-hero-whatsapp | contato_hero |
| contato-info-whatsapp | contato_info |
| fixed_button | botão_flutuante |

## 💰 Mapeamento de Faturamento

| Seleção Original | Faturamento Mapeado |
|------------------|-------------------|
| Até R$ 50k | Até R$ 50 mil/mês |
| R$ 50k - R$ 100k | R$ 50 mil - R$ 100 mil/mês |
| R$ 101k - R$ 500k | R$ 100 mil - R$ 500 mil/mês |
| R$ 501k - R$ 1MM | R$ 500 mil - R$ 1 milhão/mês |
| R$ 1MM - R$ 10MM | R$ 1 milhão - R$ 10 milhões/mês |
| Acima de R$ 10MM | Acima de R$ 10 milhões/mês |

## 🔧 Implementação

### 1. Envio Direto (Atual)
O formulário envia diretamente para o webhook do Make.com.

### 2. API Route (Alternativa)
Existe uma rota `/api/webhook/lead` que pode ser usada como intermediária.

## 📈 Tracking e Analytics

- **Google Analytics**: Eventos de conversão
- **Webhook**: Dados estruturados para planilha
- **Console**: Logs de erro e sucesso

## 🚨 Tratamento de Erros

- Webhook falha: Formulário continua funcionando
- Dados inválidos: Validação antes do envio
- Timeout: Retry automático (pode ser implementado)

## 📝 Exemplo de Payload

```json
{
  "nome": "João Silva",
  "email": "joao@empresa.com",
  "whatsapp": "(11) 99999-9999",
  "site": "empresa_joao",
  "segmento": "Clínica Médica",
  "tamanhoEmpresa": "R$ 50 mil - R$ 100 mil/mês",
  "dataAgendamento": "25/08/2025",
  "horarioAgendamento": "14:08",
  "nomeFormulario": "Formulário de Lead Haast",
  "carimboDataHora": "25 de agosto de 2025 às 14h08",
  "agenteUsuario": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
  "referenciador": "https://haast.tech/contato",
  "fonteLeads": "hero_contato",
  "fonte": "hero_contato",
  "tipoFormulario": "contato_hero",
  "cargo": "Diretor",
  "empresa": "Clínica São João",
  "faturamentoMensal": "R$ 50k - R$ 100k",
  "segmentoPersonalizado": null
}
```

## 🔄 Fluxo Completo

1. **Lead preenche formulário** → Validação
2. **Dados são processados** → Mapeamento e formatação
3. **Webhook é enviado** → Make.com recebe dados
4. **Make.com processa** → Envia para planilha
5. **Lead recebe confirmação** → Tela de agradecimento

## 🛠️ Manutenção

- **Logs**: Verificar console do navegador
- **Testes**: Usar formulário de teste
- **Monitoramento**: Acompanhar planilha de destino
- **Atualizações**: Modificar mapeamentos conforme necessário
