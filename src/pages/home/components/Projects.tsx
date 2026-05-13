import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'CTF "Inside The Breach"',
    subtitle: 'Director & Desarrollador',
    description: 'Reto CTF ofensivo en entorno corporativo simulado. Diseño de infraestructura, vectores de ataque, flags y documentación técnica completa para participantes.',
    tags: ['CTF', 'Red Team', 'Infraestructura', 'Documentación'],
    icon: 'ri-flag-2-line',
    color: '#00ff41',
    badge: 'DESTACADO',
    image: 'https://readdy.ai/api/search-image?query=dark%20cybersecurity%20CTF%20challenge%20interface%20with%20terminal%20screens%2C%20green%20matrix%20code%2C%20network%20topology%20diagram%20on%20dark%20background%2C%20hacker%20competition%20environment%20with%20glowing%20monitors%20and%20circuit%20board%20patterns&width=600&height=340&seq=ctf001&orientation=landscape',
  },
  {
    title: 'Laboratorios de Pentesting',
    subtitle: 'Investigación & Práctica',
    description: 'Entornos de máquinas vulnerables para práctica de explotación, post-explotación, escalada de privilegios, mitigación y hardening de sistemas.',
    tags: ['Metasploit', 'Nmap', 'Burp Suite', 'Hydra', 'Nikto'],
    icon: 'ri-bug-line',
    color: '#00f0ff',
    badge: 'LAB',
    image: 'https://readdy.ai/api/search-image?query=penetration%20testing%20laboratory%20setup%20with%20multiple%20terminal%20windows%20showing%20vulnerability%20scanning%20results%2C%20dark%20background%20with%20cyan%20and%20green%20text%2C%20network%20attack%20diagrams%20and%20exploit%20code%20on%20screens&width=600&height=340&seq=pentest002&orientation=landscape',
  },
  {
    title: 'Infraestructura Segura con Docker',
    subtitle: 'DevSecOps',
    description: 'Despliegue de servicios de red, bases de datos y servidores web en contenedores Docker con configuración segura, redes aisladas y hardening de servicios.',
    tags: ['Docker', 'Docker Compose', 'Nginx', 'MySQL', 'Bind9'],
    icon: 'ri-stack-line',
    color: '#00ff41',
    badge: 'INFRA',
    image: 'https://readdy.ai/api/search-image?query=Docker%20container%20infrastructure%20diagram%20on%20dark%20background%2C%20interconnected%20service%20nodes%20with%20glowing%20lines%2C%20server%20architecture%20visualization%20with%20green%20and%20cyan%20accents%2C%20technical%20corporate%20style&width=600&height=340&seq=docker003&orientation=landscape',
  },
  {
    title: 'Seguridad de Redes',
    subtitle: 'Defensa & Monitorización',
    description: 'Implementación de firewalls, VPN, segmentación de redes con VLANs, monitorización de tráfico con Wireshark y hardening de infraestructura de red corporativa.',
    tags: ['Firewall', 'VPN', 'VLAN', 'Wireshark', 'Hardening'],
    icon: 'ri-shield-keyhole-line',
    color: '#00f0ff',
    badge: 'REDES',
    image: 'https://readdy.ai/api/search-image?query=network%20security%20monitoring%20dashboard%20with%20dark%20background%2C%20firewall%20rules%20visualization%2C%20VPN%20tunnel%20diagram%2C%20network%20topology%20with%20glowing%20nodes%20and%20connections%2C%20cybersecurity%20corporate%20style&width=600&height=340&seq=network004&orientation=landscape',
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="proyectos-section" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="circuit-bg absolute inset-0 opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#050d1a]/40 to-[#030308]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="font-mono-tech text-[#00ff41] text-xs tracking-widest">[ 06 ] PROYECTOS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#00f0ff]">& Laboratorios</span>
          </h2>
          <p className="text-gray-500 text-sm mb-12 max-w-xl">
            Proyectos reales y laboratorios de ciberseguridad desarrollados en entornos controlados y competiciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className={`card-tech rounded-xl overflow-hidden group cursor-default transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className={`w-full h-full object-cover object-top transition-transform duration-700 ${hovered === i ? 'scale-105' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="font-mono-tech text-[10px] px-2 py-0.5 rounded border font-semibold"
                    style={{ borderColor: `${proj.color}50`, color: proj.color, background: `${proj.color}15` }}
                  >
                    {proj.badge}
                  </span>
                </div>
                <div
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded"
                  style={{ border: `1px solid ${proj.color}30`, background: `${proj.color}10` }}
                >
                  <i className={`${proj.icon} text-sm`} style={{ color: proj.color }}></i>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-1">
                  <span className="font-mono-tech text-[10px] text-gray-600">{proj.subtitle}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{proj.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{proj.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-tech text-[10px] px-2 py-0.5 rounded border"
                      style={{
                        borderColor: `${proj.color}20`,
                        color: proj.color === '#00ff41' ? 'rgba(0,255,65,0.7)' : 'rgba(0,240,255,0.7)',
                        background: `${proj.color}05`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}