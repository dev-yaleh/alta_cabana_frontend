import { useEffect, useState } from 'react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 50);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  const links = [['Home', '#inicio'], ['Sobre', '#sobre'], ['Espaço', '#o-espaco'], ['Eventos', '#eventos'], ['Contato', '#orcamento']];
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <a href="#inicio" aria-label="Espaço Alta Cabana - Início" className="group flex items-center gap-3.5">
        <svg viewBox="0 0 120 110" className="h-12 w-12" fill="none" aria-hidden="true"><path d="M12 62 L60 14 L108 62" stroke={scrolled ? '#1A1A1A' : '#FFFFFF'} strokeWidth="11"/><path d="M60 40 L34 66 L60 92" stroke={scrolled ? '#1A1A1A' : '#FFFFFF'} strokeWidth="10"/><rect x="62" y="48" width="24" height="24" transform="rotate(45 62 48)" fill="#FF7826"/></svg>
        <span className="flex flex-col leading-none"><span className="font-condensed pl-0.5 text-[11px] font-bold tracking-[.28em] text-cabana-500">ESPAÇO</span><span className={`font-condensed text-2xl font-bold tracking-tight ${scrolled ? 'text-charcoal-900' : 'text-white'}`}>Alta Cabana</span></span>
      </a>
      <nav className={`hidden items-center gap-8 text-[13px] font-semibold uppercase tracking-wider lg:flex ${scrolled ? 'text-charcoal-800' : 'text-white/90'}`}>{links.map(([label, href]) => <a key={href} href={href} className="py-2 transition-colors hover:text-cabana-500">{label}</a>)}</nav>
      <a href="#orcamento" className="btn-fresh hidden rounded-full bg-cabana-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-glow-orange transition hover:-translate-y-0.5 lg:inline-flex">Orçamento</a>
      <button className={`rounded-xl p-2.5 lg:hidden ${scrolled ? 'text-charcoal-900' : 'text-white'}`} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}><i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} /></button>
    </div>
    {menuOpen && <nav className="space-y-4 border-t border-zinc-100 bg-white px-6 py-7 shadow-2xl lg:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-zinc-100 py-2.5 text-sm font-bold uppercase tracking-wider text-charcoal-900">{label}</a>)}<a href="#orcamento" onClick={() => setMenuOpen(false)} className="block rounded-full bg-cabana-500 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white">Solicitar Orçamento</a></nav>}
  </header>;
}

