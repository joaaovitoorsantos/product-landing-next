# Landing Page Orthopedic - Desafio Frontend

Projeto desenvolvido como resposta ao desafio de criar uma página web responsiva para e-commerce de produtos ortopédicos.

## Sobre o Projeto

Este projeto consiste em uma landing page completa e responsiva baseada no design fornecido via Figma. Como a versão mobile não estava especificada, foram tomadas decisões de design para adaptar todos os elementos de forma otimizada para dispositivos móveis.

## Tecnologias Utilizadas

- **Next.js** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização e responsividade

## Funcionalidades Implementadas

### Desktop
- Layout fiel ao design do Figma
- Navegação completa com todas as seções
- Carrossel de produtos relacionados
- Galeria de imagens do produto
- FAQ expansível com primeiro item aberto por padrão

### Mobile
- Menu hambúrguer animado
- Layout adaptado para telas pequenas
- Carrossel de produtos responsivo (1 produto por vez em mobile)
- Galeria de imagens otimizada com miniaturas menores
- Títulos e espaçamentos ajustados
- Imagens específicas para mobile quando necessário

## Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar versão de produção
npm start
```

Acesse `http://localhost:3000` no navegador.

## Estrutura do Projeto

```
├── components/          # Componentes reutilizáveis
│   ├── ProductCard.tsx
│   ├── ProductFAQ.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── MobileMenu.tsx
├── pages/
│   ├── index.tsx       # Página inicial
│   └── produto/
│       └── [id].tsx    # Página de detalhes do produto
├── data/
│   └── products.ts     # Dados dos produtos
└── styles/
    └── globals.css     # Estilos globais
```

## Destaques da Implementação

- Componentização eficiente e reutilizável
- Código limpo e organizado seguindo boas práticas
- Performance otimizada com carregamento rápido
- Totalmente responsivo (mobile, tablet, desktop)
- Navegação intuitiva em todos os dispositivos
- Animações suaves e transições

## Deploy

[Link do projeto em produção aqui]

---

Desenvolvido como parte do desafio técnico de frontend.
