import { useEffect, useRef, useState } from 'react';

const TERMINAL_LINES = [
  '> nmap -sV -sC -p- 192.168.1.0/24',
  '> Starting Nmap 7.94 scan...',
  '> Discovered open port 22/tcp on 192.168.1.10',
  '> Discovered open port 80/tcp on 192.168.1.15',
  '> Discovered open port 443/tcp on 192.168.1.20',
  '> [+] Running Metasploit Framework...',
  '> use exploit/multi/handler',
  '> set PAYLOAD linux/x64/meterpreter/reverse_tcp',
  '> exploit -j',
  '> [*] Meterpreter session 1 opened',
  '> [+] Target compromised. Privilege escalation...',
  '> whoami && id',
  '> root uid=0(root) gid=0(root)',
];

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const NODE_COUNT = 60;

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
    />
  );
}

function TerminalWidget() {
  const [lines, setLines] = useState<string[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [currentLine, setCurrentLine] = useState('');

  useEffect(() => {
    if (lineIdx >= TERMINAL_LINES.length) return;
    const target = TERMINAL_LINES[lineIdx];
    if (charIdx < target.length) {
      const t = setTimeout(() => {
        setCurrentLine((prev) => prev + target[charIdx]);
        setCharIdx((c) => c + 1);
      }, 30);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLines((prev) => [...prev, target]);
        setCurrentLine('');
        setCharIdx(0);
        setLineIdx((l) => l + 1);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx]);

  return (
    <div className="card-tech rounded-lg p-4 w-full max-w-md font-mono-tech text-xs leading-relaxed overflow-hidden">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[rgba(0,240,255,0.1)]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
        <span className="text-gray-500 ml-2 text-[10px]">terminal — bash</span>
      </div>
      <div className="space-y-1 max-h-48 overflow-hidden">
        {lines.map((line, i) => (
          <div key={i} className={`${line.startsWith('> [+]') || line.startsWith('> root') ? 'text-[#00ff41]' : line.startsWith('> [*]') ? 'text-[#00f0ff]' : 'text-gray-300'}`}>
            {line}
          </div>
        ))}
        {lineIdx < TERMINAL_LINES.length && (
          <div className="text-gray-300">
            {currentLine}
            <span className="animate-blink text-[#00ff41]">█</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #030308 0%, #050d1a 50%, #030308 100%)' }}
    >
      {/* Background layers */}
      <NetworkCanvas />
      <div className="circuit-bg absolute inset-0 opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030308]"></div>

      {/* Scan line effect */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,255,65,0.4)] to-transparent pointer-events-none"
        style={{ animation: 'scanMove 6s linear infinite', top: 0 }}
      ></div>

      {/* HUD corners */}
      <div className="absolute top-20 left-6 w-12 h-12 border-t-2 border-l-2 border-[rgba(0,240,255,0.3)] pointer-events-none"></div>
      <div className="absolute top-20 right-6 w-12 h-12 border-t-2 border-r-2 border-[rgba(0,240,255,0.3)] pointer-events-none"></div>
      <div className="absolute bottom-8 left-6 w-12 h-12 border-b-2 border-l-2 border-[rgba(0,240,255,0.3)] pointer-events-none"></div>
      <div className="absolute bottom-8 right-6 w-12 h-12 border-b-2 border-r-2 border-[rgba(0,240,255,0.3)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >

            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Miguel Ángel
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#00f0ff]">
                Rosa Caparrós
              </span>
            </h1>

            <div
              className={`flex items-center gap-3 justify-center lg:justify-start mb-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="font-mono-tech text-[#00f0ff] text-sm md:text-base font-medium">Pentesting</span>
              <span className="text-[rgba(0,240,255,0.3)]">|</span>
              <span className="font-mono-tech text-[#00f0ff] text-sm md:text-base font-medium">Ciberseguridad</span>
              <span className="text-[rgba(0,240,255,0.3)]">|</span>
              <span className="font-mono-tech text-[#00f0ff] text-sm md:text-base font-medium">Redes</span>
            </div>

            <p
              className={`text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Profesional orientado a la seguridad de sistemas, redes e infraestructuras, con experiencia en administración, hardening, laboratorios ofensivos y defensivos, monitorización y resolución de incidencias en entornos IT corporativos.
            </p>

            <div
              className={`flex flex-wrap gap-3 justify-center lg:justify-start transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary px-5 py-2.5 rounded-md font-mono-tech text-sm font-semibold cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-mail-send-line"></i>
                Contactar
              </a>
              <a
                href="https://github.com/MiguelRosaSec"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-secondary px-5 py-2.5 rounded-md font-mono-tech text-sm font-semibold cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-github-line"></i>
                Ver GitHub
              </a>
              <a
                href="https://linkedin.com/in/miguelangelrosacaparros"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-secondary px-5 py-2.5 rounded-md font-mono-tech text-sm font-semibold cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-linkedin-line"></i>
                Ver LinkedIn
              </a>
            </div>

            {/* Stats row */}
            <div
              className={`flex flex-wrap gap-6 justify-center lg:justify-start mt-10 pt-8 border-t border-[rgba(0,240,255,0.1)] transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {[
                { value: 'eJPTv2', label: 'Certificado INE' },
                { value: 'eCPPTv3', label: 'Certificado INE' },
                { value: 'CTF', label: 'Director & Dev' },

              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-mono-tech text-[#00ff41] text-lg font-bold text-glow-green">{stat.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div
            className={`w-full lg:w-auto lg:min-w-[380px] transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <TerminalWidget />

            {/* Badge row */}
            <div className="flex flex-col gap-2 mt-4">
              {[['Red Team', 'Pentesting', 'OSINT', 'Hardening', 'Docker'], ['Linux', 'Windows', 'Active Directory', 'Bash', 'PowerShell']].map((row, rowIdx) => (
                <div key={rowIdx} className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {row.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-tech text-[10px] px-2.5 py-1 rounded border border-[rgba(0,255,65,0.2)] text-[#00ff41] bg-[rgba(0,255,65,0.04)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float">
        <span className="font-mono-tech text-[10px] text-gray-600">SCROLL</span>
        <i className="ri-arrow-down-line text-[#00f0ff] text-sm"></i>
      </div>
    </section>
  );
}