import { motion } from "framer-motion";

export function AboutMe() {
    return (
        <section id="about" className="py-24 bg-[#faf9f6] relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-12 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* Lado de la Imagen */}
                    <motion.div
                        className="flex-1 w-full flex justify-center md:justify-end"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full max-w-80 sm:max-w-112.5">
                            <div className="aspect-square bg-[#b8938d]/20 overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_80%] animate-morph">
                                <img
                                    src="/assets/psicologo_profesional.jpg"
                                    alt="Lic. Lucas Urquiza"
                                    className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Lado del Contenido */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="gap-2">
                            <span className="text-[#b8938d] tracking-[0.2em] uppercase mb-4 text-xs lg:text-xl font-bold">
                                Sobre mí
                            </span>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
                                Compromiso con tu <span className="italic">proceso personal</span>.
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-[14px] sm:text-xl">
                                Soy el **Lic. Lucas Urquiza**, psicólogo apasionado por la clínica y el enfoque Gestáltico. Mi objetivo es ofrecerte un espacio donde te sientas escuchado sin juicios, facilitando el camino hacia tu propia autonomía.
                            </p>
                            <div className="text-gray-600 mb-8 italic border-l-4 border-[#9fb1a5] pl-4 text-2xl">
                                <p className="">
                                    "La terapia es el arte de volver a ser uno mismo."
                                </p>
                                <span className="font-serif text-3xl text-gray-400 opacity-40">
                                    Lucas Urquiza
                                </span>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}