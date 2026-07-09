import { useState, useEffect } from "react";
import { FaFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from "react-icons/ai";
import { TbMailFilled } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "#services" },
        { name: "Sobre mi", href: "#about" },
        { name: "Articulos", href: "#articles" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 
            ${isScrolled
                    ? "py-4 bg-white/70 backdrop-blur-md border-b border-gray-100 shadow-sm"
                    : "py-8 bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-3 items-center md:flex md:justify-between">

                {/* Boton para responsive.- */}
                <div className="flex md:hidden justify-start">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-[#9fb1a5] transition-colors p-2"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                    </button>
                </div>

                <div className="flex justify-center md:justify-start">
                    <div className="flex items-center gap-3">
                        <div className="relative shrink-0 w-10 h-10 md:w-12 md:h-12">
                            <img
                                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?..."
                                alt="Lic. Lucas Urquiza"
                                className="w-full h-full object-cover rounded-full filter grayscale-30"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                    if (fallback) fallback.style.display = 'flex';
                                }}
                            />
                            {/* Fallback de iniciales */}
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-600 font-semibold rounded-full text-xs md:text-sm"
                                style={{ display: 'none' }}
                            >
                                LU
                            </div>
                        </div>

                        <div className="hidden sm:block text-left">
                            <h3 className="text-xs md:text-sm font-bold text-gray-800 tracking-tight leading-tight">
                                Lic. Lucas Urquiza
                            </h3>
                            <p className="text-[10px] md:text-xs font-medium text-gray-500">
                                Psicólogo Clínico
                            </p>
                        </div>
                    </div>
                </div>

                {/* Links de Navegación */}
                <nav className={`
                    fixed md:static top-16.25 left-0 w-full md:w-auto h-[calc(100vh-65px)] md:h-auto
                    bg-white md:bg-transparent border-t md:border-t-0 border-gray-100 md:border-none
                    flex flex-col md:flex-row gap-8 md:gap-10 p-10 md:p-0 transition-all duration-300 ease-in-out
                    ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full md:translate-x-0 opacity-0 md:opacity-100"}
                `}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)} // Cierra el menú al hacer click en mobile
                            className="text-base md:text-sm font-semibold text-gray-600 hover:text-[#9fb1a5] transition-colors relative group w-max"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#9fb1a5] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Redes Sociales */}
                <div className="flex justify-end">
                    <ul className="flex items-center space-x-4 md:space-x-6">
                        <li>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-[#b8938d] transition-colors duration-300"
                            >
                                <FaFacebook size={18} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-[#b8938d] transition-colors duration-300"
                            >
                                <AiFillInstagram size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:lucasurquiza.psic@gmail.com"
                                className="text-gray-600 hover:text-[#b8938d] transition-colors duration-300"
                            >
                                <TbMailFilled size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}