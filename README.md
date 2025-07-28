# Casa de Repouso - O Amor NUNCA Envelhece

Landing page profissional para Casa de Repouso com foco em conversão via WhatsApp.

## 🚀 Tecnologias

- ⚡️ [Vite](https://vitejs.dev/) - Build tool rápido
- ⚛️ [React](https://react.dev/) - Biblioteca UI
- 🔷 [TypeScript](https://www.typescriptlang.org/) - Segurança de tipos
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- 🧩 [shadcn/ui](https://ui.shadcn.com/) - Componentes acessíveis
- 📱 [Radix UI](https://www.radix-ui.com/) - Primitivas UI
- 🎯 [React Router](https://reactrouter.com/) - Roteamento
- 🔄 [React Query](https://tanstack.com/query) - Gerenciamento de dados
- 🔐 [Supabase](https://supabase.com/) - Autenticação e banco de dados
- 📊 [Google Analytics](https://analytics.google.com/) - Análise de dados

## 🛠️ Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta
cd amor-nunca-envelhece

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp env.example .env
# Edite o arquivo .env com suas configurações

# Execute em desenvolvimento
npm run dev
```

## 📋 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` baseado no `env.example`:

```env
# Supabase
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase

# Google Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Supabase

1. Crie uma conta no [Supabase](https://supabase.com/)
2. Crie um novo projeto
3. Copie a URL e a chave anônima para o arquivo `.env`

### Google Analytics

1. Crie uma conta no [Google Analytics](https://analytics.google.com/)
2. Crie uma nova propriedade
3. Copie o ID de rastreamento (G-XXXXXXXXXX) para o arquivo `.env`

## 🚀 Deploy

### Opção 1: Netlify (Recomendado)

```bash
# Instale o CLI do Netlify
npm install -g netlify-cli

# Faça login
netlify login

# Deploy
npm run build
netlify deploy --prod --dir=dist
```

### Opção 2: Vercel

```bash
# Instale o CLI do Vercel
npm install -g vercel

# Deploy
vercel --prod
```

### Opção 3: GitHub Pages

```bash
# Instale gh-pages
npm install -g gh-pages

# Deploy
npm run build
gh-pages -d dist
```

## 📊 Funcionalidades

- ✅ Landing page responsiva
- ✅ Integração com WhatsApp
- ✅ Autenticação com Supabase
- ✅ Google Analytics
- ✅ SEO otimizado
- ✅ Design moderno e acessível
- ✅ Formulários de contato
- ✅ Seções informativas
- ✅ Botão flutuante de WhatsApp

## 🎯 Conversão

O site está otimizado para conversão com:

- Botão WhatsApp fixo e flutuante
- Call-to-actions estratégicos
- Copywriting persuasivo
- Design emocional
- Formulários de captura de leads

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:

- 📱 Smartphones
- 📱 Tablets
- 💻 Desktops
- 💻 Laptops

## 🔧 Desenvolvimento

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview
npm run preview

# Lint
npm run lint
```

## 📈 Status do Projeto

### ✅ Fase 1 - Planejamento & Organização
- [x] Tecnologia base escolhida (React + TypeScript + Tailwind)
- [x] Identidade visual definida
- [x] WhatsApp Business configurado

### ✅ Fase 2 - Construção da Página
- [x] Estrutura HTML completa
- [x] CSS responsivo implementado
- [x] Botão WhatsApp funcional
- [x] Imagens e assets incluídos
- [x] Copywriting persuasivo

### ✅ Fase 3 - Lançamento Inicial
- [x] Configuração para deploy
- [x] Google Analytics integrado
- [x] Testes de responsividade

### 🔄 Fase 4 - Integrações Futuras
- [x] Supabase integrado (autenticação)
- [ ] Formulário de leads
- [ ] API de pagamento
- [ ] Sistema de CRM

### 📋 Fase 5 - Otimização e Prova Social
- [ ] Depoimentos reais
- [ ] Fotos reais
- [ ] FAQ
- [ ] Campanha Instagram
