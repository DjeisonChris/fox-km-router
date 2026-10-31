import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fox KM | Chame o seu carro',
  description: 'Como prefere chamar o seu carro? Escolha entre a nossa aplicação oficial ou o WhatsApp Inteligente com IA. Motoristas locais e rápidos.',
  themeColor: '#09090b', // Cor correspondente ao bg-zinc-950 para colorir a barra do navegador no telemóvel
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-50 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}