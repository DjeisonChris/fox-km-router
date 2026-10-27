'use client';

import React, { useEffect, useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';

export default function FoxKMRouter() {
  const [os, setOs] = useState<string | null>(null);
  const [redirecting, setRedirecting] = useState(true);

  const linkAndroid = "https://play.google.com/store/apps/details?id=br.com.foxkm.passenger.drivermachine";
  const linkIOS = "https://apps.apple.com/br/app/fox-km-passageiro/id6755605140";

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    
    // Detecção iOS com delay de 800ms para o Analytics
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setOs('iOS');
      setTimeout(() => {
        window.location.href = linkIOS;
      }, 800);
      return;
    }
    
    // Detecção Android com delay de 800ms para o Analytics
    if (/android/i.test(userAgent)) {
      setOs('Android');
      setTimeout(() => {
        window.location.href = linkAndroid;
      }, 800);
      return;
    }

    setOs('Desktop');
    setRedirecting(false);
  }, []);

  if (redirecting) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-zinc-400 font-medium tracking-widest uppercase text-sm">Conectando ao App...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 font-sans selection:bg-sky-500/30">
      <div className="max-w-md w-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-sky-500/20 blur-[60px] rounded-full -z-10" />

        <div className="w-32 h-32 mx-auto bg-zinc-950 rounded-2xl flex items-center justify-center mb-8 border border-zinc-800 shadow-inner overflow-hidden relative">
          <img 
            src="/logo-fox.png" 
            alt="Fox KM Logo" 
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold mb-2">Fox KM Mobilidade</h1>
        <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
          O seu carro em poucos cliques. Motoristas locais e rápidos. Escolha a sua plataforma para baixar a aplicação.
        </p>

        <div className="flex flex-col gap-4">
          <a 
            href={linkAndroid}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-colors border border-zinc-700 hover:border-emerald-500/50 group"
          >
            <Smartphone size={20} className="text-emerald-500 group-hover:scale-110 transition-transform" />
            <span className="font-bold">Disponível no Google Play</span>
          </a>

          <a 
            href={linkIOS}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-colors border border-zinc-700 hover:border-sky-500/50 group"
          >
            <Smartphone size={20} className="text-sky-500 group-hover:scale-110 transition-transform" />
            <span className="font-bold">Baixar na App Store</span>
          </a>
        </div>

        {os === 'Desktop' && (
          <div className="mt-8 pt-6 border-t border-zinc-800/50 flex flex-col items-center justify-center gap-2 text-zinc-500 text-xs uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Monitor size={14} />
              <span>Acesso Desktop</span>
            </div>
            <p className="normal-case text-zinc-600 mt-2">
              Aceda a este link pelo telemóvel para instalação.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}