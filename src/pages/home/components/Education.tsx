import { useEffect, useRef, useState } from 'react';

const education = [
  {
    degree: 'Técnico Superior en Administración de Sistemas Informáticos en Red',
    institution: 'IES Al-Andalus',
    period: '2023 – 2025',
    icon: 'ri-computer-line',
    color: '#00f0ff',
    badge: 'ASIR',
  },
  {
    degree: 'Experto en Ciberseguridad',
    institution: 'Universidad de Almería (UAL)',
    period: '2021 – 2022',
    icon: 'ri-shield-keyhole-line',
    color: '#00ff41',
    badge: 'Experto',
  },
  {
    degree: 'Analista de Inteligencia / Project Analyst',
    institution: 'Formación Especializada',
    period: '2025',
    icon: 'ri-spy-line',
    color: '#00f0ff',
    badge: 'OSINT',
  },
  {
    degree: 'Grado en Ingeniería Informática (parcial)',
    institution: 'UNED',
    period: '2020 – 2023',
    icon: 'ri-graduation-cap-line',
    color: '#00ff41',
    badge: 'Grado',
  },
];

const certifications = [
  {
    name: 'eJPTv2',
    full: 'Junior Penetration Tester',
    issuer: 'INE Security',
    year: '2025',
    status: 'active',
    color: '#00ff41',
    icon: 'ri-shield-check-line',
  },
  {
    name: 'eCPPTv3',
    full: 'Certified Professional Penetration Tester',
    issuer: 'INE Security',
    year: '2026',
    status: 'active',
    color: '#00f0ff',
    icon: 'ri-award-line',
  },
  {
    name: 'eWPTX',
    full: 'Web Penetration Tester Extreme',
    issuer: 'INE Security',
    year: '2026',
    status: 'training',
    color: '#fbbf24',
    icon: 'ri-global-line',
  },
  {
    name: 'Intro al Hacking',
    full: 'Introducción al Hacking',
    issuer: 'Hack4u',
    year: '2025',
    status: 'active',
    color: '#00ff41',
    icon: 'ri-terminal-box-line',
    hours: '53h',
  },
  {
    name: 'Python Ofensivo',
    full: 'Python para Hacking Ofensivo',
    issuer: 'Hack4u',
    year: '2024',
    status: 'active',
    color: '#00f0ff',
    icon: 'ri-code-s-slash-line',
    hours: '35h',
  },
  {
    name: 'Linux',
    full: 'Linux Avanzado',
    issuer: 'Hack4u',
    year: '2024',
    status: 'active',
    color: '#00ff41',
    icon: 'ri-terminal-line',
    hours: '20h',
  },
];

export default function Education() {
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
    <section id="formacion" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="circuit-bg absolute inset-0 opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#050d1a]/30 to-[#030308]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Formación */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="font-mono-tech text-[#00ff41] text-xs tracking-widest">[ 03 ] FORMACIÓN</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-10">
            Educación <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#00f0ff]">Académica</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`card-tech rounded-xl p-5 flex flex-col gap-3 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded"
                  style={{ border: `1px solid ${edu.color}30`, background: `${edu.color}08` }}
                >
                  <i className={`${edu.icon} text-base`} style={{ color: edu.color }}></i>
                </div>
                <span
                  className="font-mono-tech text-[10px] px-2 py-0.5 rounded border"
                  style={{ borderColor: `${edu.color}30`, color: edu.color, background: `${edu.color}08` }}
                >
                  {edu.badge}
                </span>
              </div>
              <div>
                <div className="text-white text-sm font-semibold leading-snug mb-1">{edu.degree}</div>
                <div className="text-gray-500 text-xs">{edu.institution}</div>
              </div>
              <div className="font-mono-tech text-xs text-gray-600 mt-auto">{edu.period}</div>
            </div>
          ))}
        </div>

        {/* Certificaciones */}
        <div id="certificaciones">
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="font-mono-tech text-[#00ff41] text-xs tracking-widest">[ 04 ] CERTIFICACIONES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-10">
              Certificados <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#00f0ff]">& Cursos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className={`card-tech rounded-xl p-5 group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100 + 400}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0"
                    style={{ border: `1px solid ${cert.color}30`, background: `${cert.color}08` }}
                  >
                    <i className={`${cert.icon} text-base`} style={{ color: cert.color }}></i>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {cert.status === 'training' ? (
                      <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded border border-yellow-500/30 text-yellow-400 bg-yellow-500/05">
                        EN FORMACIÓN
                      </span>
                    ) : (
                      <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded border border-[rgba(0,255,65,0.3)] text-[#00ff41] bg-[rgba(0,255,65,0.05)]">
                        ACTIVO
                      </span>
                    )}
                    {cert.hours && (
                      <span className="font-mono-tech text-[10px] text-gray-600">{cert.hours}</span>
                    )}
                  </div>
                </div>
                <div className="font-mono-tech text-lg font-bold mb-1" style={{ color: cert.color }}>{cert.name}</div>
                <div className="text-white text-sm font-medium mb-1">{cert.full}</div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[rgba(255,255,255,0.05)]">
                  <span className="text-gray-500 text-xs">{cert.issuer}</span>
                  <span className="font-mono-tech text-xs text-gray-600">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}