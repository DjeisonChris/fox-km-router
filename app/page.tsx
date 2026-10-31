'use client';

import React, { useState } from 'react';
import { Smartphone, ArrowRight, ShieldCheck, Monitor } from 'lucide-react';

export default function FoxKMRouter() {
  const [isDesktop, setIsDesktop] = useState(false);

  // O Cérebro do Roteador: Deteção de Sistema Operativo no Clique
  const handleAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Detecção iOS - Direciona para App Store
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href = "https://apps.apple.com/br/app/fox-km-passageiro/id6755605140"; 
      return;
    }

    // Detecção Android - Direciona para Google Play
    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=br.com.foxkm.passenger.drivermachine";
      return;
    }

    // Se for PC/Desktop ou falhar a leitura, abre a escolha manual
    setIsDesktop(true);
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
          
          {/* Opção 1: O Aplicativo (Com Expansão para PC) */}
          {!isDesktop ? (
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
                  Aplicativo Fox KM
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Rastreio no mapa em tempo real.
                </p>
              </div>
              <ArrowRight className="text-zinc-500 group-hover:text-amber-500 transition-colors" size={20} />
            </button>
          ) : (
            <div className="w-full bg-zinc-900/80 border border-amber-500/30 rounded-2xl p-4 shadow-xl animate-in fade-in zoom-in duration-300">
              <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm mb-4">
                <Monitor size={16} /> Acesso via Computador
              </div>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://play.google.com/store/apps/details?id=br.com.foxkm.passenger.drivermachine" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-emerald-500/50 transition-colors group"
                >
                  <svg className="w-5 h-5 fill-emerald-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M17.523 9.708l1.89-3.272c.117-.202.049-.465-.153-.583-.203-.117-.466-.048-.584.154l-1.922 3.328C15.228 8.57 13.67 8.1 12 8.1s-3.228.47-4.754 1.235L5.324 6.007c-.118-.202-.381-.271-.584-.154-.202.118-.27.381-.153.583l1.89 3.272C3.844 11.236 2 14.152 2 17.5h20c0-3.348-1.844-6.264-4.477-7.792zM8.5 14.5c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm7 0c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z"/>
                  </svg>
                  <span className="font-bold text-sm text-zinc-200">Baixar para Android</span>
                </a>
                <a 
                  href="https://apps.apple.com/br/app/fox-km-passageiro/id6755605140" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-sky-500/50 transition-colors group"
                >
                  <svg className="w-5 h-5 fill-sky-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M16.48 9.92c-.03-2.6 2.1-3.83 2.19-3.88-1.2-1.74-3.07-1.98-3.72-2.02-1.57-.16-3.08.92-3.88.92-.8 0-2.03-.92-3.32-.89-1.7.03-3.26.98-4.14 2.5-1.77 3.07-.45 7.6 1.28 10.08.85 1.22 1.86 2.58 3.2 2.53 1.28-.05 1.8-.82 3.35-.82 1.54 0 2.02.82 3.35.8 1.4-.03 2.27-1.25 3.12-2.48.98-1.42 1.38-2.8 1.4-2.87-.03-.02-2.67-1.02-2.7-4.08h-.03zM14.28 4.31c.7-.85 1.18-2.04 1.05-3.21-1.02.04-2.27.68-2.98 1.53-.64.75-1.2 1.95-1.05 3.1 1.13.1 2.28-.57 2.98-1.42z"/>
                  </svg>
                  <span className="font-bold text-sm text-zinc-200">Baixar para iPhone (iOS)</span>
                </a>
              </div>
            </div>
          )}

          {/* Opção 2: A IA do WhatsApp */}
          <a 
            href="https://wa.me/5547988369785?text=Olá, preciso de um carro agora." 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 p-5 bg-zinc-900/80 border border-zinc-700/50 rounded-2xl hover:border-emerald-500/70 hover:bg-zinc-900 transition-all active:scale-[0.98] shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 fill-emerald-500" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0