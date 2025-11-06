#!/usr/bin/env node

/**
 * Script para gerar dados do portfólio automaticamente
 * Detecta todas as pastas em public/portfolio/empresas/ e gera os dados
 */

const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, '..', 'public', 'portfolio', 'empresas');
const outputFile = path.join(__dirname, '..', 'lib', 'portfolio-data.ts');

try {
  if (!fs.existsSync(portfolioDir)) {
    console.log('❌ Diretório do portfólio não encontrado:', portfolioDir);
    process.exit(1);
  }

  const companies = fs.readdirSync(portfolioDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  if (companies.length === 0) {
    console.log('⚠️  Nenhuma empresa encontrada no portfólio');
    process.exit(0);
  }

  const portfolioData = companies.map(company => {
    const companyDir = path.join(portfolioDir, company);
    const files = fs.readdirSync(companyDir);
    
    // Encontrar logo e capa
    const logo = files.find(file => file.startsWith('logo.'));
    const capa = files.find(file => file.startsWith('capa.'));
    
    // Encontrar todas as peças
    const pieces = files
      .filter(file => file.startsWith('peca-') && (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')))
      .sort((a, b) => {
        const aNum = parseInt(a.match(/\d+/)?.[0] || '0');
        const bNum = parseInt(b.match(/\d+/)?.[0] || '0');
        return aNum - bNum;
      })
      .map(file => `/portfolio/empresas/${company}/${file}`);

    // Converter nome da pasta para nome da empresa
    const companyName = company
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      id: company,
      name: companyName,
      logo: logo ? `/portfolio/empresas/${company}/${logo}` : null,
      cover: capa ? `/portfolio/empresas/${company}/${capa}` : null,
      pieces: pieces
    };
  }).filter(item => item.logo && item.cover && item.pieces.length > 0);

  // Gerar arquivo TypeScript
  const tsContent = `// Arquivo gerado automaticamente - não edite manualmente
// Execute: node scripts/generate-portfolio-data.js

export interface PortfolioItem {
  id: string;
  name: string;
  logo: string;
  cover: string;
  pieces: string[];
}

export const portfolioItems: PortfolioItem[] = ${JSON.stringify(portfolioData, null, 2)};

export const getPortfolioItem = (id: string): PortfolioItem | undefined => {
  return portfolioItems.find(item => item.id === id);
};

export const getPortfolioItems = (): PortfolioItem[] => {
  return portfolioItems;
};
`;

  // Criar diretório lib se não existir
  const libDir = path.dirname(outputFile);
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, tsContent);

  console.log('✅ Dados do portfólio gerados com sucesso!');
  console.log(`📁 Arquivo: ${outputFile}`);
  console.log(`📊 ${portfolioData.length} empresa(s) encontrada(s):`);
  
  portfolioData.forEach(item => {
    console.log(`   • ${item.name} (${item.pieces.length} peças)`);
  });

  console.log('\n🔄 Para atualizar os dados, execute:');
  console.log('   node scripts/generate-portfolio-data.js');

} catch (error) {
  console.error('❌ Erro ao gerar dados do portfólio:', error.message);
  process.exit(1);
}













