'use client';

import React from 'react';
import { Smartphone, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FoxKMRouter() {
  
  // O Cérebro do Roteador: Deteção de Sistema Operativo no Clique
  const handleAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Detecção iOS - Direciona para App Store
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href = "https://apps.apple.com/br/app/fox-km-passageiro/id6755605140"; 
      return;
    }

    // Detecção Android (ou Desktop) - Direciona para Google Play
    window.location.href = "https://play.google.com/store/apps/details?id=br.com.foxkm.passenger.drivermachine";
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6 font-sans selection:bg-amber-500/30 overflow-hidden relative">
      
      {/* Elemento de iluminação de fundo (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-sm w-full space-y-10 z-10 mt-[-5vh]">
        
        {/* Cabeçalho da Página de Transição */}
        <div className="text-center flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-zinc-900 border border-zinc-700 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden mb-2">
            <img src="/logo.png" alt="Fox KM" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
            Como prefere <br /> chamar o seu carro?
          </h1>
          <p className="text-zinc-400 text-sm">
            Escolha a opção mais rápida para si agora.
          </p>
        </div>

        {/* Os Dois Portões de Entrada */}
        <div className="space-y-4">
          
          {/* Opção 1: O Aplicativo (Com Roteador Inteligente Nativo) */}
          <button 
            onClick={handleAppClick}
            className="w-full text-left group relative flex items-center gap-4 p-5 bg-zinc-900/80 border border-zinc-700/50 rounded-2xl hover:border-amber-500/70 hover:bg-zinc-900 transition-all active:scale-[0.98] shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Smartphone className="text-amber-500" size={28} />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                Aplicação Fox KM
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Rastreio no mapa em tempo real.
              </p>
            </div>
            <ArrowRight className="text-zinc-500 group-hover:text-amber-500 transition-colors" size={20} />
          </button>

          {/* Opção 2: A IA do WhatsApp */}
          <a 
            href="https://wa.me/5547988369785?text=Olá, preciso de um carro agora." 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 p-5 bg-zinc-900/80 border border-zinc-700/50 rounded-2xl hover:border-emerald-500/70 hover:bg-zinc-900 transition-all active:scale-[0.98] shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageCircle className="text-emerald-500" size={28} />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                WhatsApp Inteligente
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Peça conversando com a nossa IA.
              </p>
            </div>
            <ArrowRight className="text-zinc-500 group-hover:text-emerald-500 transition-colors" size={20} />
          </a>

        </div>

        {/* Selo de Confiança */}
        <div className="pt-6 flex items-center justify-center gap-2 text-zinc-500 text-xs font-medium">
          <ShieldCheck size={16} className="text-zinc-600" />
          <span>Motoristas locais. Viagem segura e rápida.</span>
        </div>

      </div>
    </main>
  );
}