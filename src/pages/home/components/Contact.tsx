import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setFormStatus('sending');

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const res = await fetch('https://formspree.io/f/mdabvppw', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      setFormStatus('success');
      form.reset();
    } else {
      setFormStatus('error');
    }
  } catch {
    setFormStatus('error');
  }
};

  return (
    <section id="contacto" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="circuit-bg absolute inset-0 opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-[#050d1a]/50 to-[#030308]"></div>

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-[rgba(0,255,65,0.04)] blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-[rgba(0,240,255,0.04)] blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="font-mono-tech text-[#00ff41] text-xs tracking-widest">[ 07 ] CONTACTO</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            ¿Quieres contactar<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] to-[#00f0ff]">conmigo?</span>
          </h2>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact info */}
          <div className={`space-y-5 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="card-tech rounded-xl p-6">
              <div className="font-mono-tech text-[#00f0ff] text-xs tracking-widest mb-5">CANALES DE CONTACTO</div>
              <div className="space-y-4">
                <a
                  href="mailto:miguelrosasec@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.05)] group-hover:border-[rgba(0,255,65,0.7)] group-hover:bg-[rgba(0,255,65,0.1)] transition-all duration-300 flex-shrink-0">
                    <i className="ri-mail-line text-[#00ff41] text-sm"></i>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-mono-tech mb-0.5">EMAIL</div>
                    <div className="text-white text-sm group-hover:text-[#00ff41] transition-colors">miguelrosasec@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded border border-[rgba(0,240,255,0.3)] bg-[rgba(0,240,255,0.05)] flex-shrink-0">
                    <i className="ri-phone-line text-[#00f0ff] text-sm"></i>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-mono-tech mb-0.5">TELÉFONO</div>
                    <div className="text-white text-sm">664-416-525</div>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/miguelangelrosacaparros"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.05)] group-hover:border-[rgba(0,255,65,0.7)] group-hover:bg-[rgba(0,255,65,0.1)] transition-all duration-300 flex-shrink-0">
                    <i className="ri-linkedin-line text-[#00ff41] text-sm"></i>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-mono-tech mb-0.5">LINKEDIN</div>
                    <div className="text-white text-sm group-hover:text-[#00ff41] transition-colors">miguelangelrosacaparros</div>
                  </div>
                </a>

                <a
                  href="https://github.com/MiguelRosaSec"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded border border-[rgba(0,240,255,0.3)] bg-[rgba(0,240,255,0.05)] group-hover:border-[rgba(0,240,255,0.7)] group-hover:bg-[rgba(0,240,255,0.1)] transition-all duration-300 flex-shrink-0">
                    <i className="ri-github-line text-[#00f0ff] text-sm"></i>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-mono-tech mb-0.5">GITHUB</div>
                    <div className="text-white text-sm group-hover:text-[#00f0ff] transition-colors">MiguelRosaSec</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:miguelrosasec@gmail.com"
                className="btn-primary flex-1 px-5 py-3 rounded-md font-mono-tech text-sm font-semibold cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                <i className="ri-mail-send-line"></i>
                Enviar Email
              </a>
              <a
                href="https://linkedin.com/in/miguelangelrosacaparros"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-secondary flex-1 px-5 py-3 rounded-md font-mono-tech text-sm font-semibold cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                <i className="ri-linkedin-line"></i>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="card-tech rounded-xl p-6">
              <div className="font-mono-tech text-[#00f0ff] text-xs tracking-widest mb-5">ENVIAR MENSAJE</div>

              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[rgba(0,255,65,0.5)] bg-[rgba(0,255,65,0.08)]">
                    <i className="ri-check-line text-[#00ff41] text-2xl"></i>
                  </div>
                  <div className="text-white font-semibold text-center">¡Mensaje enviado!</div>
                  <div className="text-gray-400 text-sm text-center">Te responderé en menos de 24 horas.</div>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="btn-secondary px-4 py-2 rounded-md font-mono-tech text-xs cursor-pointer whitespace-nowrap mt-2"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form
                  data-readdy-form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono-tech text-xs text-gray-500 mb-1.5 block">NOMBRE</label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        placeholder="Tu nombre"
                        className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(0,240,255,0.15)] rounded-md px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(0,240,255,0.5)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono-tech text-xs text-gray-500 mb-1.5 block">EMAIL</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="tu@email.com"
                        className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(0,240,255,0.15)] rounded-md px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(0,240,255,0.5)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono-tech text-xs text-gray-500 mb-1.5 block">ASUNTO</label>
                    <input
                      type="text"
                      name="asunto"
                      required
                      placeholder="Motivo del contacto"
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(0,240,255,0.15)] rounded-md px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(0,240,255,0.5)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono-tech text-xs text-gray-500 mb-1.5 block">MENSAJE</label>
                    <textarea
                      name="mensaje"
                      required
                      rows={4}
                      maxLength={500}
                      placeholder="Describe tu proyecto o consulta..."
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(0,240,255,0.15)] rounded-md px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(0,240,255,0.5)] transition-colors resize-none"
                    />
                    <div className="font-mono-tech text-[10px] text-gray-600 text-right mt-1">Máx. 500 caracteres</div>
                  </div>

                  {formStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-xs font-mono-tech bg-red-500/05 border border-red-500/20 rounded-md px-3 py-2">
                      <i className="ri-error-warning-line"></i>
                      Error al enviar. Inténtalo de nuevo o usa el email directamente.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="btn-primary w-full px-5 py-3 rounded-md font-mono-tech text-sm font-semibold cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <i className="ri-loader-4-line animate-spin"></i>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line"></i>
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}