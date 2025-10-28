import { NextRequest, NextResponse } from 'next/server';
import { sendWebhook, formatBrazilianDateTime, getLeadSource, getFormType, mapCompanySize } from '@/lib/webhook';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar dados obrigatórios
    if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Dados obrigatórios não fornecidos' },
        { status: 400 }
      );
    }

    // Preparar dados para webhook
    const now = new Date();
    const { data, hora, timestamp } = formatBrazilianDateTime(now);
    
    const webhookPayload = {
      // Dados pessoais
      nome: `${body.firstName} ${body.lastName}`,
      email: body.email,
      whatsapp: body.phone,
      site: body.companyHandle || '',
      
      // Dados da empresa
      segmento: body.segment === 'Outro' ? body.customSegment : body.segment,
      tamanhoEmpresa: mapCompanySize(body.monthlyRevenue || ''),
      
      // Dados de agendamento
      dataAgendamento: data,
      horarioAgendamento: hora,
      
      // Dados de tracking
      nomeFormulario: 'Formulário de Lead Haast',
      carimboDataHora: timestamp,
      agenteUsuario: request.headers.get('user-agent') || 'N/A',
      referenciador: request.headers.get('referer') || 'N/A',
      fonteLeads: getLeadSource(body.source || 'unknown'),
      fonte: getLeadSource(body.source || 'unknown'),
      tipoFormulario: getFormType(body.source || 'unknown'),
      
      // Dados adicionais
      cargo: body.position || '',
      empresa: body.company || '',
      faturamentoMensal: body.monthlyRevenue || '',
      segmentoPersonalizado: body.segment === 'Outro' ? body.customSegment : undefined
    };

    // Enviar webhook
    const webhookSuccess = await sendWebhook(webhookPayload);
    
    if (!webhookSuccess) {
      console.error('Falha ao enviar webhook');
      return NextResponse.json(
        { error: 'Falha ao processar formulário' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Formulário enviado com sucesso' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro no webhook:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
