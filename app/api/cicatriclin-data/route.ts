import { NextResponse } from 'next/server';
import cicatriclinData from '@/lib/cicatriclin-data.json';

export async function GET() {
  try {
    return NextResponse.json(cicatriclinData);
  } catch (error) {
    console.error('Erro ao carregar dados da Cicatriclin:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

