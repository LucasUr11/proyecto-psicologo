import { Flex, Box, Text, Container } from "@radix-ui/themes";
import { motion } from "framer-motion";

export function AboutMe() {
    return (
        <section id="about" className="py-24 bg-[#faf9f6] relative overflow-hidden">
            {/* Mancha de color decorativa de fondo */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9fb1a5]/10 rounded-full blur-3xl" />

            <Container size="3">
                <Flex gap="9" align="center" direction={{ initial: "column", md: "row" }} className="w-full">

                    {/* Lado de la Imagen */}
                    <motion.div
                        className="flex-1 w-full flex justify-center md:justify-end"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Box className="relative w-full max-w-112.5">
                            <div className="aspect-square bg-[#b8938d]/20 overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_80%] animate-morph">
                                <img
                                    src="/assets/psicologo_profesional.jpg"
                                    alt="Lic. Lucas Urquiza"
                                    className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            {/* Marco decorativo */}
                            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#9fb1a5]/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] -z-10" />
                        </Box>
                    </motion.div>

                    {/* Lado del Contenido */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Box>
                            <Text as="div" size="2" weight="bold" className="text-[#b8938d] tracking-[0.2em] uppercase mb-4">
                                Sobre mí
                            </Text>
                            <h2 className="text-5xl font-serif text-gray-800 mb-6 leading-tight">
                                Compromiso con tu <span className="italic">proceso personal</span>.
                            </h2>
                            <Text as="p" size="4" className="text-gray-600 mb-6 leading-relaxed">
                                Soy el **Lic. Lucas Urquiza**, psicólogo apasionado por la clínica y el enfoque Gestáltico. Mi objetivo es ofrecerte un espacio donde te sientas escuchado sin juicios, facilitando el camino hacia tu propia autonomía.
                            </Text>
                            <Text as="p" size="3" className="text-gray-600 mb-8 italic border-l-4 border-[#9fb1a5] pl-4">
                                "La terapia es el arte de volver a ser uno mismo."
                            </Text>

                            <div className="font-serif text-3xl text-gray-400 opacity-40">
                                Lucas Urquiza
                            </div>
                        </Box>
                    </motion.div>

                </Flex>
            </Container>
        </section>
    );
}