const paths = [
  { icon: '⚡', title: 'Desarrollo Web', desc: 'HTML, CSS, JS, React, Node', courses: 120, color: '#98CA3F' },
  { icon: '🤖', title: 'Inteligencia Artificial', desc: 'Python, ML, LLMs, Deep Learning', courses: 85, color: '#7C3AED' },
  { icon: '📱', title: 'Desarrollo Móvil', desc: 'React Native, Flutter, Swift', courses: 64, color: '#0EA5E9' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS, Docker, Kubernetes, CI/CD', courses: 92, color: '#F59E0B' },
  { icon: '🎨', title: 'Diseño UI/UX', desc: 'Figma, Diseño de producto, UX Research', courses: 47, color: '#EC4899' },
  { icon: '🔐', title: 'Ciberseguridad', desc: 'Ethical Hacking, Redes, Pentesting', courses: 38, color: '#EF4444' },
  { icon: '🗄️', title: 'Bases de Datos', desc: 'SQL, MongoDB, PostgreSQL, Redis', courses: 55, color: '#14B8A6' },
  { icon: '📊', title: 'Data Science', desc: 'Python, Pandas, Power BI, Tableau', courses: 73, color: '#8B5CF6' },
  { icon: '🏗️', title: 'Backend', desc: 'APIs, Microservicios, Arquitectura', courses: 89, color: '#F97316' },
]

export default function LearningPaths() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-dark-800">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#98CA3F] text-sm font-semibold uppercase tracking-widest mb-3">Rutas de aprendizaje</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Todas las rutas que{' '}
            <span className="text-gradient">necesitas</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Desde cero hasta nivel profesional. Aprende con proyectos reales y obtén certificados reconocidos por la industria.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paths.map((path) => (
            <a
              key={path.title}
              href="#"
              className="group bg-card rounded-2xl p-5 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${path.color}15` }}
                >
                  {path.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#98CA3F] transition-colors duration-200">
                    {path.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-2 truncate">{path.desc}</p>
                  <span className="text-xs text-gray-600">{path.courses} cursos</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[#98CA3F]/10 flex items-center justify-center">
                    <span className="text-[#98CA3F] text-xs">→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-[#98CA3F] hover:text-white border border-[#98CA3F]/30 hover:border-[#98CA3F] hover:bg-[#98CA3F]/10 px-6 py-3 rounded-xl transition-all duration-200"
          >
            Ver todas las rutas
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
