const navigation = [
  ['O Espaço', '#o-espaco'],
  ['Tipos de Eventos', '#eventos'],
  ['Gastronomia', '#gastronomia'],
  ['Depoimentos', '#depoimentos'],
];

const celebrations = [
  'Casamentos & Mini Weddings',
  'Festas de 15 Anos / Debutantes',
  'Bodas de Casamento',
  'Aniversários & Formaturas',
  'Eventos Corporativos',
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-950 pb-12 pt-20 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#inicio" className="mb-6 inline-flex items-center gap-3.5" aria-label="Espaço Alta Cabana - início">
              <span className="flex h-11 w-11 items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 120 110" className="h-full w-full" fill="none">
                  <path d="M12 62 L60 14 L108 62" stroke="#FFFFFF" strokeWidth="11" strokeLinecap="square" />
                  <path d="M60 40 L34 66 L60 92" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="square" />
                  <rect x="62" y="48" width="24" height="24" transform="rotate(45 62 48)" fill="#FF7826" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="pl-0.5 font-condensed text-[10px] font-bold uppercase tracking-[.28em] text-cabana-500">ESPAÇO</span>
                <span className="-mt-0.5 font-condensed text-2xl font-bold tracking-tight text-white">Alta Cabana</span>
              </span>
            </a>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-zinc-400">
              Referência em casamentos, festas de 15 anos, bodas e eventos corporativos em Santos/SP. Arquitetura acolhedora, buffet próprio e atendimento apaixonado por celebrar histórias.
            </p>
            <div className="flex items-center gap-3">
              <SocialLink href="https://instagram.com" label="Instagram" icon="fa-instagram" />
              <SocialLink href="https://facebook.com" label="Facebook" icon="fa-facebook-f" />
              <SocialLink href="https://youtube.com" label="YouTube" icon="fa-youtube" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-white">Navegação</h2>
            <ul className="space-y-3 text-sm">
              {navigation.map(([label, href]) => <li key={href}><a href={href} className="transition-colors hover:text-cabana-500">{label}</a></li>)}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-white">Celebrações</h2>
            <ul className="space-y-3 text-sm">
              {celebrations.map(label => <li key={label}><a href="#orcamento" className="transition-colors hover:text-cabana-500">{label}</a></li>)}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-white">Contato & Visitação</h2>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3"><i className="fa-solid fa-location-dot mt-1 text-cabana-500" /><span>Santos, Estado de São Paulo - SP</span></li>
              <li className="flex items-center gap-3"><i className="fa-brands fa-whatsapp text-cabana-500" /><a href="https://wa.me/5513997140000" className="transition-colors hover:text-cabana-500">(13) 99714-0000</a></li>
              <li className="flex items-center gap-3"><i className="fa-solid fa-envelope text-cabana-500" /><a href="mailto:contato@altacabana.com.br" className="transition-colors hover:text-cabana-500">contato@altacabana.com.br</a></li>
              <li className="flex items-start gap-3"><i className="fa-solid fa-clock mt-1 text-cabana-500" /><span>Visitas com hora marcada:<br />Terça a Sábado • 10h às 19h</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>© 2026 Espaço Alta Cabana • Todos os direitos reservados.</p>
          <p>Santos • São Paulo • Brasil</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-cabana-500"><i className={`fa-brands ${icon}`} aria-hidden="true" /></a>;
}
