const highlights = [
  'Cardápios para cada estilo de festa',
  'Bebidas conforme o pacote escolhido',
  'Bar, drinks e coquetéis',
];

export default function Cardapio() {
  return (
    <section id="gastronomia" className="grid bg-[#fcfbf9] text-charcoal-900 lg:min-h-[650px] lg:grid-cols-2">
      <div className="reveal-left relative min-h-[380px] overflow-hidden sm:min-h-[520px] lg:min-h-[650px]">
        <img
          src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1500&q=90"
          alt="Mesa de buffet com pratos preparados para uma celebração"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="reveal-right flex items-center justify-center px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-24">
        <div className="w-full max-w-[620px]">
          <span className="mb-6 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[.3em] text-charcoal-900"><span className="h-px w-9 bg-cabana-500" />Sabores para celebrar</span>
          <h2 className="mb-7 font-serif text-4xl font-normal leading-[1.02] tracking-[-.045em] text-charcoal-900 sm:text-5xl lg:text-[58px]">Gastronomia também faz parte da memória.</h2>
          <p className="mb-7 text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8"><strong className="font-semibold text-charcoal-900">Nossa gastronomia</strong> é feita em cozinha própria e alia sofisticação, frescor e versatilidade para se adequar ao perfil da sua festa e dos seus convidados. Um buffet completo e acolhedor, ideal para casamentos, mini-weddings, festas de 15 anos, bodas, formaturas e eventos corporativos.</p>

          <ul className="mb-8 border-y border-zinc-300/80">
            {highlights.map((item, index) => (
              <li key={item} className="flex min-h-16 items-center gap-5 border-b border-zinc-300/80 last:border-b-0 sm:min-h-[64px]">
                <span className="font-sans text-[9px] font-medium tracking-wider text-cabana-500">0{index + 1}</span>
                <span className="font-serif text-base text-charcoal-900 sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <a href="#orcamento" className="group inline-flex min-h-[54px] items-center justify-between gap-8 border border-zinc-400 px-5 text-[9px] font-semibold uppercase tracking-[.15em] text-charcoal-900 transition hover:border-cabana-500 hover:bg-cabana-500 hover:text-white sm:px-6 sm:text-[10px]">
            Receber opções para meu evento
            <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
