export default function WhatsAppFloat() {
  const message = 'Olá! Gostaria de conhecer o Espaço Alta Cabana e solicitar um orçamento.';
  const href = `https://wa.me/5513997140000?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a]"
    >
      <i className="fa-brands fa-whatsapp text-2xl" aria-hidden="true" />
      <span className="hidden pr-1 text-xs font-bold uppercase tracking-wider sm:inline-block">
        Fale Conosco
      </span>
    </a>
  );
}
