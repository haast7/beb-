#!/usr/bin/env node

/**
 * Script para adicionar novos itens ao portfólio
 * Uso: node scripts/add-portfolio-item.js "Nome da Empresa" "nome-da-empresa"
 */

const fs = require('fs');
const path = require('path');

const [,, companyName, folderName] = process.argv;

if (!companyName || !folderName) {
  console.log('❌ Uso: node scripts/add-portfolio-item.js "Nome da Empresa" "nome-da-empresa"');
  console.log('📝 Exemplo: node scripts/add-portfolio-item.js "Clínica Ortopédica" "clinica-ortopedica"');
  process.exit(1);
}

const portfolioDir = path.join(__dirname, '..', 'public', 'portfolio', 'empresas');
const newItemDir = path.join(portfolioDir, folderName);

try {
  // Criar diretório da empresa
  if (!fs.existsSync(newItemDir)) {
    fs.mkdirSync(newItemDir, { recursive: true });
    console.log(`✅ Diretório criado: ${newItemDir}`);
  } else {
    console.log(`⚠️  Diretório já existe: ${newItemDir}`);
  }

  // Criar arquivos placeholder
  const files = [
    { name: 'logo.png', description: 'Logo da empresa (200x200px)' },
    { name: 'capa.jpg', description: 'Imagem de capa do projeto (16:9, 800x450px)' },
    { name: 'peca-1.jpg', description: 'Primeira peça do projeto' },
    { name: 'peca-2.jpg', description: 'Segunda peça do projeto' },
  ];

  files.forEach(file => {
    const filePath = path.join(newItemDir, file.name);
    if (!fs.existsSync(filePath)) {
      // Criar arquivo placeholder (1x1 pixel transparente)
      const placeholder = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
      fs.writeFileSync(filePath, placeholder);
      console.log(`✅ Arquivo criado: ${file.name} - ${file.description}`);
    } else {
      console.log(`⚠️  Arquivo já existe: ${file.name}`);
    }
  });

  console.log('\n🎉 Item do portfólio criado com sucesso!');
  console.log(`📁 Pasta: ${newItemDir}`);
  console.log('\n📋 Próximos passos:');
  console.log('1. Substitua os arquivos placeholder pelas imagens reais');
  console.log('2. Adicione mais peças conforme necessário (peca-3.jpg, peca-4.jpg, etc.)');
  console.log('3. O sistema detectará automaticamente as novas imagens');

} catch (error) {
  console.error('❌ Erro ao criar item do portfólio:', error.message);
  process.exit(1);
}













