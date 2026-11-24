import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Eventos from './components/Eventos';
import Sobre from './components/Sobre';
import Cardapio from './components/Cardapio';
import Feedback from './components/Feedback';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
 useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.14});document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(element=>observer.observe(element));return()=>observer.disconnect();},[]);
 const requestQuote=(event?:string)=>{const select=document.getElementById('form-event-type') as HTMLSelectElement|null;if(event&&select)window.dispatchEvent(new CustomEvent('alta:select-event',{detail:event}));document.getElementById('orcamento')?.scrollIntoView({behavior:'smooth'});};
 return <><NavBar/><main><Hero/><Eventos onQuote={requestQuote}/><Sobre onQuote={requestQuote}/><Cardapio/><Feedback/><Contato/><Footer/></main><WhatsAppFloat/></>;
}




