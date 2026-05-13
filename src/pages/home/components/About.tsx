import { useEffect, useRef, useState } from 'react';

const highlights = [
  { icon: 'ri-shield-keyhole-line', label: 'Pentesting & Red Team', color: '#00ff41' },
  { icon: 'ri-server-line', label: 'Administración de Sistemas', color: '#00f0ff' },
  { icon: 'ri-wifi-line', label: 'Seguridad de Redes', color: '#00ff41' },
  { icon: 'ri-code-s-slash-line', label: 'Scripting & Automatización', color: '#00f0ff' },
  { icon: 'ri-bug-line', label: 'Análisis de Vulnerabilidades', color: '#00ff41' },
  { icon: 'ri-file-text-line', label: 'Documentación Técnica', color: '#00f0ff' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre-mi" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="circuit-bg absolute inset-0 opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#050d1a]/40 to-[#030308]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section label */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="font-mono-tech text-[#00ff41] text-xs tracking-widest">[ 01 ] SOBRE MÍ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-12">
            Perfil <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#00f0ff]">Profesional</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div className={`space-y-5 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              <strong className="text-white">Técnico Superior en Administración de Sistemas Informáticos en Red</strong>, con formación especializada en Ciberseguridad y experiencia práctica en entornos IT empresariales relacionados con comunicaciones, monitorización y mantenimiento de infraestructuras.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Mi perfil está orientado a la <strong className="text-[#00f0ff]">seguridad de sistemas, redes e infraestructuras</strong>, con competencias en pentesting, Linux, Windows, Active Directory, Docker, virtualización, servicios de red, firewalls, VPN, hardening y administración segura.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Experiencia en el desarrollo de laboratorios de ciberseguridad ofensiva y defensiva, despliegue de servicios, resolución de incidencias y documentación técnica. Combino la visión del atacante con la del defensor para construir infraestructuras más robustas.
            </p>

            {/* Speaker badge */}
            <div className="card-tech rounded-lg p-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.05)] flex-shrink-0">
                  <i className="ri-mic-line text-[#00ff41]"></i>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">Ponente Invitado</div>
                  <div className="text-gray-400 text-xs leading-relaxed">
                    II Jornadas de Ciberseguridad: Seguridad Nacional y Ciberdefensa
                  </div>
                </div>
              </div>
            </div>

            <div className="card-green rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.05)] flex-shrink-0">
                  <i className="ri-flag-line text-[#00ff41]"></i>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">Director & Desarrollador CTF</div>
                  <div className="text-gray-400 text-xs leading-relaxed">
                    Reto CTF <strong className="text-[#00ff41]">"Inside The Breach"</strong> — entorno corporativo simulado de ataque ofensivo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Highlights grid */}
          <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className="card-tech rounded-lg p-4 flex items-center gap-3 group cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0"
                    style={{
                      border: `1px solid ${h.color}30`,
                      background: `${h.color}08`,
                    }}
                  >
                    <i className={`${h.icon} text-base`} style={{ color: h.color }}></i>
                  </div>
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{h.label}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-6 card-tech rounded-lg p-5">
              <div className="font-mono-tech text-[#00f0ff] text-xs tracking-widest mb-4">IDIOMAS</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-tech text-xs text-gray-500">ES</span>
                    <span className="text-white text-sm">Español</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((n) => (
                        <div key={n} className="w-6 h-1.5 rounded-full bg-[#00ff41]"></div>
                      ))}
                    </div>
                    <span className="font-mono-tech text-[#00ff41] text-xs ml-2">Nativo</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-tech text-xs text-gray-500">EN</span>
                    <span className="text-white text-sm">Inglés</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-1">
                      {[1,2,3].map((n) => (
                        <div key={n} className="w-6 h-1.5 rounded-full bg-[#00f0ff]"></div>
                      ))}
                      {[4,5].map((n) => (
                        <div key={n} className="w-6 h-1.5 rounded-full bg-[rgba(0,240,255,0.2)]"></div>
                      ))}
                    </div>
                    <span className="font-mono-tech text-[#00f0ff] text-xs ml-2">B2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}