const footerLinks = {
  Aprender: ['Todos los cursos', 'Rutas de aprendizaje', 'Proyectos', 'Certificaciones', 'Blog'],
  Empresa: ['EduTech para empresas', 'Casos de éxito', 'Integraciones', 'API', 'Afiliados'],
  Soporte: ['Centro de ayuda', 'Comunidad', 'Estado del servicio', 'Contacto', 'Política de privacidad'],
  Redes: ['Twitter/X', 'LinkedIn', 'YouTube', 'Discord', 'Instagram'],
}

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#98CA3F] rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-sm">E</span>
              </div>
              <span className="text-white font-bold text-xl">
                edu<span className="text-[#98CA3F]">tech</span>
              </span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              La escuela de tecnología de Latinoamérica. Aprende con los mejores y transforma tu carrera.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-[#98CA3F] text-xs transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} EduTech. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-[#98CA3F] text-xs transition-colors">Términos</a>
            <a href="#" className="text-gray-600 hover:text-[#98CA3F] text-xs transition-colors">Privacidad</a>
            <a href="#" className="text-gray-600 hover:text-[#98CA3F] text-xs transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
