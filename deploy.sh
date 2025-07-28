#!/bin/bash

# Script de Deploy para Casa de Repouso
echo "🚀 Iniciando deploy da Casa de Repouso..."

# Verificar se as variáveis de ambiente estão configuradas
if [ ! -f .env ]; then
    echo "⚠️  Arquivo .env não encontrado. Copiando env.example..."
    cp env.example .env
    echo "📝 Configure as variáveis no arquivo .env antes de continuar"
    exit 1
fi

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Build do projeto
echo "🔨 Fazendo build do projeto..."
npm run build

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    echo "📁 Arquivos gerados na pasta dist/"
    echo ""
    echo "🌐 Para fazer deploy:"
    echo "1. Netlify: netlify deploy --prod --dir=dist"
    echo "2. Vercel: vercel --prod"
    echo "3. GitHub Pages: gh-pages -d dist"
    echo "4. Firebase: firebase deploy"
else
    echo "❌ Erro no build. Verifique os logs acima."
    exit 1
fi 