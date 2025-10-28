# 📁 ESTRUTURA DO PORTFÓLIO - HAAST

## 🎯 Como Organizar as Imagens

### 📂 Estrutura de Pastas:
```
public/portfolio/
├── empresas/
│   ├── clinica-ortopedica/
│   │   ├── logo.png          # Logo da empresa
│   │   ├── capa.jpg          # Imagem de capa do projeto
│   │   ├── peca-1.jpg        # Peça 1
│   │   ├── peca-2.jpg        # Peça 2
│   │   ├── peca-3.jpg        # Peça 3
│   │   └── ...
│   ├── laboratorio-diagnostico/
│   │   ├── logo.png
│   │   ├── capa.jpg
│   │   ├── peca-1.jpg
│   │   └── ...
│   └── ...
```

### 📋 Regras para Nomenclatura:

#### **1. Pasta da Empresa:**
- Nome: `nome-da-empresa` (minúsculas, hífens)
- Exemplo: `clinica-ortopedica`, `laboratorio-diagnostico`

#### **2. Arquivos Obrigatórios:**
- `logo.png` - Logo da empresa (quadrado, 200x200px)
- `capa.jpg` - Imagem de capa do projeto (16:9, 800x450px)

#### **3. Peças do Projeto:**
- `peca-1.jpg`, `peca-2.jpg`, `peca-3.jpg`, etc.
- Formato: JPG ou PNG
- Proporção: Qualquer (o sistema ajusta automaticamente)

### 🎨 Exemplo Prático:

```
public/portfolio/empresas/clinica-ortopedica/
├── logo.png          # Logo da Clínica Ortopédica
├── capa.jpg          # Capa: Landing page principal
├── peca-1.jpg        # Peça: Banner Facebook
├── peca-2.jpg        # Peça: Post Instagram
├── peca-3.jpg        # Peça: Story Instagram
├── peca-4.jpg        # Peça: Google Ads
└── peca-5.jpg        # Peça: Email Marketing
```

### ⚡ Sistema Automático:

O sistema irá:
1. **Detectar automaticamente** todas as pastas em `empresas/`
2. **Organizar as peças** em carrosséis simétricos
3. **Ajustar o tamanho** dos carrosséis baseado na quantidade de imagens
4. **Criar o modal** com layout Behance

### 📱 Responsividade:
- **Mobile**: 1 coluna
- **Tablet**: 2 colunas  
- **Desktop**: 3 colunas

### 🎯 Resultado:
- Cards de preview com capa + título
- Modal com logo da empresa
- Carrossel organizado das peças
- Layout simétrico e impactante


