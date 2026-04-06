import { Box, Flex, Text, Container } from "@radix-ui/themes";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-[#fdfcfb]">

            <Container size="4">
                <Flex align="center" justify="between" gap="9" wrap="wrap-reverse">

                    {/* BLOQUE DE TEXTO */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl animate-fade-in mx-4 flex gap-4 flex-col"
                    >
                        <Text as="div" size="2" weight="bold" className="tracking-[0.2em] uppercase mb-4 text-[#b8938d]">
                            Bienvenido a tu espacio de calma
                        </Text>

                        <h1 className="text-6xl font-serif text-gray-900 leading-tight mb-6">
                            Encontrá el <span className="text-[#9fb1a5] italic">equilibrio</span> que necesitás.
                        </h1>

                        <Text size="4" color="gray" className="leading-relaxed border-l-4 border-[#b8938d] pl-4 mb-8">
                            Acompañamiento terapéutico especializado en Gestalt.
                            Un proceso para redescubrir tu libertad y bienestar emocional
                            en un entorno seguro y profesional.
                        </Text>

                        <div className="flex gap-4 py-5">

                            <button
                                className="cursor-pointer rounded-full transition-all duration-500 hover:shadow-[0_25px_50px_-15px_#9fb1a5] p-3 flex gap-4 bg-[#9fb1a5] hover:-translate-y-1"
                            >
                                <span className="text-lg font-bold text-white pr-3">
                                    Agendar Sesión
                                </span>
                            </button>

                            <button
                                className="cursor-pointer rounded-full transition-all duration-500 hover:shadow-[0_25px_50px_-15px_#b8938d] p-3 flex gap-4 bg-linear-to-r border-2 border-[#b8938d] bg-[#b8938d] text-white hover:-translate-y-1"
                            >
                                <span className="text-lg font-bold pr-3 ">
                                    Saber más
                                </span>
                            </button>
                        </div>
                    </motion.div>

                    {/* BLOQUE DE IMAGEN (Line Art o Metáfora) */}
                    <Box className="relative flex-1 min-w-87.5">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10 border border-gray-200 p-4 rounded-full"
                        >
                            <img
                                src="https://img.freepik.com/free-vector/hand-drawn-one-line-art-animal-illustration_23-2149261852.jpg?semt=ais_hybrid&w=740&q=80"
                                alt="Metáfora de libertad"
                                className="w-full h-auto rounded-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>

                        {/* Cuadro decorativo que "enmarca" la imagen, similar a tu referencia */}
                        <div className="absolute -top-6 -right-6 w-full h-full border border-purple-200 rounded-full -z-10" />
                    </Box>

                </Flex>
            </Container>
        </section >
    );
}