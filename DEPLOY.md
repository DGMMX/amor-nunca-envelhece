# 🚀 Guia de Deploy - Casa de Repouso

## 📋 Pré-requisitos

- Conta no [Supabase](https://supabase.com/)
- Conta no [Google Analytics](https://analytics.google.com/)
- Conta em uma plataforma de deploy (Netlify, Vercel, etc.)

## 🔧 Configuração do Supabase

### 1. Criar projeto no Supabase
1. Acesse [supabase.com](https://supabase.com/)
2. Clique em "New Project"
3. Escolha sua organização
4. Digite um nome para o projeto (ex: "casa-repouso")
5. Escolha uma senha forte para o banco de dados
6. Escolha uma região (recomendo São Paulo)
7. Clique em "Create new project"

### 2. Configurar banco de dados
1. No painel do Supabase, vá para "SQL Editor"
2. Clique em "New query"
3. Cole o conteúdo do arquivo `supabase-setup.sql`
4. Clique em "Run" para executar o script

### 3. Obter credenciais
1. No painel do Supabase, vá para "Settings" > "API"
2. Copie a "Project URL"
3. Copie a "anon public" key
4. Crie um arquivo `.env` na raiz do projeto com:

```env
VITE_SUPABASE_URL=sua_url_do_projeto
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
```

## 📊 Configuração do Google Analytics

### 1. Criar propriedade
1. Acesse [analytics.google.com](https://analytics.google.com/)
2. Clique em "Start measuring"
3. Configure sua conta
4. Digite um nome para a propriedade (ex: "Casa de Repouso")
5. Escolha fuso horário e moeda
6. Clique em "Next"
7. Configure informações do negócio
8. Clique em "Create"

### 2. Obter ID de rastreamento
1. Na propriedade criada, vá para "Admin" > "Data Streams"
2. Clique em "Web"
3. Digite o URL do seu site
4. Digite um nome para o stream
5. Clique em "Create stream"
6. Copie o "Measurement ID" (formato: G-XXXXXXXXXX)

### 3. Atualizar no projeto
1. Abra o arquivo `index.html`
2. Substitua `G-XXXXXXXXXX` pelo seu ID real em duas linhas:
   - Linha com `src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"`
   - Linha com `gtag('config', 'G-XXXXXXXXXX');`

## 🌐 Deploy

### Opção 1: Netlify (Recomendado)

```bash
# Instalar CLI do Netlify
npm install -g netlify-cli

# Fazer login
netlify login

# Build do projeto
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Opção 2: Vercel

```bash
# Instalar CLI do Vercel
npm install -g vercel

# Deploy
vercel --prod
```

### Opção 3: GitHub Pages

```bash
# Instalar gh-pages
npm install -g gh-pages

# Build
npm run build

# Deploy
gh-pages -d dist
```

## 🔍 Testes Pós-Deploy

### 1. Testar funcionalidades básicas
- [ ] Site carrega corretamente
- [ ] Design responsivo funciona
- [ ] Botão WhatsApp funciona
- [ ] Formulário de contato funciona

### 2. Testar integrações
- [ ] Supabase conecta corretamente
- [ ] Google Analytics registra acessos
- [ ] Leads são salvos no banco

### 3. Testar SEO
- [ ] Meta tags estão corretas
- [ ] Open Graph funciona
- [ ] Site é indexável

## 📱 Configuração do WhatsApp

### 1. Atualizar número do WhatsApp
1. Abra os arquivos:
   - `src/components/Header.tsx`
   - `src/components/WhatsAppFloat.tsx`
   - `src/components/ConversionSection.tsx`
2. Substitua `"5511999999999"` pelo número real
3. Formato: `"5511XXXXXXXXX"` (apenas números)

### 2. Personalizar mensagens
1. Nos mesmos arquivos, edite as mensagens:
   - `"Olá! Gostaria de saber mais sobre a Casa de Repouso."`
   - Personalize conforme sua necessidade

## 🔧 Manutenção

### Atualizações regulares
- [ ] Verificar leads no Supabase
- [ ] Analisar dados do Google Analytics
- [ ] Atualizar conteúdo conforme necessário
- [ ] Fazer backup do banco de dados

### Monitoramento
- [ ] Configurar alertas de erro
- [ ] Monitorar performance
- [ ] Verificar uptime do site

## 🆘 Suporte

Se encontrar problemas:

1. **Erro de build:** Verifique se todas as dependências estão instaladas
2. **Erro de Supabase:** Verifique as credenciais no arquivo `.env`
3. **Erro de Google Analytics:** Verifique o ID de rastreamento
4. **Erro de deploy:** Verifique se a pasta `dist/` foi gerada

## 📞 Contato

Para suporte técnico ou dúvidas sobre o projeto, entre em contato através do WhatsApp configurado no site. 