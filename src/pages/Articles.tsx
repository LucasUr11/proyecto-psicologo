import { Flex, Box, Text, Separator, Container } from "@radix-ui/themes"
import { type Variants, motion } from "framer-motion";

const articles = [
    {
        date: "20 de Octubre, 2024",
        title: "La importancia del aquí y ahora",
        desc: "Explorando las bases de la terapia Gestalt para una vida más consciente.",
        img: "/illustrations/aqui_y_ahora.svg", // Asegurate que la ruta en 'public' sea correcta
    },
    {
        date: "15 de Noviembre, 2024",
        title: "Gestionando la ansiedad",
        desc: "Herramientas prácticas para encontrar la calma en el día a día.",
        img: "/illustrations/ansiedad.svg",
    },
    {
        date: "05 de Diciembre, 2024",
        title: "Vínculos saludables",
        desc: "Cómo establecer límites que fortalezcan nuestras relaciones.",
        img: "/illustrations/vinculos_saludables.svg",
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

export function Articles() {
    return (
        <section id="articles" className="bg-white py-24">
            <Container size="4">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Flex direction="column" align="center" className="mb-20 text-center">
                        <Text size="2" weight="bold" className="tracking-[0.2em] uppercase text-[#b8938d] mb-4">
                            Artículos
                        </Text>
                        <h2 className="text-5xl font-serif text-gray-800 mb-6">
                            Últimos Artículos
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

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group p-8 rounded-3xl transition-all duration-500 hover:bg-[#faf9f6] hover:-translate-y-2 flex flex-col"
                        >
                            {/* Contenedor de la Ilustración: Centrado con margen */}
                            <Box className="w-40 h-40 mb-8 transition-transform duration-500 group-hover:scale-105">
                                <img
                                    src={article.img}
                                    alt={article.title}
                                    className="w-full h-full object-contain"
                                />
                            </Box>

                            <Text size="1" weight="bold" className="text-[#b8938d] mb-3 uppercase tracking-widest">
                                {article.date}
                            </Text>

                            <Text as="div" size="5" weight="bold" className="text-gray-800 mb-4 text-center font-serif leading-tight">
                                {article.title}
                            </Text>

                            <Separator orientation="horizontal" size="2" className="mb-4 bg-gray-100" />

                            <Text as="p" size="2" className="text-gray-500 text-center leading-relaxed px-2">
                                {article.desc}
                            </Text>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    )
}