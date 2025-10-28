# Logos dos Clientes

Esta pasta contém os logos das empresas que confiam na Haast.

## Especificações das Imagens

- **Formato**: PNG ou SVG (preferencialmente PNG)
- **Dimensões**: 120x60px (ou proporção 2:1)
- **Fundo**: Transparente ou branco
- **Qualidade**: Alta resolução para telas retina

## Nomes dos Arquivos

Adicione os logos com os seguintes nomes:

- `clinica-ortopedica-sp.png`
- `laboratorio-diagnostico-plus.png`
- `clinica-odontologica-premium.png`
- `centro-imagem-medica.png`
- `clinica-cardiologia.png`
- `laboratorio-analises.png`
- `clinica-dermatologia.png`
- `centro-oftalmologia.png`

## Como Adicionar Novos Clientes

1. Adicione a imagem na pasta `/public/clients/`
2. Atualize o array `companies` em `components/sections/TrustedCompaniesSection.tsx`
3. Adicione o novo objeto com:
   - `name`: Nome da empresa
   - `logo`: Caminho da imagem (`/clients/nome-do-arquivo.png`)
   - `alt`: Texto alternativo para acessibilidade

## Exemplo

```typescript
{
  name: 'Nova Clínica',
  logo: '/clients/nova-clinica.png',
  alt: 'Logo da Nova Clínica',
}
```

## Fallback

Se uma imagem não for encontrada, será exibido o nome da empresa em texto como fallback.
