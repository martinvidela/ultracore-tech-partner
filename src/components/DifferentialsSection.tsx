import { Card, CardContent } from "@/components/ui/card";
import { Phone, Eye, FileText, Users, Building } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Phone,
      title: "Atención Personalizada",
      description: "Sin menús automáticos. Habla directamente con nuestros especialistas."
    },
    {
      icon: Eye,
      title: "Enfoque Preventivo",
      description: "Anticipamos problemas antes de que afecten tu operación."
    },
    {
      icon: FileText,
      title: "Transparencia Total",
      description: "Reportes claros y comunicación constante sobre el estado de tus sistemas."
    },
    {
      icon: Users,
      title: "Equipos Especializados",
      description: "Profesionales certificados en las últimas tecnologías."
    },
    {
      icon: Building,
      title: "Experiencia Multisectorial",
      description: "Finanzas, salud, retail, industria. Conocemos tu sector."
    }
  ];

  return (
    <section className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ventajas </span>
            <span className="text-tech-blue">Competitivas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Lo que nos diferencia en el mercado de soluciones tecnológicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => {
            const IconComponent = differential.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-tech-blue/20 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {differential.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;