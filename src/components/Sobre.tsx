type Props = { onQuote: (event?: string) => void };

const inspirationPhotos = {
  celebration: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85',
  table: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85',
};

export default function Sobre({ onQuote }: Props) {
  return (
    <section id="sobre" className="bg-white py-14 text-charcoal-900 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden lg:grid-cols-[.95fr_1fr_1fr]">
          <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden bg-[#faf8f6] px-7 py-9 sm:min-h-[500px] sm:px-10 sm:py-11 lg:min-h-[620px]">
            <div className="relative z-10">
              <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[.28em] text-cabana-500">Espaço Alta Cabana · Santos</span>
              <h2 className="max-w-sm font-sans text-4xl font-normal leading-[1.04] tracking-[-.055em] text-charcoal-900 sm:text-5xl lg:text-[54px]">Perfeição,<br />Requinte e<br />Sofisticação</h2>
            </div>
            <svg aria-hidden="true" viewBox="0 0 420 260" fill="none" className="pointer-events-none absolute -bottom-1 left-0 w-full text-charcoal-900">
              <path d="M-26 55C39 158 109 177 147 107C190 28 138-4 121 53C99 129 151 265 267 254C321 249 358 216 446 168" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            <p className="relative z-10 mt-36 max-w-xs text-sm text-charcoal-900">O Espaço Alta Cabana foi projetado para ser cenário das mais diversas celebrações.</p>
          </div>

          <div className="relative min-h-[470px] overflow-hidden lg:min-h-[620px]">
            <img src={inspirationPhotos.celebration} alt="Celebração elegante em um espaço decorado para festa" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>

          <div className="grid grid-rows-[240px_auto] sm:grid-rows-[300px_auto] lg:grid-rows-[.95fr_1.05fr]">
            <div className="overflow-hidden">
              <img src={inspirationPhotos.table} alt="Mesa posta para uma celebração no Espaço Alta Cabana" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col justify-center px-7 py-8 sm:px-9 sm:py-9">
              <span className="mb-3 text-[10px] font-semibold uppercase tracking-[.26em] text-cabana-500">Nossa história</span>
              <h3 className="mb-4 font-sans text-3xl font-normal leading-tight tracking-[-.045em] text-charcoal-900 sm:text-[34px]">Amor celebrado com requinte.</h3>
              <p className="mb-3 text-sm leading-6 text-zinc-700">São mais de 20 anos dedicados à gastronomia, começando com a produção própria de bolos, doces e salgados. O reconhecimento do nosso trabalho nos transformou em buffet e nos levou a realizar a festa completa dos nossos clientes.</p>
              <p className="text-sm leading-6 text-zinc-700">Primeiro como <strong className="font-semibold text-charcoal-900">Palha de Trigo</strong>, nossa marca gastronômica; anos depois, formamos o Espaço Alta Cabana. Nossa estrutura moderna e uma equipe cuidadosa criam festas surpreendentes, com o aconchego que só a Cabana tem.</p>
            </div>
          </div>
        </div>

        <div id="o-espaco" className="grid scroll-mt-24 gap-8 border-t border-zinc-200 pt-9 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:pt-11">
          <article>
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[.24em] text-cabana-500">01 · Nosso espaço</span>
            <h3 className="mb-3 font-serif text-2xl text-charcoal-900">Arquitetura que acolhe</h3>
            <p className="mb-4 text-sm leading-6 text-zinc-600">A fachada imponente, o amplo salão principal e a pista de dança suspensa expressam nossa identidade: <strong className="font-semibold text-charcoal-900">ALTA</strong> pela excelência e por sermos tendência; <strong className="font-semibold text-charcoal-900">CABANA</strong> por aproximar quem mais amamos.</p>
            <p className="text-sm leading-6 text-zinc-600">A iluminação cria uma atmosfera elegante e intimista, enquanto a madeira combina o rústico ao design moderno e confortável.</p>
          </article>

          <article>
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[.24em] text-cabana-500">02 · Conforto e estrutura</span>
            <h3 className="mb-3 font-serif text-2xl text-charcoal-900">Cada detalhe pensado</h3>
            <ul className="mb-4 space-y-1.5 text-sm leading-6 text-zinc-600">
              <li>4 mesas para até 10 lugares e 8 mesas para até 6 lugares;</li>
              <li>6 mesas removíveis para até 8 lugares, além de bistrôs, puffs, cadeiras e sofás;</li>
              <li>Bar e lounge, área externa arejada, banheiros amplos, fraldário e acessibilidade;</li>
              <li>Pista suspensa integrada ao salão, telão retrátil, TVs e som ambiente.</li>
            </ul>
            <p className="text-sm leading-6 text-zinc-600">A área externa, com floreiras e mobiliário casual, é perfeita para conversas descontraídas.</p>
          </article>

          <article>
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[.24em] text-cabana-500">03 · Nossas festas</span>
            <h3 className="mb-3 font-serif text-2xl text-charcoal-900">Celebrações do seu jeito</h3>
            <p className="mb-4 text-sm leading-6 text-zinc-600">Um sonho de festa se realiza aqui: recebemos até <strong className="font-semibold text-charcoal-900">150 pessoas</strong> sentadas em eventos sociais, até <strong className="font-semibold text-charcoal-900">180 lugares</strong> em formato formal e até <strong className="font-semibold text-charcoal-900">240 convidados</strong> em eventos lounge.</p>
            <p className="mb-6 text-sm leading-6 text-zinc-600">Também realizamos eventos parciais e intimistas, com pacotes exclusivos para grupos de 40 a 60 pessoas — ideais para reuniões, palestras e comemorações especiais.</p>
            <button onClick={() => onQuote()} className="group inline-flex min-h-[48px] items-center gap-5 border border-zinc-400 px-5 text-[9px] font-semibold uppercase tracking-[.15em] text-charcoal-900 transition hover:border-cabana-500 hover:bg-cabana-500 hover:text-white sm:text-[10px]">Agende uma visita <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-1">→</span></button>
          </article>
        </div>

        <div className="mt-9 border-t border-zinc-200 pt-6 text-center sm:mt-11">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-charcoal-900">Um novo conceito em festas</p>
          <p className="mx-auto mt-2 max-w-3xl font-serif text-lg leading-relaxed text-zinc-600 sm:text-xl">Organizamos cada detalhe do seu evento com alta qualidade, pontualidade e muito amor.</p>
        </div>
      </div>
    </section>
  );
}
