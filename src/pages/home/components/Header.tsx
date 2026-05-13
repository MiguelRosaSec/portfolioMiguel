import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Certificaciones', href: '#certificaciones' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030308]/95 backdrop-blur-md border-b border-[rgba(0,240,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 flex items-center justify-center border border-[rgba(0,255,65,0.5)] rounded bg-[rgba(0,255,65,0.05)] group-hover:border-[rgba(0,255,65,0.9)] transition-all duration-300">
            <i className="ri-shield-keyhole-line text-[#00ff41] text-sm"></i>
          </div>
          <span className="font-mono-tech text-sm font-semibold text-white hidden sm:block">
            <span className="text-[#00ff41]">Miguel</span>RosaSec
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`px-3 py-1.5 text-xs font-mono-tech font-medium rounded transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeSection === link.href.replace('#', '')
                  ? 'text-[#00f0ff] bg-[rgba(0,240,255,0.08)]'
                  : 'text-gray-400 hover:text-[#00f0ff] hover:bg-[rgba(0,240,255,0.05)]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="mailto:miguelrosasec@gmail.com"
            className="w-8 h-8 flex items-center justify-center border border-[rgba(0,240,255,0.2)] rounded text-[#00f0ff] hover:border-[rgba(0,240,255,0.6)] hover:bg-[rgba(0,240,255,0.08)] transition-all duration-300 cursor-pointer"
            title="Email"
          >
            <i className="ri-mail-line text-sm"></i>
          </a>
          <a
            href="https://linkedin.com/in/miguelangelrosacaparros"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center border border-[rgba(0,240,255,0.2)] rounded text-[#00f0ff] hover:border-[rgba(0,240,255,0.6)] hover:bg-[rgba(0,240,255,0.08)] transition-all duration-300 cursor-pointer"
            title="LinkedIn"
          >
            <i className="ri-linkedin-line text-sm"></i>
          </a>
          <a
            href="https://github.com/MiguelRosaSec"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center border border-[rgba(0,240,255,0.2)] rounded text-[#00f0ff] hover:border-[rgba(0,240,255,0.6)] hover:bg-[rgba(0,240,255,0.08)] transition-all duration-300 cursor-pointer"
            title="GitHub"
          >
            <i className="ri-github-line text-sm"></i>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center text-[#00f0ff] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`text-lg ${menuOpen ? 'ri-close-line' : 'ri-menu-3-line'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#030308]/98 backdrop-blur-md border-b border-[rgba(0,240,255,0.1)] px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-3 py-2 text-sm font-mono-tech text-gray-400 hover:text-[#00f0ff] hover:bg-[rgba(0,240,255,0.05)] rounded transition-all duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 px-3 pt-3 border-t border-[rgba(0,240,255,0.1)] mt-2">
              <a href="mailto:miguelrosasec@gmail.com" className="text-[#00f0ff] hover:text-white transition-colors cursor-pointer">
                <i className="ri-mail-line text-lg"></i>
              </a>
              <a href="https://linkedin.com/in/miguelangelrosacaparros" target="_blank" rel="nofollow noopener noreferrer" className="text-[#00f0ff] hover:text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-line text-lg"></i>
              </a>
              <a href="https://github.com/MiguelRosaSec" target="_blank" rel="nofollow noopener noreferrer" className="text-[#00f0ff] hover:text-white transition-colors cursor-pointer">
                <i className="ri-github-line text-lg"></i>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}