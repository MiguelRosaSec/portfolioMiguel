import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Sistemas',
    icon: 'ri-computer-line',
    color: '#00f0ff',
    skills: ['Linux', 'Windows'],
  },
  {
    title: 'Scripting & Dev',
    icon: 'ri-code-s-slash-line',
    color: '#00ff41',
    skills: ['Bash', 'PowerShell', 'C', 'C++', 'Python'],
  },
  {
    title: 'Redes',
    icon: 'ri-wifi-line',
    color: '#00f0ff',
    skills: ['TCP/IP', 'DNS', 'DHCP', 'NAT', 'VPN', 'VLAN'],
  },
  {
    title: 'Infraestructura',
    icon: 'ri-server-line',
    color: '#00ff41',
    skills: ['Docker', 'Docker Compose', 'VMware'],
  },
  {
    title: 'Seguridad Ofensiva',
    icon: 'ri-bug-line',
    color: '#00f0ff',
    skills: ['Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 'OWASP ZAP', 'Hydra', 'Nikto'],
  },
  {
    title: 'Servicios',
    icon: 'ri-database-2-line',
    color: '#00ff41',
    skills: ['Active Directory', 'Apache', 'Nginx', 'Bind9', 'Postfix', 'MySQL'],
  },
  {
    title: 'Gestión',
    icon: 'ri-file-text-line',
    color: '#00f0ff',
    skills: ['Microsoft Office', 'Documentación Técnica', 'Informes de Seguridad'],
  },
];

export default function Skills() {
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
    <section id="skills" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#04080f]/50 to-[#030308]"></div>
      <div className="circuit-bg absolute inset-0 opacity-25"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="font-mono-tech text-[#00ff41] text-xs tracking-widest">[ 05 ] SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#00f0ff]">Técnico</span>
          </h2>
          <p className="text-gray-500 text-sm mb-12 max-w-xl">
            Herramientas, tecnologías y competencias desarrolladas en entornos reales y laboratorios de ciberseguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`card-tech rounded-xl p-5 group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[rgba(255,255,255,0.05)]">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded flex-shrink-0"
                  style={{ border: `1px solid ${cat.color}30`, background: `${cat.color}08` }}
                >
                  <i className={`${cat.icon} text-sm`} style={{ color: cat.color }}></i>
                </div>
                <span className="text-white text-sm font-semibold">{cat.title}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono-tech text-[11px] px-2.5 py-1 rounded cursor-default transition-all duration-200 hover:scale-105"
                    style={{
                      border: `1px solid ${cat.color}20`,
                      color: cat.color === '#00ff41' ? 'rgba(0,255,65,0.8)' : 'rgba(0,240,255,0.8)',
                      background: `${cat.color}06`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Proyectos link card */}
          <div
            id="proyectos"
            className={`card-green rounded-xl p-5 flex flex-col justify-between transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${skillCategories.length * 80 + 200}ms` }}
          >
            <div>
              <div className="w-9 h-9 flex items-center justify-center rounded border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.08)] mb-4">
                <i className="ri-folder-shield-2-line text-[#00ff41] text-sm"></i>
              </div>
              <div className="text-white text-sm font-semibold mb-2">Proyectos</div>
              <div className="text-gray-500 text-xs leading-relaxed">
                CTF, laboratorios de pentesting, infraestructura Docker y seguridad de redes.
              </div>
            </div>
            <a
              href="#proyectos-section"
              onClick={(e) => { e.preventDefault(); document.getElementById('proyectos-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="mt-4 font-mono-tech text-[#00ff41] text-xs flex items-center gap-1.5 hover:gap-3 transition-all duration-300 cursor-pointer"
            >
              Ver proyectos <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}