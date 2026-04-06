import { Box, Flex, Text, Container } from "@radix-ui/themes";
import { type Variants, motion } from "framer-motion";

const services = [
    {
        title: "Relaciones",
        desc: "Terapia para establecer bases profundas y saludables en tus vínculos.",
        img: "/illustrations/Relaciones.svg",
    },
    {
        title: "Salud Mental",
        desc: "Mejora tu enfoque, alivia el estrés y desarrolla tu creatividad interior.",
        img: "/illustrations/Salud_Mental.svg",
    },
    {
        title: "Emociones",
        desc: "Alcanza un mejor nivel de bienestar y la habilidad de gestionar tus sentimientos.",
        img: "/illustrations/Emociones.svg",
    },
    {
        title: "Conflictos",
        desc: "Perspectiva profesional para reducir y resolver conflictos en tus relaciones.",
        img: "/illustrations/Conflictos.svg",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.6, 
            ease: "easeOut" //
        }
    },
};

export function Services() {

    return (
        <section id="services" className="py-24 bg-white">
            <Container size="4">
                {/* Cabecera de la Sección */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Flex direction="column" align="center" className="mb-16 text-center">
                        <Text size="2" weight="bold" className="tracking-[0.2em] uppercase text-[#b8938d] mb-4">
                            Qué podemos ofrecer
                        </Text>
                        <h2 className="text-5xl font-serif text-gray-800 mb-6">
                            Especialidades Terapéuticas
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            style={{ originX: 0.5 }}
                        >
                            <Box className="w-20 h-1 bg-[#9fb1a5] rounded-full" />
                        </motion.div>
                    </Flex>
                </motion.div>

                {/* Cuadrícula de Servicios */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" //
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group p-8 rounded-3xl transition-all duration-500 hover:bg-[#faf9f6] hover:-translate-y-2 flex flex-col items-center"
                        >
                            <Box className="w-32 h-32 mb-6 transition-transform duration-500 group-hover:scale-110">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-contain"
                                />
                            </Box>

                            <Text as="div" size="4" weight="bold" className="text-gray-800 mb-3 uppercase tracking-wider text-center">
                                {service.title}
                            </Text>

                            <Text as="p" size="2" className="text-gray-500 text-center leading-relaxed">
                                {service.desc}
                            </Text>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}