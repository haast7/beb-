// Webhook para envio de dados do formulário para Make.com
export interface WebhookPayload {
  // Dados pessoais
  nome: string;
  email: string;
  whatsapp: string;
  site?: string;
  
  // Dados da empresa
  segmento: string;
  tamanhoEmpresa: string;
  
  // Dados de agendamento (se aplicável)
  dataAgendamento?: string;
  horarioAgendamento?: string;
  
  // Dados de tracking
  nomeFormulario: string;
  carimboDataHora: string;
  agenteUsuario: string;
  referenciador: string;
  fonteLeads: string;
  fonte: string;
  tipoFormulario: string;
  
  // Dados adicionais
  cargo?: string;
  empresa?: string;
  faturamentoMensal?: string;
  segmentoPersonalizado?: string;
}

export async function sendWebhook(payload: WebhookPayload): Promise<boolean> {
  try {
    const webhookUrl = 'https://hook.us2.make.com/36wse18cssqtw4ytl57ny7woif4r6m5l';
    
    // Debug: Log detalhado do payload
    console.log('Enviando webhook com payload:', JSON.stringify(payload, null, 2));
    console.log('Cargo no payload:', payload.cargo);
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error('Erro ao enviar webhook:', response.status, response.statusText);
      const responseText = await response.text();
      console.error('Resposta do webhook:', responseText);
      return false;
    }

    const responseText = await response.text();
    console.log('Webhook enviado com sucesso! Resposta:', responseText);
    return true;
  } catch (error) {
    console.error('Erro ao enviar webhook:', error);
    return false;
  }
}

// Função para formatar data e hora no fuso horário do Brasil (UTC-3)
export function formatBrazilianDateTime(date: Date): { data: string; hora: string; timestamp: string } {
  // Usar o fuso horário do Brasil diretamente
  const brazilTime = new Date(date.toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}));
  
  const data = brazilTime.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  
  const hora = brazilTime.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  
  const timestamp = brazilTime.toLocaleString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  
  return { data, hora, timestamp };
}

// Função para mapear fonte do lead baseada na URL e source
export function getLeadSource(source: string, referrer?: string): string {
  // Mapear sources conhecidos
  const sourceMap: Record<string, string> = {
    'header': 'cabeçalho',
    'mobile_menu': 'menu_mobile',
    'offer': 'seção_ofertas',
    'diagnostic': 'diagnóstico_gratuito',
    'contato-info-whatsapp': 'informações_contato',
    'contato-hero-whatsapp': 'hero_contato',
    'portfolio-main': 'portfólio_principal',
    'portfolio-project': 'portfólio_projeto',
    'fixed_button': 'botão_fixo',
    'button': 'botão_genérico'
  };

  return sourceMap[source] || source;
}

// Função para mapear tipo de formulário
export function getFormType(source: string): string {
  const formTypeMap: Record<string, string> = {
    'diagnostic': 'diagnóstico_gratuito',
    'offer': 'plano_fundação',
    'portfolio-main': 'portfólio_principal',
    'portfolio-project': 'portfólio_projeto',
    'contato-hero-whatsapp': 'contato_hero',
    'contato-info-whatsapp': 'contato_info',
    'fixed_button': 'botão_flutuante'
  };

  return formTypeMap[source] || 'formulário_geral';
}

// Função para mapear tamanho da empresa baseado no faturamento
export function mapCompanySize(revenue: string): string {
  const revenueMap: Record<string, string> = {
    'Até R$ 50k': 'Até R$ 50 mil/mês',
    'R$ 50k - R$ 100k': 'R$ 50 mil - R$ 100 mil/mês',
    'R$ 101k - R$ 500k': 'R$ 100 mil - R$ 500 mil/mês',
    'R$ 501k - R$ 1MM': 'R$ 500 mil - R$ 1 milhão/mês',
    'R$ 1MM - R$ 10MM': 'R$ 1 milhão - R$ 10 milhões/mês',
    'Acima de R$ 10MM': 'Acima de R$ 10 milhões/mês'
  };

  return revenueMap[revenue] || revenue;
}
