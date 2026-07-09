import { type Variants, motion } from "framer-motion";

const articles = [
    {
        date: "20 de Octubre, 2024",
        title: "La importancia del aquí y ahora",
        desc: "Explorando las bases de la terapia Gestalt para una vida más consciente.",
        img: "/illustrations/aqui_y_ahora.svg",
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

// Animacion en cascada.-
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
};

export function Articles() {
    return (
        <section id="articles" className="bg-white py-16 md:py-24 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center mb-12 md:mb-20 text-center"
                >
                    <h4 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#b8938d] mb-3">
                        Artículos
                    </h4>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4 md:mb-6">
                        Últimos Artículos
                    </h2>

                    {/* Línea decorativa */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        style={{ originX: 0.5 }}
                        className="w-20 h-1 bg-[#9fb1a5] rounded-full"
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }} // Bajamos el margen de activación para pantallas chicas
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
                >
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            // Eliminamos hover:-translate-y-2 nativo en mobile usando la query `md:hover:` para que no falle al hacer scroll táctil
                            className="group p-6 sm:p-8 rounded-3xl border border-gray-50 bg-transparent transition-all duration-500 md:hover:bg-[#faf9f6] md:hover:-translate-y-2 flex flex-col items-center shadow-xs"
                        >
                            {/* Contenedor de la Ilustración */}
                            <div className="w-32 h-32 sm:w-40 sm:h-40 mb-6 md:mb-8 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
                                <img
                                    src={article.img}
                                    alt={article.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Fecha */}
                            <span className="text-[11px] sm:text-xs font-bold text-[#b8938d] mb-2 md:mb-3 uppercase tracking-widest block">
                                {article.date}
                            </span>

                            {/* Título del artículo */}
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 text-center font-serif leading-tight px-1">
                                {article.title}
                            </h3>

                            {/* Separador estético minimalista */}
                            <div className="w-12 h-px bg-gray-200 mb-4" />

                            {/* Descripción corta */}
                            <p className="text-sm text-gray-500 text-center leading-relaxed px-1 sm:px-3">
                                {article.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}