const companies = [
  { name: 'Google', logo: 'G' },
  { name: 'Meta', logo: 'M' },
  { name: 'Microsoft', logo: 'Ms' },
  { name: 'Amazon', logo: 'A' },
  { name: 'Spotify', logo: 'S' },
  { name: 'Netflix', logo: 'N' },
  { name: 'Mercado Libre', logo: 'ML' },
  { name: 'Rappi', logo: 'R' },
]

export default function Companies() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-dark-800 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm mb-2">Más de <span className="text-white font-semibold">4,000 empresas</span> confían en EduTech para formar a sus equipos</p>
        </div>

        {/* Logos marquee effect */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-[marquee_20s_linear_infinite]">
            {[...companies, ...companies].map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex items-center justify-center bg-card rounded-xl px-6 py-4 min-w-[130px] hover:border-white/15 transition-all duration-200 cursor-pointer flex-shrink-0"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                    {company.logo}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark-800 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark-800 to-transparent pointer-events-none" />
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="text-center mt-10">
          <a href="#" className="text-sm text-[#98CA3F] hover:underline">
            Conoce EduTech para empresas →
          </a>
        </div>
      </div>
    </section>
  )
}
