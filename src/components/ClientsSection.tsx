import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const ClientsSection = () => {
  const { t } = useTranslation();

  const clients = [
    { name: 'Cryptostoker' },
    { name: 'CleanCity' },
    { name: 'FullPagos' },
    { name: 'Marelli SA' },
    { name: 'Coopar', subtitle: 'Cooperativa de provisión de obras y servicios públicos de Arribeños Ltda.' },
    { name: 'Servicios Exequiales Cepar SA' },
    { name: 'Aires de Paz' },
    { name: 'Seinoa SRL' },
    { name: 'Kinap' },
    { name: 'AFIP' },
    { name: 'Traslados Exclusivos SRL' },
    { name: 'Opain', subtitle: 'Aeropuerto El Dorado Bogotá - Colombia' },
    { name: 'Qonteo' },
  ];

  // Group clients into chunks of 4 for each slide
  const chunkSize = 4;
  const clientChunks = [];
  for (let i = 0; i < clients.length; i += chunkSize) {
    clientChunks.push(clients.slice(i, i + chunkSize));
  }

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">{t('clients.title1')} </span>
            <span className="gradient-text">{t('clients.title2')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('clients.description')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {clientChunks.map((chunk, chunkIndex) => (
                <CarouselItem key={chunkIndex}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {chunk.map((client, index) => (
                      <div
                        key={index}
                        className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center justify-center min-h-[140px] text-center"
                      >
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {client.name}
                        </h3>
                        {client.subtitle && (
                          <p className="text-xs text-muted-foreground mt-2 leading-tight">
                            {client.subtitle}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-border hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="border-border hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
