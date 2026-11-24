import { useEffect, useState, type FormEvent, type ReactNode } from 'react';

type FormFields = { name: string; email: string; phone: string; eventType: string; date: string; guests: string; notes: string };
const emptyForm: FormFields = { name: '', email: '', phone: '', eventType: 'Casamento', date: '', guests: '80 a 150 convidados', notes: '' };
const inputClass = 'w-full rounded-none border border-zinc-200 bg-ivory px-4 py-3.5 text-sm transition-colors focus:border-cabana-500 focus:bg-white focus:outline-none';

export default function Contato() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const listener = (event: Event) => setForm(current => ({ ...current, eventType: (event as CustomEvent<string>).detail }));
    window.addEventListener('alta:select-event', listener);
    return () => window.removeEventListener('alta:select-event', listener);
  }, []);

  const update = (field: keyof FormFields, value: string) => {
    setForm(current => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };

  return (
    <section id="orcamento" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden border border-zinc-200/80 bg-white shadow-xl lg:grid-cols-12">
          <div className="flex flex-col justify-center bg-[#fcfbf9] px-7 py-10 sm:px-10 sm:py-12 lg:col-span-5 lg:px-12 lg:py-14">
            <span className="mb-6 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[.3em] text-charcoal-900"><span className="h-px w-9 bg-cabana-500" />Vamos conversar</span>
            <h2 className="mb-6 font-serif text-4xl font-normal leading-[1.02] tracking-[-.045em] text-charcoal-900 sm:text-5xl lg:text-[52px]">Vamos planejar uma celebração inesquecível?</h2>
            <p className="max-w-lg text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">Conte um pouco sobre o seu evento. Nossa equipe vai preparar uma proposta personalizada para transformar sua ideia em uma celebração especial no Espaço Alta Cabana.</p>
          </div>

          <div className="bg-white p-6 sm:p-9 lg:col-span-7 lg:p-12">
            <form onSubmit={submit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Nome Completo *"><input required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Ex: Mariana Silva" className={inputClass} /></Field>
                <Field label="E-mail *"><input required type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="seu@email.com" className={inputClass} /></Field>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Telefone / WhatsApp *"><input required type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(13) 99999-9999" className={inputClass} /></Field>
                <Field label="Tipo de Evento *"><select value={form.eventType} onChange={e => update('eventType', e.target.value)} className={inputClass}>{['Casamento', 'Debutante / 15 Anos', 'Mini Wedding', 'Bodas', 'Aniversário / Comemoração', 'Corporativo'].map(item => <option key={item}>{item}</option>)}</select></Field>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Data Prevista"><input type="date" value={form.date} onChange={e => update('date', e.target.value)} className={inputClass} /></Field>
                <Field label="Quantidade de Convidados"><select value={form.guests} onChange={e => update('guests', e.target.value)} className={inputClass}>{['50 a 80 convidados', '80 a 150 convidados', '150 a 250 convidados', 'Acima de 250 convidados'].map(item => <option key={item}>{item}</option>)}</select></Field>
              </div>
              <Field label="Detalhes ou Observações (Opcional)"><textarea rows={3} value={form.notes} onChange={e => update('notes', e.target.value)} placeholder="Conte um pouco sobre como você imagina sua celebração..." className={inputClass} /></Field>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button type="submit" className="btn-fresh flex w-full items-center justify-center gap-2 rounded-none bg-cabana-500 px-6 py-4 text-xs font-bold uppercase tracking-[.16em] text-white shadow-glow-orange"><span>Solicitar Orçamento</span><i className="fa-solid fa-paper-plane" /></button>
              </div>
            </form>

            {submitted && <div className="mt-6 rounded-none border border-emerald-200 bg-emerald-50 p-5 text-emerald-900"><h3 className="text-sm font-bold">Solicitação recebida com sucesso!</h3><p className="mt-1 text-xs leading-relaxed text-emerald-800">Obrigado, {form.name}! Registramos seu interesse para {form.eventType} no Espaço Alta Cabana. Nossa equipe entrará em contato em breve.</p></div>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-800">{label}<span className="mt-2 block">{children}</span></label>;
}
