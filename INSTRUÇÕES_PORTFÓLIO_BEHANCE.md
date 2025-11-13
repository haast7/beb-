# 🎨 PORTFÓLIO ESTILO BEHANCE - HAAST

## 🚀 Sistema Automático de Portfólio

O sistema de portfólio foi criado para ser **100% automático** e **fácil de usar**!

### 📁 Estrutura de Pastas

```
public/portfolio/empresas/
├── clinica-ortopedica/
│   ├── logo.png          # Logo da empresa (200x200px)
│   ├── capa.jpg          # Imagem de capa (16:9, 800x450px)
│   ├── peca-1.jpg        # Primeira peça
│   ├── peca-2.jpg        # Segunda peça
│   ├── peca-3.jpg        # Terceira peça
│   └── ...
├── laboratorio-diagnostico/
│   ├── logo.png
│   ├── capa.jpg
│   ├── peca-1.jpg
│   └── ...
└── ...
```

## 🎯 Como Adicionar Novos Projetos

### **Método 1: Script Automático (Recomendado)**

```bash
# Adicionar novo projeto
node scripts/add-portfolio-item.js "Nome da Empresa" "nome-da-empresa"

# Exemplo:
node scripts/add-portfolio-item.js "Clínica Odontológica" "clinica-odontologica"
```

### **Método 2: Manual**

1. **Criar pasta** em `public/portfolio/empresas/nome-da-empresa/`
2. **Adicionar arquivos obrigatórios:**
   - `logo.png` - Logo da empresa
   - `capa.jpg` - Imagem de capa do projeto
3. **Adicionar peças:**
   - `peca-1.jpg`, `peca-2.jpg`, `peca-3.jpg`, etc.
4. **Executar script de atualização:**
   ```bash
   node scripts/generate-portfolio-data.js
   ```

## 🎨 Características do Sistema

### **Cards de Preview**
- ✅ Imagem de capa com logo da empresa
- ✅ Título do projeto
- ✅ Contador de peças
- ✅ Hover effects elegantes
- ✅ Ícone de visualização

### **Modal Estilo Behance**
- ✅ Logo da empresa no header
- ✅ Carrossel de peças organizado
- ✅ Navegação com setas e indicadores
- ✅ Layout responsivo
- ✅ Tamanho automático baseado na quantidade de imagens

### **Layout Inteligente**
- **2 imagens**: Carrossel grande (h-96)
- **3-4 imagens**: Carrossel médio (h-80)
- **5+ imagens**: Carrossel menor (h-64)

## 📱 Responsividade

- **Mobile**: 1 coluna
- **Tablet**: 2 colunas
- **Desktop**: 3 colunas

## 🔄 Atualizações Automáticas

O sistema detecta automaticamente:
- ✅ Novas pastas de empresas
- ✅ Novas peças adicionadas
- ✅ Arquivos de logo e capa
- ✅ Ordem das peças (peca-1, peca-2, etc.)

## 🎯 Exemplo Prático

### **1. Adicionar Projeto:**
```bash
node scripts/add-portfolio-item.js "Clínica Odontológica" "clinica-odontologica"
```

### **2. Substituir Arquivos:**
- Substitua `logo.png` pelo logo real
- Substitua `capa.jpg` pela capa real
- Substitua `peca-1.jpg`, `peca-2.jpg`, etc. pelas peças reais

### **3. Adicionar Mais Peças:**
- Adicione `peca-4.jpg`, `peca-5.jpg`, etc.
- O sistema detectará automaticamente

### **4. Atualizar Dados:**
```bash
node scripts/generate-portfolio-data.js
```

## 🎨 Dicas de Design

### **Imagem de Capa:**
- Proporção: 16:9 (800x450px)
- Mostre a peça mais impactante
- Use cores que combinem com a marca

### **Logo:**
- Formato: PNG com fundo transparente
- Tamanho: 200x200px
- Deve ser legível em fundo branco

### **Peças:**
- Qualquer proporção (o sistema ajusta)
- Formato: JPG ou PNG
- Nomeie sequencialmente: peca-1, peca-2, etc.

## 🚀 Resultado Final

- **Cards elegantes** com preview e título
- **Modal estilo Behance** com carrossel organizado
- **Layout simétrico** e impactante
- **Sistema 100% automático**
- **Fácil de manter e atualizar**

## 🔧 Scripts Disponíveis

```bash
# Adicionar novo projeto
node scripts/add-portfolio-item.js "Nome" "nome-da-empresa"

# Atualizar dados do portfólio
node scripts/generate-portfolio-data.js
```

## 📊 Status Atual

- ✅ 2 empresas configuradas
- ✅ Sistema automático funcionando
- ✅ Layout responsivo implementado
- ✅ Modal estilo Behance criado
- ✅ Scripts de automação prontos

---

**🎉 Pronto! Seu portfólio estilo Behance está funcionando perfeitamente!**


















