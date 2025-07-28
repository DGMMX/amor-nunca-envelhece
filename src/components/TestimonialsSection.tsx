import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      relation: "Filha da Sra. Ana",
      photo: "👩🏻‍💼",
      text: "Minha mãe encontrou aqui mais que cuidados, encontrou uma nova família. A equipe é extremamente carinhosa e profissional. Recomendo de olhos fechados.",
      rating: 5
    },
    {
      name: "João Santos",
      relation: "Filho do Sr. Carlos",
      photo: "👨🏻‍💼",
      text: "A Casa de Repouso superou todas as nossas expectativas. Meu pai está mais alegre e bem cuidado. A estrutura é impecável e o atendimento é excepcional.",
      rating: 5
    },
    {
      name: "Fernanda Costa",
      relation: "Neta da Sra. Rosa",
      photo: "👩🏻‍🎓",
      text: "Ver minha avó sorrindo novamente não tem preço. Aqui ela participa de atividades, fez amigos e recebe todo o carinho que merece. Gratidão eterna!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Histórias Reais, 
              <span className="gradient-warm bg-clip-text text-transparent"> Corações Tocados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nada nos deixa mais felizes que ver famílias tranquilas e idosos sorridentes. 
              Confira alguns depoimentos de quem confia em nosso trabalho.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl border border-border shadow-gentle hover:shadow-warm transition-gentle"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-warm-orange" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warm-orange text-warm-orange" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gentle-lavender to-soft-peach rounded-full flex items-center justify-center text-2xl">
                    {testimonial.photo}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.relation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust Badge */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-gentle-lavender to-soft-peach rounded-full">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warm-orange text-warm-orange" />
                ))}
              </div>
              <span className="font-semibold text-deep-purple">
                5.0 estrelas • Baseado em avaliações reais
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;