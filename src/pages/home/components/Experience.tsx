import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    role: 'Administrador de Sistemas e Infraestructuras IT',
    company: 'Fractalia Systems S.L. / Entorno Cajamar',
    period: 'Oct 2025 – Abr 2026',
    type: 'IT / Ciberseguridad',
    icon: 'ri-server-line',
    color: '#00f0ff',
    tasks: [
      'Gestión, monitorización y mantenimiento de infraestructura IT corporativa',
      'Gestión de accesos y privilegios con CyberArk',
      'Gestión de incidencias con Remedy (ITSM)',
      'Soporte técnico N1 a usuarios y sistemas',
      'Resolución de incidencias y documentación técnica',
    ],
  },
  {
    role: 'Gerente de Administración de Fincas',
    company: 'Despacho Rosa Caparrós',
    period: 'Ene 2017 – Dic 2024',
    type: 'Gestión & Administración',
    icon: 'ri-building-line',
    color: '#00ff41',
    tasks: [
      'Gestión integral del despacho y atención al cliente',
      'Contabilidad y elaboración de presupuestos',
      'Coordinación de proveedores y comunidades',
      'Herramientas ofimáticas Microsoft Office 365',
      'Redacción de contratos, actas y comunicaciones',
      'Celebración de juntas y resolución de incidencias',
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiencia" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#04080f]/60 to-[#030308]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="font-mono-tech text-[#00ff41] text-xs tracking-widest">[ 02 ] EXPERIENCIA</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-12">
            Trayectoria <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#00f0ff]">Profesional</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(0,240,255,0.5)] via-[rgba(0,255,65,0.3)] to-transparent hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 200 + 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center" style={{ minWidth: '64px' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 flex-shrink-0"
                    style={{
                      borderColor: exp.color,
                      background: `${exp.color}10`,
                      boxShadow: `0 0 12px ${exp.color}40`,
                    }}
                  >
                    <i className={`${exp.icon} text-sm`} style={{ color: exp.color }}></i>
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 card-tech rounded-xl p-6 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="md:hidden w-7 h-7 rounded flex items-center justify-center flex-shrink-0"
                          style={{ border: `1px solid ${exp.color}40`, background: `${exp.color}08` }}
                        >
                          <i className={`${exp.icon} text-xs`} style={{ color: exp.color }}></i>
                        </div>
                        <h3 className="text-white font-semibold text-base md:text-lg leading-tight">{exp.role}</h3>
                      </div>
                      <div className="text-gray-400 text-sm">{exp.company}</div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                      <span
                        className="font-mono-tech text-xs px-2.5 py-1 rounded border"
                        style={{ borderColor: `${exp.color}30`, color: exp.color, background: `${exp.color}08` }}
                      >
                        {exp.period}
                      </span>
                      <span className="font-mono-tech text-[10px] text-gray-500 px-2 py-0.5 rounded border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2.5 text-gray-400 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }}></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}