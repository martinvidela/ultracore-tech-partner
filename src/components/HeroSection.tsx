import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Shield, Cpu, Cloud, CheckCircle, Server, Lock } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const carouselSlides = [
    {
      title: "UltraCore, tu socio tecnológico para crecer sin límites",
      subtitle: "Impulsamos la transformación digital de tu negocio con soluciones integrales: desarrollo de software, infraestructura IT, automatización y más.",
      description: "Tecnología estratégica, acompañamiento real y resultados medibles.",
      ctaText: "Conocé cómo podemos ayudarte",
      ctaAction: () => scrollToSection('servicios'),
      icons: [Shield, Cpu, Cloud]
    },
    {
      title: "Tus datos siempre protegidos. Backups seguros, automáticos y accesibles.",
      subtitle: "Evitá pérdidas costosas con nuestras soluciones de respaldo inteligente.",
      description: "Copias de seguridad diarias, automáticas y protegidas contra fallos, robos o errores humanos.",
      ctaText: "Resguardá tus datos ahora",
      ctaAction: () => scrollToSection('contacto'),
      features: [
        "Backups en la nube y físicos",
        "Recuperación inmediata", 
        "Seguridad multicapa contra amenazas, ransomware y errores humanos"
      ],
      icons: [Shield, Server, Lock]
    },
    {
      title: "Tu infraestructura IT, más segura, rápida y eficiente.",
      subtitle: "Gestionamos, protegemos y optimizamos tus sistemas para que tu empresa nunca se detenga.",
      description: "Ciberseguridad, soporte y tecnología que acompañan tu crecimiento. Soluciones flexibles y escalables.",
      ctaText: "Optimizá tu infraestructura",
      ctaAction: () => scrollToSection('servicios'),
      icons: [Server, Shield, Cpu]
    }
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technology Infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 w-full">
        <Carousel 
          className="w-full max-w-6xl mx-auto"
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {carouselSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="text-center animate-fade-in min-h-[80vh] flex flex-col justify-center">
                  {/* Floating Tech Icons */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    {slide.icons.map((Icon, iconIndex) => (
                      <Icon 
                        key={iconIndex}
                        className={`absolute h-8 w-8 md:h-10 md:w-10 text-tech-blue opacity-60 animate-float ${
                          iconIndex === 0 ? 'top-20 left-10' : 
                          iconIndex === 1 ? 'top-40 right-20' : 
                          'bottom-40 left-20'
                        }`}
                        style={{ animationDelay: `${iconIndex * 2}s` }}
                      />
                    ))}
                  </div>

                  <div className="relative z-20">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
                      <span className="text-foreground">{slide.title.split(' ')[0]} </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">
                        {slide.title.split(' ').slice(1).join(' ')}
                      </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-4xl mx-auto">
                      <span className="font-semibold text-foreground">{slide.subtitle}</span>
                    </p>

                    {slide.features && (
                      <div className="mb-6 max-w-3xl mx-auto">
                        {slide.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center gap-2 text-foreground mb-2">
                            <CheckCircle className="h-5 w-5 text-tech-blue" />
                            <span className="text-sm md:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                      <Button 
                        variant="tech" 
                        size="xl"
                        onClick={slide.ctaAction}
                        className="group"
                      >
                        {slide.ctaText}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        variant="outline_tech" 
                        size="xl"
                        onClick={() => scrollToSection('contacto')}
                      >
                        Solicitar Reunión
                      </Button>
                    </div>

                    {/* Trust Indicators - Solo en el primer slide */}
                    {index === 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-tech-blue mb-2">10+</div>
                          <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-tech-blue mb-2">24/7</div>
                          <div className="text-sm text-muted-foreground">Monitoreo Continuo</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-tech-blue mb-2">100%</div>
                          <div className="text-sm text-muted-foreground">Atención Personalizada</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-background/10 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white" />
          <CarouselNext className="right-4 bg-background/10 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white" />
        </Carousel>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-tech-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-tech-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;