import { Check, X } from "lucide-react";

const ServicesSection = () => {
  const services = [
    { service: "Enfermagem 24 horas", included: true },
    { service: "Alimentação balanceada", included: true },
    { service: "Higiene pessoal", included: true },
    { service: "Administração de medicamentos", included: true },
    { service: "Acompanhamento médico", included: true },
    { service: "Fisioterapia", included: true },
    { service: "Terapia ocupacional", included: true },
    { service: "Atividades recreativas", included: true },
    { service: "Lavanderia", included: true },
    { service: "Limpeza dos quartos", included: true },
    { service: "Monitoramento de saúde", included: true },
    { service: "Apoio psicológico", included: true },
    { service: "Transporte para consultas", included: false },
    { service: "Consultas médicas particulares", included: false },
    { service: "Medicamentos especiais", included: false }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Serviços 
              <span className="gradient-warm bg-clip-text text-transparent"> Oferecidos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça tudo que está incluso no nosso pacote de cuidados. 
              Transparência total para que você tenha a tranquilidade que merece.
            </p>
          </div>
          
          {/* Services Table */}
          <div className="bg-white rounded-2xl shadow-gentle overflow-hidden border border-border">
            <div className="px-8 py-6 bg-gradient-to-r from-gentle-lavender to-soft-peach">
              <h3 className="text-2xl font-heading font-bold text-deep-purple text-center">
                Pacote Completo de Cuidados
              </h3>
            </div>
            
            <div className="divide-y divide-border">
              {services.map((item, index) => (
                <div 
                  key={index}
                  className="px-8 py-4 flex items-center justify-between hover:bg-muted/50 transition-gentle"
                >
                  <span className="text-foreground font-medium">
                    {item.service}
                  </span>
                  
                  <div className="flex items-center">
                    {item.included ? (
                      <div className="flex items-center space-x-2 text-green-600">
                        <Check className="w-5 h-5" />
                        <span className="text-sm font-semibold">Incluído</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <X className="w-5 h-5" />
                        <span className="text-sm">Consultar</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="px-8 py-6 bg-muted/30">
              <p className="text-center text-sm text-muted-foreground italic">
                * Todos os serviços obrigatórios pela ANVISA + diferenciais exclusivos 
                para seu ente querido.
              </p>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 bg-gradient-to-br from-warm-orange/10 to-transparent rounded-2xl border border-warm-orange/20">
              <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                💰 Preços Transparentes
              </h4>
              <p className="text-muted-foreground">
                Sem surpresas ou custos ocultos. Valor fixo mensal que inclui 
                todos os serviços essenciais listados acima.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-deep-purple/10 to-transparent rounded-2xl border border-deep-purple/20">
              <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                📋 Avaliação Personalizada
              </h4>
              <p className="text-muted-foreground">
                Cada residente passa por avaliação para definir o plano de 
                cuidados mais adequado às suas necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;