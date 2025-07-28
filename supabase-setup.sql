-- Script de configuração do Supabase para Casa de Repouso
-- Execute este script no SQL Editor do Supabase

-- Criar tabela de leads
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  interesse TEXT NOT NULL,
  mensagem TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_interesse ON leads(interesse);

-- Habilitar Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de leads (público)
CREATE POLICY "Permitir inserção de leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Política para permitir leitura apenas para usuários autenticados
CREATE POLICY "Permitir leitura de leads para usuários autenticados" ON leads
  FOR SELECT USING (auth.role() = 'authenticated');

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at
CREATE TRIGGER update_leads_updated_at 
  BEFORE UPDATE ON leads 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Comentários para documentação
COMMENT ON TABLE leads IS 'Tabela para armazenar leads da Casa de Repouso';
COMMENT ON COLUMN leads.nome IS 'Nome completo do lead';
COMMENT ON COLUMN leads.email IS 'E-mail do lead';
COMMENT ON COLUMN leads.telefone IS 'Telefone do lead';
COMMENT ON COLUMN leads.interesse IS 'Tipo de interesse (visita, informacoes, precos, vaga, outro)';
COMMENT ON COLUMN leads.mensagem IS 'Mensagem opcional do lead'; 