import { useState } from 'react';

const testimonials = [
  { quote: 'Escolher o Espaço Alta Cabana foi a melhor decisão do nosso casamento. Desde a primeira visita nos apaixonamos pela fachada em madeira, pelo cuidado da equipe e pela gastronomia impecável. Nossos convidados elogiam até hoje!', author: 'Ana & Sandivon', event: 'Casamento · Espaço Alta Cabana', image: 'photo-1583939003579-730e3918a45a' },
  { quote: 'A festa de 15 anos da nossa filha foi simplesmente mágica. A iluminação cênica, a pista de dança e o atendimento atencioso de cada garçom fizeram toda a diferença para vivermos uma noite sem preocupações.', author: 'Família da Gabryella', event: '15 Anos · Santos/SP', image: 'photo-1519225421980-715cb0215aed' },
  { quote: 'Queríamos um Mini Wedding acolhedor e elegante em Santos, e encontramos no Alta Cabana exatamente o que sonhávamos. O buffet próprio surpreendeu a todos pelo sabor e apresentação.', author: 'Emilly & Igor', event: 'Mini Wedding · Espaço Alta Cabana', image: 'photo-1532712938310-34cb3982ef74' },
];

export default function Feedback() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  const change = (direction: number) => setIndex((index + direction + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="bg-charcoal-900 px-6 py-16 text-white sm:px-12 sm:py-20 lg:py-24">
      <div className="reveal mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <span className="mb-6 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[.3em] text-white/80"><span className="h-px w-9 bg-cabana-500" />Histórias que ficam<span className="h-px w-9 bg-cabana-500" /></span>
          <h2 className="mb-7 font-serif text-4xl font-normal leading-[1.02] tracking-[-.045em] text-white sm:text-5xl lg:text-[58px]">Cada celebração deixa uma memória.</h2>
          <div className="mb-5 flex gap-1 text-xs text-cabana-500" aria-label="5 de 5 estrelas">{Array.from({ length: 5 }, (_, star) => <i key={star} className="fa-solid fa-star" aria-hidden="true" />)}</div>
          <blockquote className="mb-7 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">“{item.quote}”</blockquote>

          <div className="mb-8 w-full max-w-2xl border-y border-white/15 py-5">
            <p className="font-serif text-lg text-white">{item.author}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[.17em] text-zinc-400">{item.event}</p>
          </div>

          <div className="flex w-full max-w-2xl items-center justify-between">
            <span className="text-[10px] font-medium tracking-[.16em] text-zinc-400">0{index + 1} <span className="mx-1 text-cabana-500">/</span> 0{testimonials.length}</span>
            <div className="flex gap-2">
              <button aria-label="Depoimento anterior" onClick={() => change(-1)} className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:border-cabana-500 hover:bg-cabana-500"><i className="fa-solid fa-arrow-left" aria-hidden="true" /></button>
              <button aria-label="Próximo depoimento" onClick={() => change(1)} className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:border-cabana-500 hover:bg-cabana-500"><i className="fa-solid fa-arrow-right" aria-hidden="true" /></button>
            </div>
          </div>
      </div>
    </section>
  );
}
