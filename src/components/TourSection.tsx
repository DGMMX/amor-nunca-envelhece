import { Button } from "@/components/ui/button";
import { Camera, Eye, Calendar } from "lucide-react";
import facilityImage from "@/assets/facility-interior.jpg";

const TourSection = () => {
  const handleScheduleVisit = () => {
    const phone = "5511999999999"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de agendar uma visita à Casa de Repouso.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Conheça Nosso 
              <span className="gradient-warm bg-clip-text text-transparent"> Espaço</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos finalizando os toques finais para oferecer o melhor ambiente possível. 
              Em breve, você poderá conhecer cada canto da Casa de Repouso.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="relative">
              <img 
                src={facilityImage} 
                alt="Interior aconchegante da Casa de Repouso"
                className="w-full h-[500px] object-cover rounded-2xl shadow-warm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/30 to-transparent rounded-2xl"></div>
              
              {/* Coming Soon Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                <span className="text-sm font-semibold text-deep-purple">
                  🚧 Em preparação
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-heading font-bold text-foreground">
                  Ambiente Pensado com Carinho
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cada detalhe está sendo cuidadosamente planejado para proporcionar 
                  conforto, segurança e bem-estar. Estamos criando um verdadeiro lar 
                  para nossos residentes.
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-warm-orange rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Tour Virtual</h4>
                    <p className="text-sm text-muted-foreground">Conheça nossos espaços em 360°</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-deep-purple rounded-lg flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Galeria de Fotos</h4>
                    <p className="text-sm text-muted-foreground">Veja cada ambiente em detalhes</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-warm-orange rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Visita Presencial</h4>
                    <p className="text-sm text-muted-foreground">Agende e venha conhecer pessoalmente</p>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="pt-6">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleScheduleVisit}
                  className="w-full sm:w-auto"
                >
                  <Calendar className="w-5 h-5" />
                  Agendar Visita
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  💡 <strong>Dica:</strong> As visitas podem ser agendadas de segunda a sábado, 
                  das 9h às 17h. Nossa equipe ficará feliz em recebê-los!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;