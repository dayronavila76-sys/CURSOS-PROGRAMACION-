const professors = [
  {
    name: 'Ana Pérez',
    role: 'Ingeniería de Software',
    company: 'Google',
    courses: 12,
    students: '98K',
    avatar: 'AP',
    color: '#0EA5E9',
  },
  {
    name: 'Carlos Díaz',
    role: 'Machine Learning Engineer',
    company: 'Meta',
    courses: 8,
    students: '75K',
    avatar: 'CD',
    color: '#8B5CF6',
  },
  {
    name: 'Laura Torres',
    role: 'UX/UI Lead Designer',
    company: 'Spotify',
    courses: 6,
    students: '62K',
    avatar: 'LT',
    color: '#EC4899',
  },
  {
    name: 'Miguel Ángel',
    role: 'DevOps & Cloud Architect',
    company: 'Amazon',
    courses: 10,
    students: '84K',
    avatar: 'MA',
    color: '#F59E0B',
  },
]

export default function Professors() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-dark-900">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#98CA3F] text-sm font-semibold uppercase tracking-widest mb-3">Nuestros profesores</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Aprende de los{' '}
            <span className="text-gradient">mejores</span>
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Profesionales activos en las empresas más importantes del mundo que comparten su conocimiento real.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {professors.map((prof) => (
            <div
              key={prof.name}
              className="group bg-card rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 text-center cursor-pointer"
            >
              {/* Avatar */}
              <div className="relative inline-block mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto"
                  style={{ backgroundColor: `${prof.color}25`, border: `2px solid ${prof.color}30` }}
                >
                  {prof.avatar}
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-dark-800 flex items-center justify-center"
                  style={{ backgroundColor: prof.color }}
                >
                  <span className="text-white text-[8px] font-bold">✓</span>
                </div>
              </div>

              <h3 className="text-white font-bold text-sm mb-0.5 group-hover:text-[#98CA3F] transition-colors">{prof.name}</h3>
              <p className="text-gray-500 text-xs mb-1">{prof.role}</p>
              <p className="text-xs font-medium mb-4" style={{ color: prof.color }}>@ {prof.company}</p>

              <div className="flex justify-center gap-6 text-center">
                <div>
                  <p className="text-white font-bold text-sm">{prof.courses}</p>
                  <p className="text-gray-600 text-xs">Cursos</p>
                </div>
                <div className="w-px bg-white/5" />
                <div>
                  <p className="text-white font-bold text-sm">{prof.students}</p>
                  <p className="text-gray-600 text-xs">Alumnos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
