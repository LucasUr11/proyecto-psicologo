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
            staggerChildren: 0.12,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" //
        }
    },
};

export function Services() {

    return (
        <section id="services" className="py-16 md:py-24 bg-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">

                {/* Cabecera de la Sección */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center mb-12 md:mb-16 text-center"
                >
                    <span className="block text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#b8938d] mb-3">
                        Qué podemos ofrecer
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4 md:mb-6">
                        Especialidades Terapéuticas
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        style={{ originX: 0.5 }}
                        className="w-20 h-1 bg-[#9fb1a5] rounded-full"
                    />
                </motion.div>

                {/* Cuadrícula de Servicios */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            // Desactivamos el hover nativo de traslación en pantallas táctiles con `md:hover:`
                            className="group p-6 sm:p-8 rounded-3xl transition-all duration-500 border border-gray-50/50 bg-transparent md:hover:bg-[#faf9f6] md:hover:-translate-y-2 flex flex-col items-center"
                        >
                            {/* Contenedor de la Ilustración (Reemplaza a <Box>) */}
                            <div className="w-28 h-28 sm:w-32 sm:h-32 mb-6 transition-transform duration-500 md:group-hover:scale-110 flex items-center justify-center">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Título de la tarjeta */}
                            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 uppercase tracking-wider text-center">
                                {service.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-sm text-gray-500 text-center leading-relaxed px-1">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}