import { useState, useEffect } from "react";
import { Avatar, Flex, Box, Text } from "@radix-ui/themes";
import { FaFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from "react-icons/ai";
import { TbMailFilled } from "react-icons/tb";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

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
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 
            ${isScrolled
                    ? "py-4 bg-white/70 backdrop-blur-md border-b border-gray-100 shadow-sm"
                    : "py-8 bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">

                {/* Perfil: Usamos colores más suaves */}
                <Box>
                    <Flex gap="3" align="center">
                        <Avatar
                            size="3"
                            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?..."
                            radius="full"
                            fallback="LU"
                            className="grayscale-30"
                        />
                        <Box>
                            <Text as="div" size="2" weight="bold" className="text-gray-800 tracking-tight">
                                Lic. Lucas Urquiza
                            </Text>
                            <Text as="div" size="1" className="text-gray-500">
                                Psicólogo Clínico
                            </Text>
                        </Box>
                    </Flex>
                </Box>


                {/* Links de Navegación */}
                <div className="flex gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-gray-600 hover:text-[#9fb1a5] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#9fb1a5] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Redes Sociales */}
                <ul className="flex items-center space-x-6">
                    <li>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#b8938d] transition-colors duration-300"
                        >
                            <FaFacebook  size={18} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#b8938d] transition-colors duration-300"
                        >
                            <AiFillInstagram size={22} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:lucasurquiza.psic@gmail.com"
                            className="text-gray-600 hover:text-[#b8938d] transition-colors duration-300"
                        >
                            <TbMailFilled  size={22} />
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}