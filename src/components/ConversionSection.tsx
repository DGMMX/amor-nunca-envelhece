import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Calendar } from "lucide-react";
import LeadForm from "./LeadForm";

const ConversionSection = () => {
  const handleWhatsAppClick = () => {
    const phone = "5511962157712"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de saber mais sobre a Casa de Repouso e agendar uma visita.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Quer saber mais ou 
              <span className="gradient-warm bg-clip-text text-transparent"> agendar uma visita?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos aqui para esclarecer todas as suas dúvidas e mostrar como 
              podemos cuidar do seu ente querido com todo o amor que ele merece.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* WhatsApp CTA */}
            <div className="space-y-8">
              <div className="p-8 bg-white rounded-2xl shadow-gentle border border-border">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      Fale Conosco Agora
                    </h3>
                    <p className="text-muted-foreground">
                      Atendimento rápido e personalizado via WhatsApp. 
                      Nossa equipe está pronta para ajudar você.
                    </p>
                  </div>
                  
                  <Button 
                    variant="whatsapp" 
                    size="lg" 
                    onClick={handleWhatsAppClick}
                    className="w-full text-lg py-6"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chamar no WhatsApp
                  </Button>
                  
                  <div className="text-xs text-muted-foreground">
                    ⚡ Resposta em até 30 minutos • Seg à Sáb das 8h às 18h
                  </div>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl">
                  <Phone className="w-5 h-5 text-warm-orange" />
                  <div>
                    <div className="font-semibold text-foreground">Telefone</div>
                    <div className="text-sm text-muted-foreground">(11) 962157712</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl">
                  <Calendar className="w-5 h-5 text-warm-orange" />
                  <div>
                    <div className="font-semibold text-foreground">Horário de Visitas</div>
                    <div className="text-sm text-muted-foreground">Seg à Sáb • 9h às 17h</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl">
                  <MapPin className="w-5 h-5 text-warm-orange" />
                  <div>
                    <div className="font-semibold text-foreground">Rua professor Guilherme belfort Sabino - 650</div>
                    <div className="text-sm text-muted-foreground">São Paulo - SP</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 bg-white rounded-2xl shadow-gentle border border-border">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;