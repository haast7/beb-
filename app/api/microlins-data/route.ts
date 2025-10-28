import { NextResponse } from 'next/server';
import microlinsData from '@/lib/microlins-data.json';

export async function GET() {
  try {
    return NextResponse.json(microlinsData);
  } catch (error) {
    console.error('Erro ao carregar dados da Microlins:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}


