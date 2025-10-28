import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const laboDataPath = path.join(process.cwd(), 'lib', 'labo-data.json');
    
    if (!fs.existsSync(laboDataPath)) {
      return NextResponse.json({ error: 'Dados da Labo não encontrados' }, { status: 404 });
    }

    const data = JSON.parse(fs.readFileSync(laboDataPath, 'utf8'));
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao carregar dados da Labo:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}










