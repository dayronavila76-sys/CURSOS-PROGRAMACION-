import { Sparkles, ArrowRight } from 'lucide-react'

const steps = [
  { num: '01', title: 'Cuéntanos tus metas', desc: 'Dinos qué quieres lograr profesionalmente.' },
  { num: '02', title: 'Analizamos tu perfil', desc: 'Nuestra IA evalúa tu nivel y experiencia.' },
  { num: '03', title: 'Ruta personalizada', desc: 'Obtienes un plan de aprendizaje a tu medida.' },
]

export default function PersonalizedLearning() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-dark-900 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#98CA3F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#98CA3F]/10 border border-[#98CA3F]/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles size={14} className="text-[#98CA3F]" />
              <span className="text-xs text-[#98CA3F] font-medium">Impulsado por IA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              Descubre tu ruta de{' '}
              <span className="text-gradient">aprendizaje personalizada</span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              No pierdas tiempo buscando por dónde empezar. Nuestra inteligencia artificial analiza
              tus objetivos y construye el camino más eficiente hacia tu meta profesional.
            </p>

            <div className="space-y-5 mb-10">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#98CA3F]/10 border border-[#98CA3F]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#98CA3F] text-xs font-bold">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">{step.title}</h4>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#98CA3F] hover:bg-[#7aab2a] text-black font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 active:scale-95 glow-green"
            >
              Crear mi ruta gratis
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right — visual card */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-6 border border-white/8">

              {/* Fake AI interface */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#98CA3F] flex items-center justify-center">
                  <Sparkles size={14} className="text-black" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">EduTech AI</p>
                  <p className="text-gray-500 text-xs">Analizando tu perfil...</p>
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-4 mb-6">
                {[
                  { label: 'JavaScript Avanzado', pct: 85 },
                  { label: 'React & Ecosistema', pct: 70 },
                  { label: 'Node.js & APIs', pct: 55 },
                  { label: 'Bases de Datos', pct: 40 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-[#98CA3F]">{item.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#98CA3F] to-[#c8e86a] rounded-full transition-all duration-1000"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendation */}
              <div className="bg-[#98CA3F]/8 border border-[#98CA3F]/15 rounded-2xl p-4">
                <p className="text-[#98CA3F] text-xs font-semibold mb-1">✨ Recomendación</p>
                <p className="text-white text-sm font-medium">Ruta: Full Stack Developer</p>
                <p className="text-gray-400 text-xs mt-1">Basada en tus metas y nivel actual — 6 meses estimados</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-dark-700 border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl">
              <p className="text-white text-sm font-bold">4.9 ★</p>
              <p className="text-gray-500 text-xs">Satisfacción</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
