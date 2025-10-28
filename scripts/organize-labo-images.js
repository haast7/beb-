#!/usr/bin/env node

/**
 * Script para organizar imagens da Labo por carrosséis
 * Detecta padrões nos nomes e organiza automaticamente
 */

const fs = require('fs');
const path = require('path');

const laboDir = path.join(__dirname, '..', 'public', 'portfolio', 'empresas', 'Labo Laboratório Oliveira');

try {
  if (!fs.existsSync(laboDir)) {
    console.log('❌ Diretório da Labo não encontrado:', laboDir);
    process.exit(1);
  }

  const files = fs.readdirSync(laboDir);
  
  // Organizar por carrosséis baseado nos padrões dos nomes
  const carrossels = {};
  
  files.forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const fullPath = `/portfolio/empresas/Labo Laboratório Oliveira/${file}`;
      
      // Detectar padrões
      if (file.includes('LABO_81GUA')) {
        if (!carrossels['agua']) carrossels['agua'] = [];
        carrossels['agua'].push(fullPath);
      } else if (file.includes('LABO_AGENDAMENTO')) {
        if (!carrossels['agendamento']) carrossels['agendamento'] = [];
        carrossels['agendamento'].push(fullPath);
      } else if (file.includes('LABO_HOR81RIOS')) {
        if (!carrossels['horarios']) carrossels['horarios'] = [];
        carrossels['horarios'].push(fullPath);
      } else if (file.includes('LABO_PAPERLESS')) {
        if (!carrossels['paperless']) carrossels['paperless'] = [];
        carrossels['paperless'].push(fullPath);
      } else if (file.includes('NOLABOTEM_CHECKUP')) {
        if (!carrossels['checkup']) carrossels['checkup'] = [];
        carrossels['checkup'].push(fullPath);
      } else if (file.includes('dengue')) {
        if (!carrossels['dengue']) carrossels['dengue'] = [];
        carrossels['dengue'].push(fullPath);
      } else if (file.includes('avulso')) {
        if (!carrossels['avulso']) carrossels['avulso'] = [];
        carrossels['avulso'].push(fullPath);
      } else {
        // Imagens sem padrão específico
        if (!carrossels['outros']) carrossels['outros'] = [];
        carrossels['outros'].push(fullPath);
      }
    }
  });

  // Ordenar cada carrossel
  Object.keys(carrossels).forEach(key => {
    carrossels[key].sort();
  });

  // Gerar dados estruturados
  const portfolioData = {
    id: 'labo-laboratorio-oliveira',
    name: 'Labo Laboratório Oliveira',
    logo: '/portfolio/placeholder.jpg', // Placeholder genérico
    coverImage: '/portfolio/placeholder.jpg', // Placeholder genérico
    carrossels: Object.entries(carrossels).map(([name, images]) => ({
      id: name,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      images: images
    }))
  };

  console.log('✅ Carrosséis detectados para Labo:');
  Object.entries(carrossels).forEach(([name, images]) => {
    console.log(`   • ${name}: ${images.length} imagens`);
  });

  // Salvar dados em arquivo temporário
  const outputFile = path.join(__dirname, '..', 'lib', 'labo-data.json');
  fs.writeFileSync(outputFile, JSON.stringify(portfolioData, null, 2));
  
  console.log(`📁 Dados salvos em: ${outputFile}`);
  console.log(`📊 Total: ${Object.values(carrossels).flat().length} imagens organizadas`);

} catch (error) {
  console.error('❌ Erro ao organizar imagens da Labo:', error.message);
  process.exit(1);
}
