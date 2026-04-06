import { Container, Box, Flex, Text, Separator } from "@radix-ui/themes";
import { FiInstagram, FiFacebook, FiMail } from 'react-icons/fi';

export function Footer() {
    
    return (
        <footer className="py-12 px-8 text-white shadow-xl bg-[#b8938d]"
        >
            <Container size="4">
                <Flex direction="column" align="center" gap="6">

                    {/* Navegación y Logo Central */}
                    <Flex
                        align="center"
                        justify="center"
                        gap={{ initial: "4", md: "9" }}
                        direction={{ initial: "column", md: "row" }}
                        className="w-full"
                    >
                        <nav className="flex gap-6 text-sm uppercase tracking-widest opacity-90">
                            <a href="/" className="hover:text-gray-200 transition-colors">Inicio</a>
                            <a href="#about" className="hover:text-gray-200 transition-colors">Sobre Mí</a>
                        </nav>

                        {/* Logo / Título Central */}
                        <Box className="text-center px-4">
                            <Text as="div" className="font-serif text-3xl md:text-4xl leading-none">
                                Lucas Urquiza
                            </Text>
                            <Text size="1" className="uppercase tracking-[0.4em] opacity-70 block mt-2">
                                Psicólogo Clínico
                            </Text>
                        </Box>

                        <nav className="flex gap-6 text-sm uppercase tracking-widest opacity-90">
                            <a href="#articles" className="hover:text-gray-200 transition-colors">Artículos</a>
                            <a href="#contacto" className="hover:text-gray-200 transition-colors">Contacto</a>
                        </nav>
                    </Flex>

                    <Separator size="4" className="bg-white/20 my-4 w-full max-w-4xl" />

                    {/* Redes y Copyright */}
                    <Flex direction="column" align="center" gap="4">
                        <Flex gap="5">
                            <a href="#" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
                                <FiFacebook size={20} />
                            </a>
                            <a href="#" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
                                <FiInstagram size={20} />
                            </a>
                            <a href="#" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
                                <FiMail size={20} />
                            </a>
                        </Flex>

                        <Text size="1" className="opacity-60 uppercase tracking-widest text-center">
                            © {new Date().getFullYear()} Lic. Lucas Urquiza. Todos los derechos reservados.
                        </Text>
                    </Flex>

                </Flex>
            </Container>
        </footer>
    );
}