import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface LeadFormData {
  nome: string;
  email: string;
  telefone: string;
  interesse: string;
  mensagem: string;
}

const LeadForm = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    nome: "",
    email: "",
    telefone: "",
    interesse: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simular envio (sem Supabase por enquanto)
      console.log("Dados do formulário:", formData);
      
      // Aguardar um pouco para simular processamento
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        interesse: "",
        mensagem: "",
      });

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Solicite Informações</CardTitle>
        <CardDescription className="text-center">
          Preencha o formulário e entraremos em contato em até 24 horas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo *</Label>
            <Input
              id="nome"
              type="text"
              value={formData.nome}
              onChange={(e) => handleInputChange('nome', e.target.value)}
              required
              placeholder="Seu nome completo"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone *</Label>
            <Input
              id="telefone"
              type="tel"
              value={formData.telefone}
              onChange={(e) => handleInputChange('telefone', e.target.value)}
              required
              placeholder="(11) 99999-9999"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interesse">Interesse *</Label>
            <Select
              value={formData.interesse}
              onValueChange={(value) => handleInputChange('interesse', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione seu interesse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visita">Agendar visita</SelectItem>
                <SelectItem value="informacoes">Mais informações</SelectItem>
                <SelectItem value="precos">Consultar preços</SelectItem>
                <SelectItem value="vaga">Verificar vaga</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea
              id="mensagem"
              value={formData.mensagem}
              onChange={(e) => handleInputChange('mensagem', e.target.value)}
              placeholder="Conte-nos mais sobre sua necessidade..."
              rows={3}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm; 