import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, Database, Code, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Server,
      title: "Infraestructura IT",
      items: [
        "Diseño y mantenimiento de redes y servidores",
        "Migraciones (VMware, Proxmox, nube)",
        "Monitoreo proactivo y soporte remoto"
      ]
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      items: [
        "Auditorías y hardening",
        "Protección contra ransomware",
        "Firewalls, VPNs, monitoreo (Prometheus, Grafana)"
      ]
    },
    {
      icon: Database,
      title: "Backups",
      items: [
        "Locales y en la nube",
        "Esquema 3-2-1 y restauración",
        "Gestión de versiones y recuperación ante desastres"
      ]
    },
    {
      icon: Code,
      title: "Desarrollo y Automatización",
      items: [
        "Aplicaciones web (React, Laravel, Python)",
        "APIs, bots con IA, integraciones",
        "Optimización de procesos"
      ]
    },
    {
      icon: Users,
      title: "Consultoría IT",
      items: [
        "Asesoramiento y estrategia",
        "Evaluación de riesgos",
        "Capacitación de equipos"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Servicios </span>
            <span className="text-tech-blue">Principales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluciones tecnológicas integrales para impulsar el crecimiento de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/20 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-tech-blue" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;