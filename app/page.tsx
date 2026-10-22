'use client';

import React, { useEffect, useState } from 'react';
import { Smartphone, Monitor, Car } from 'lucide-react';

export default function FoxKMRouter() {
  const [os, setOs] = useState<string | null>(null);
  const [redirecting, setRedirecting] = useState(true);

  // Links Oficiais
  const linkAndroid = "https://play.google.com/store/apps/details?id=br.com.foxkm.passenger.drivermachine";
  const linkIOS = "#"; // Substitua esta hashtag pelo link da Apple quando o cliente enviar

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    
    // Detecção iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setOs('iOS');
      // Só redireciona automaticamente se o link da Apple já estiver configurado
      if (linkIOS !== "#") {
        window.location.href = linkIOS;
      } else {
        setRedirecting(false);
      }
      return;
    }
    
    // Detecção Android
    if (/android/i.test(userAgent)) {
      setOs('Android');
      window.location.href = linkAndroid;
      return;
    }

    // Acesso via PC ou falha de leitura
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
        
        {/* Efeito visual de fundo */}
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
          Seu carro em poucos cliques. Motoristas locais e rápidos. Escolha sua plataforma para baixar o aplicativo.
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
            href={linkIOS === "#" ? "javascript:void(0)" : linkIOS}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-colors border group ${
              linkIOS === "#" 
                ? "bg-zinc-900 border-zinc-800 text-zinc-500 cursor-not-allowed" 
                : "bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 hover:border-sky-500/50"
            }`}
          >
            <Smartphone size={20} className={linkIOS === "#" ? "text-zinc-600" : "text-sky-500 group-hover:scale-110 transition-transform"} />
            <span className="font-bold">
              {linkIOS === "#" ? "Em breve na App Store" : "Baixar na App Store"}
            </span>
          </a>
        </div>

        {os === 'Desktop' && (
          <div className="mt-8 pt-6 border-t border-zinc-800/50 flex flex-col items-center justify-center gap-2 text-zinc-500 text-xs uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Monitor size={14} />
              <span>Acesso Desktop</span>
            </div>
            <p className="normal-case text-zinc-600 mt-2">
              Acesse este link pelo celular para instalação.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}