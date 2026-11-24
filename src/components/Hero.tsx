import { useEffect, useState } from 'react';
import fachadaAltaCabana from '../assets/alta-cabana-fachada.png';
import salaoEventos from '../assets/hero-salao-eventos.png';
import mesaDoces from '../assets/hero-mesa-doces.png';

const photos = [
  { src: fachadaAltaCabana, alt: 'Fachada iluminada do Espaço Alta Cabana em Santos' },
  { src: salaoEventos, alt: 'Salão do Espaço Alta Cabana preparado para um evento' },
  { src: mesaDoces, alt: 'Mesa de doces decorada para uma celebração no Espaço Alta Cabana' },
];

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide(value => (value + 1) % photos.length), 12000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section id="inicio" aria-label="Espaço Alta Cabana" className="relative min-h-screen overflow-hidden bg-charcoal-950">
        {photos.map((photo, index) => (
          <div key={photo.src} className={`absolute inset-0 transition-opacity duration-[1500ms] ${slide === index ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={photo.src}
              alt={photo.alt}
              className={`h-full w-full object-cover transition-transform duration-[9000ms] ${slide === index ? 'scale-110' : 'scale-100'}`}
            />
          </div>
        ))}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-charcoal-950/35" />
        <a href="#eventos" className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/70 transition-colors hover:text-cabana-500">
          
          <i className="fa-solid fa-chevron-down relative -top-[35px]
           hero-discover-arrow text-[20px]" aria-hidden="true" />
        </a>
        <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-3">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setSlide(index)}
              aria-label={`Exibir imagem ${index + 1}`}
              aria-pressed={slide === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${slide === index ? 'w-8 bg-cabana-500' : 'w-3 bg-white/55 hover:bg-white/90'}`}
            />
          ))}
        </div>
      </section>
      
    </>
  );
}













