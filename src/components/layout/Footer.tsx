import { FiInstagram, FiFacebook, FiMail } from 'react-icons/fi';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#b8938d] text-white pt-16 pb-8 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-6 pb-12 border-b border-white/20">

                    {/* Navegación y Logo Central */}
                    <div className="flex flex-col items-center md:items-start max-w-xs">
                        <h2 className="font-serif text-2xl md:text-3xl leading-tight tracking-wide">
                            Lucas Urquiza
                        </h2>
                        <p className="text-xs uppercase tracking-[0.2em] opacity-80 mt-2">
                            Psicólogo Clínico
                        </p>
                        <p className="text-xs opacity-70 mt-4 leading-relaxed">
                            Espacio de acompañamiento terapéutico especializado en enfoque Gestalt orientado al bienestar emocional.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold opacity-90 mb-1">
                            Explorar
                        </h4>
                        <nav className="flex flex-col items-center md:items-start gap-2.5 text-sm font-medium">
                            <a href="/" className="opacity-80 hover:opacity-100 hover:translate-x-1 md:hover:translate-x-1 transition-all">Inicio</a>
                            <a href="#services" className="opacity-80 hover:opacity-100 hover:translate-x-1 md:hover:translate-x-1 transition-all">Servicios</a>
                            <a href="#about" className="opacity-80 hover:opacity-100 hover:translate-x-1 md:hover:translate-x-1 transition-all">Sobre Mí</a>
                            <a href="#articles" className="opacity-80 hover:opacity-100 hover:translate-x-1 md:hover:translate-x-1 transition-all">Artículos</a>
                            <a href="#contacto" className="opacity-80 hover:opacity-100 hover:translate-x-1 md:hover:translate-x-1 transition-all">Contacto</a>
                        </nav>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold opacity-90">
                            Conectemos
                        </h4>

                        {/* Iconos de redes sociales */}
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all active:scale-95"
                                aria-label="Facebook"
                            >
                                <FiFacebook size={18} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all active:scale-95"
                                aria-label="Instagram"
                            >
                                <FiInstagram size={18} />
                            </a>
                            <a
                                href="mailto:lucasestudios2021@gmail.com"
                                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all active:scale-95"
                                aria-label="Email"
                            >
                                <FiMail size={18} />
                            </a>
                        </div>
                        <span className="text-xs opacity-75 md:text-right mt-1">
                            lucasestudios2021@gmail.com
                        </span>
                    </div>

                </div>

                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest opacity-60 text-center sm:text-left">
                    <p>© {currentYear} Lic. Lucas Urquiza. Todos los derechos reservados.</p>
                    <p className="normal-case opacity-80">Diseño Profesional • Enfoque Gestalt</p>
                </div>
            </div>
        </footer>
    );
}