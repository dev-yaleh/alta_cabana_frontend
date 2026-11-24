type Props = { onQuote: (event?: string) => void };
type EventCard = { title: string; subtitle: string; image: string; alt: string; featured?: boolean; formEvent: string; marker: string };

const events: EventCard[] = [
  {
    title: '15 Anos / Debutante', subtitle: 'Noites de sonho', image: 'photo-1519225421980-715cb0215aed',
    alt: 'Festa de 15 anos com decoração e iluminação especial', featured: true, formEvent: 'Debutante / 15 Anos', marker: '15',
  },
  {
    title: 'Casamento e Mini-Wedding', subtitle: 'Duas vidas, uma história', image: 'photo-1583939003579-730e3918a45a',
    alt: 'Celebração de casamento no Espaço Alta Cabana', formEvent: 'Casamento', marker: '♡',
  },
  {
    title: 'Aniversários e Bodas', subtitle: 'Cada ano, uma celebração', image: 'photo-1530103862676-de8c9debad1d',
    alt: 'Festa de aniversário ou bodas decorada', formEvent: 'Aniversário / Comemoração', marker: '+1',
  },
  {
    title: 'Corporativos', subtitle: 'Onde decisões acontecem', image: 'photo-1511578314322-379afb476865',
    alt: 'Evento corporativo em espaço para celebrações', formEvent: 'Corporativo', marker: 'Co.',
  },
];

export default function Eventos({ onQuote }: Props) {
  const [featured, ...supporting] = events;

  const openEvent = (event: EventCard) => onQuote(event.formEvent);

  return (
    <section id="eventos" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
          <h2 className="font-sans text-3xl font-normal tracking-tight text-charcoal-900 sm:text-4xl lg:text-[42px]">
            Tipos <span className="text-zinc-400">de Eventos.</span>
          </h2>
          <a href="#orcamento" className="mb-1 inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[.24em] text-zinc-500 transition-colors hover:text-cabana-500 sm:text-xs">
            Planeje seu evento <span aria-hidden="true">→</span>
          </a>
        </header>

        <div className="grid grid-cols-1 gap-3 md:min-h-[640px] md:grid-cols-[1.08fr_.92fr] md:grid-rows-3">
          <EventTile event={featured} onClick={() => openEvent(featured)} featured />
          <div className="grid grid-cols-1 gap-3 md:row-span-3 md:grid-rows-3">
            {supporting.map(event => <EventTile key={event.title} event={event} onClick={() => openEvent(event)} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventTile({ event, onClick, featured = false }: { event: EventCard; onClick: () => void; featured?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative isolate block w-full overflow-hidden rounded-none text-left text-white shadow-sm ${featured ? 'min-h-[420px] md:row-span-3 md:min-h-0' : 'min-h-[148px] md:min-h-0'}`}
      aria-label={`${event.title}: ${event.subtitle}`}
    >
      <img
        src={`https://images.unsplash.com/${event.image}?auto=format&fit=crop&w=${featured ? 1200 : 900}&q=85`}
        alt={event.alt}
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/35 to-black/10 transition-colors duration-500 group-hover:from-black/75 group-hover:via-black/45" />
      <span className={`absolute left-6 top-6 text-[10px] font-semibold uppercase tracking-[.25em] text-white/75 sm:left-7 sm:top-7 ${featured ? 'inline-flex' : 'hidden'}`}>
        II · Em destaque
      </span>
      <span aria-hidden="true" className={`absolute right-6 font-light leading-none text-white/65 transition-transform duration-300 group-hover:scale-110 sm:right-8 ${featured ? 'top-5 text-2xl sm:top-6' : 'top-1/2 -translate-y-1/2 text-3xl'}`}>
        {event.marker}
      </span>
      <span className={`absolute block ${featured ? 'inset-x-0 bottom-0 p-6 sm:p-8' : 'left-0 top-1/2 max-w-[82%] -translate-y-1/2 p-5 sm:p-6'}`}>
        <span className={`block font-sans font-normal leading-tight tracking-tight text-white ${featured ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-[28px]'}`}>
          {event.title}
        </span>
        <span className="mt-2 block text-sm font-normal text-white/80 sm:text-[15px]">
          {event.subtitle}
        </span>
      </span>
    </button>
  );
}




