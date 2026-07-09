import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-[#fdfcfb] pt-24 md:pt-0 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-12 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl w-full flex flex-col gap-4 text-center md:text-left order-1 md:order-1"
                    >
                        <span className="block text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#b8938d]">
                            Bienvenido a tu espacio de calma
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
                            Encontrá el <span className="text-[#9fb1a5] italic">equilibrio</span> que necesitás.
                        </h1>

                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed border-l-4 border-[#b8938d] pl-4 my-4 text-left mx-auto md:mx-0 max-w-prose">
                            Acompañamiento terapéutico especializado en Gestalt.
                            Un proceso para redescubrir tu libertad y bienestar emocional
                            en un entorno seguro y profesional.
                        </p>

                        {/* Botones de Acción */}
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
                            <button
                                className="cursor-pointer rounded-full transition-all duration-500 hover:shadow-[0_20px_40px_-10px_#9fb1a5] py-3.5 px-8 bg-[#9fb1a5] hover:-translate-y-1 text-base font-bold text-white text-center"
                            >
                                Agendar Sesión
                            </button>

                            <button
                                className="cursor-pointer rounded-full transition-all duration-500 hover:shadow-[0_20px_40px_-10px_#b8938d] py-3.5 px-8 border-2 border-[#b8938d] bg-[#b8938d] text-white hover:-translate-y-1 text-base font-bold text-center"
                            >
                                Saber más
                            </button>
                        </div>
                    </motion.div>

                    <div className="relative flex-1 w-full max-w-70 sm:max-w-87.5 md:max-w-md lg:max-w-lg order-2 md:order-2 px-4">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }} // Bajé el desplazamiento de 100 a 50 para evitar desbordamiento horizontal en mobile
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} // Hace que la animación ocurra solo una vez al entrar en vista
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10 border border-gray-200 p-3 sm:p-4 rounded-full bg-[#fdfcfb]"
                        >
                            <img
                                src="https://img.freepik.com/free-vector/hand-drawn-one-line-art-animal-illustration_23-2149261852.jpg?semt=ais_hybrid&w=740&q=80"
                                alt="Metáfora de libertad"
                                className="w-full h-auto rounded-full object-cover filter grayscale-20 hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>

                        {/* Cuadro decorativo que "enmarca" la imagen (Mejorado para Mobile) */}
                        <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-full h-full border border-purple-200 rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section >
    );
}