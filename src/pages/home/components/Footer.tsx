export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(0,240,255,0.08)] bg-[#020206]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center border border-[rgba(0,255,65,0.4)] rounded bg-[rgba(0,255,65,0.05)]">
                <i className="ri-shield-keyhole-line text-[#00ff41] text-sm"></i>
              </div>
              <span className="font-mono-tech text-sm font-semibold text-white">
                <span className="text-[#00ff41]">Miguel</span>RosaSec
              </span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-4">
              Red Team Engineer & Junior Penetration Tester. Especializado en seguridad ofensiva, redes e infraestructuras.
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-gray-600 text-xs">
                <i className="ri-mail-line text-[#00f0ff] text-xs"></i>
                <span>miguelrosasec@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-xs">
                <i className="ri-phone-line text-[#00f0ff] text-xs"></i>
                <span>664-416-525</span>
              </div>
            </div>
          </div>

          {/* Formación */}
          <div>
            <div className="font-mono-tech text-[10px] text-gray-500 tracking-widest mb-4">FORMACIÓN</div>
            <ul className="space-y-2">
              {['ASIR – IES Al-Andalus', 'Experto Ciberseguridad UAL', 'Ing. Informática UNED', 'Analista de Inteligencia'].map((item) => (
                <li key={item} className="text-gray-600 text-xs hover:text-gray-400 transition-colors cursor-default">{item}</li>
              ))}
            </ul>
          </div>

          {/* Certificaciones */}
          <div>
            <div className="font-mono-tech text-[10px] text-gray-500 tracking-widest mb-4">CERTIFICACIONES</div>
            <ul className="space-y-2">
              {['eJPTv2 – INE Security', 'eCPPTv3 – INE Security', 'eWPTX – INE Security', 'Hack4u – Hacking & Python'].map((item) => (
                <li key={item} className="text-gray-600 text-xs hover:text-gray-400 transition-colors cursor-default">{item}</li>
              ))}
            </ul>
          </div>

          {/* Idiomas & Social */}
          <div>
            <div className="font-mono-tech text-[10px] text-gray-500 tracking-widest mb-4">IDIOMAS</div>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600 text-xs">Español – Nativo</li>
              <li className="text-gray-600 text-xs">Inglés – B2 Medio-Alto</li>
            </ul>
            <div className="font-mono-tech text-[10px] text-gray-500 tracking-widest mb-3">REDES</div>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com/in/miguelangelrosacaparros"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded border border-[rgba(0,240,255,0.2)] text-[#00f0ff] hover:border-[rgba(0,240,255,0.6)] hover:bg-[rgba(0,240,255,0.08)] transition-all duration-300 cursor-pointer"
              >
                <i className="ri-linkedin-line text-sm"></i>
              </a>
              <a
                href="https://github.com/MiguelRosaSec"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded border border-[rgba(0,240,255,0.2)] text-[#00f0ff] hover:border-[rgba(0,240,255,0.6)] hover:bg-[rgba(0,240,255,0.08)] transition-all duration-300 cursor-pointer"
              >
                <i className="ri-github-line text-sm"></i>
              </a>
              <a
                href="mailto:miguelrosasec@gmail.com"
                className="w-8 h-8 flex items-center justify-center rounded border border-[rgba(0,240,255,0.2)] text-[#00f0ff] hover:border-[rgba(0,240,255,0.6)] hover:bg-[rgba(0,240,255,0.08)] transition-all duration-300 cursor-pointer"
              >
                <i className="ri-mail-line text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[rgba(0,240,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-mono-tech text-[11px] text-gray-700">
            &copy; {year} Miguel Ángel Rosa Caparrós — MiguelRosaSec. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1 font-mono-tech text-[10px] text-gray-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse"></span>
            <span>Sistema operativo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}