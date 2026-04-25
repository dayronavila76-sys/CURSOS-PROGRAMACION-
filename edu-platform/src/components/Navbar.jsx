import { useState } from 'react'
import { Search, Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Cursos', hasDropdown: true },
  { label: 'Empresas', hasDropdown: false },
  { label: 'Blog', hasDropdown: false },
  { label: 'Precios', hasDropdown: false },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[#98CA3F] rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-sm">E</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              edu<span className="text-[#98CA3F]">tech</span>
            </span>
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} className="opacity-60" />}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Search size={18} />
            </button>

            <a
              href="#"
              className="hidden md:block text-sm text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              Iniciar sesión
            </a>
            <a
              href="#"
              className="hidden md:block text-sm font-semibold text-black bg-[#98CA3F] hover:bg-[#7aab2a] px-4 py-2 rounded-lg transition-all duration-200"
            >
              Registrarse
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search bar expanded */}
        {searchOpen && (
          <div className="hidden md:block pb-3 animate-fade-in">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                autoFocus
                type="text"
                placeholder="Busca cursos, rutas, tecnologías..."
                className="w-full bg-dark-600 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#98CA3F]/50 transition-colors"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-white/5 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex items-center justify-between text-sm text-gray-300 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </a>
            ))}
            <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
              <a href="#" className="text-center text-sm text-gray-300 hover:text-white py-2.5 rounded-lg hover:bg-white/5 transition-all">
                Iniciar sesión
              </a>
              <a href="#" className="text-center text-sm font-semibold text-black bg-[#98CA3F] hover:bg-[#7aab2a] py-2.5 rounded-lg transition-all">
                Registrarse gratis
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
