import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '0',
    period: 'para siempre',
    desc: 'Comienza tu viaje de aprendizaje sin costo.',
    cta: 'Empezar gratis',
    ctaStyle: 'border',
    features: [
      'Acceso a 50+ cursos gratuitos',
      'Comunidad de estudiantes',
      'Proyectos básicos',
      'Certificados de participación',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '29',
    period: 'por mes',
    desc: 'Todo lo que necesitas para crecer profesionalmente.',
    cta: 'Empezar con Pro',
    ctaStyle: 'primary',
    features: [
      'Acceso ilimitado a 1,000+ cursos',
      'Rutas de aprendizaje personalizadas con IA',
      'Proyectos reales con feedback',
      'Certificados reconocidos por la industria',
      'Mentoría mensual 1:1',
      'Soporte prioritario',
    ],
    popular: true,
  },
  {
    name: 'Teams',
    price: '79',
    period: 'por usuario/mes',
    desc: 'Solución completa para equipos y empresas.',
    cta: 'Contactar ventas',
    ctaStyle: 'border',
    features: [
      'Todo lo de Pro',
      'Panel de administración',
      'Reportes de progreso del equipo',
      'Contenido personalizado para tu empresa',
      'Integración con LMS / HRMS',
      'Gerente de cuenta dedicado',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-24 px-4 sm:px-6 bg-dark-800">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#98CA3F] text-sm font-semibold uppercase tracking-widest mb-3">Planes</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Elige el plan{' '}
            <span className="text-gradient">ideal para ti</span>
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Sin costos ocultos. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#98CA3F]/15 to-[#98CA3F]/5 border border-[#98CA3F]/30 shadow-[0_0_40px_rgba(152,202,63,0.12)]'
                  : 'bg-card hover:bg-white/[0.06] hover:border-white/15'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#98CA3F] text-black text-xs font-bold px-4 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-xs mb-4">{plan.desc}</p>
                <div className="flex items-end gap-1">
                  <span className="text-gray-400 text-sm">$</span>
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500 text-xs mb-1">/{plan.period}</span>
                </div>
              </div>

              <a
                href="#"
                className={`block text-center text-sm font-semibold py-3 rounded-xl mb-6 transition-all duration-200 active:scale-95 ${
                  plan.ctaStyle === 'primary'
                    ? 'bg-[#98CA3F] hover:bg-[#7aab2a] text-black glow-green'
                    : 'border border-white/15 hover:border-white/30 text-white hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className={`mt-0.5 flex-shrink-0 ${plan.popular ? 'text-[#98CA3F]' : 'text-gray-500'}`}
                    />
                    <span className="text-gray-400 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
