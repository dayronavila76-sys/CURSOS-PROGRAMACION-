import { useState } from 'react'
import { Search, ArrowRight, Play } from 'lucide-react'

const stats = [
  { value: '5M+', label: 'Estudiantes' },
  { value: '1,000+', label: 'Cursos' },
  { value: '300+', label: 'Profesores' },
  { value: '17', label: 'Países' },
]

const trendingSearches = ['JavaScript', 'Python', 'React', 'IA', 'Backend', 'DevOps']

export default function Hero() {
  const [query, setQuery] = useState('')

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">

      {/* Background gradients */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#98CA3F]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#98CA3F]/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#1a2e0a]/80 rounded-full blur-[120px] pointer-events-none" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #98CA3F 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#98CA3F]/10 border border-[#98CA3F]/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#98CA3F] animate-pulse" />
          <span className="text-xs text-[#98CA3F] font-medium">Nueva ruta: Inteligencia Artificial con Python</span>
          <ArrowRight size={12} className="text-[#98CA3F]" />
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6 animate-fade-up">
          La escuela de{' '}
          <span className="text-gradient">tecnología</span>
          <br />
          de Latinoamérica
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Aprende con los mejores profesores de la industria. Más de{' '}
          <span className="text-white font-semibold">5 millones de estudiantes</span>{' '}
          ya están transformando su carrera.
        </p>

        {/* Search input */}
        <div className="relative max-w-xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative flex items-center">
            <Search size={18} className="absolute left-4 text-gray-500 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="¿Qué quieres aprender hoy?"
              className="w-full bg-dark-600/80 border border-white/10 focus:border-[#98CA3F]/50 rounded-xl pl-11 pr-36 py-4 text-white placeholder-gray-500 text-sm focus:outline-none transition-all duration-200 focus:bg-dark-600"
            />
            <button className="absolute right-2 bg-[#98CA3F] hover:bg-[#7aab2a] text-black font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 active:scale-95">
              Buscar
            </button>
          </div>
        </div>

        {/* Trending searches */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <span className="text-xs text-gray-600">Tendencias:</span>
          {trendingSearches.map((term) => (
            <button
              key={term}
              className="text-xs text-gray-400 hover:text-[#98CA3F] border border-white/8 hover:border-[#98CA3F]/30 px-3 py-1 rounded-full transition-all duration-200"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-gradient mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="#"
            className="w-full sm:w-auto bg-[#98CA3F] hover:bg-[#7aab2a] text-black font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 active:scale-95 glow-green"
          >
            Empieza gratis
          </a>
          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-3.5 rounded-xl text-sm transition-all duration-200"
          >
            <Play size={14} className="fill-current" />
            Ver cómo funciona
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-gray-500">Explorar</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  )
}
