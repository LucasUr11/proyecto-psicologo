import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion, type Variants } from "framer-motion";

const faqs = [
    { q: "¿Cómo es la primera sesión?", a: "La primera sesión es un espacio para conocernos. Vamos a conversar sobre el motivo de consulta, tu historia y lo que te gustaría trabajar." },
    { q: "¿Atendés de forma online?", a: "Sí, ofrezco sesiones tanto presenciales como online. Las sesiones virtuales se realizan a través de videollamada, en un espacio privado y seguro, manteniendo la misma calidad y confidencialidad que en el encuentro presencial." },
    { q: "¿Qué debo llevar?", a: "No es necesario llevar nada en particular. Si estás realizando algún tratamiento médico o psicológico previo, podés traer información relevante si lo considerás importante." },
    { q: "¿Cómo se maneja la confidencialidad?", a: "La confidencialidad es un pilar fundamental del proceso terapéutico. Todo lo que compartas en sesión está protegido por el secreto profesional. Solo existen excepciones muy específicas establecidas por la ley, vinculadas a situaciones de riesgo para vos o para terceros." },
    { q: "¿Cuánto dura cada sesión?", a: "Cada sesión tiene una duración aproximada de 45 a 50 minutos. La frecuencia suele ser semanal, aunque puede ajustarse según tus necesidades y el proceso terapéutico." },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

export function Faq() {
    return (
        <section id="faq" className="py-16 md:py-24 bg-[#faf9f6] overflow-x-hidden">
            <div className="max-w-3xl mx-auto px-6 md:px-10 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center mb-12 md:mb-16 text-center"
                >
                    <span className="block text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#b8938d] mb-3">
                        FAQ
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 leading-tight max-w-xl">
                        Dudas sobre el proceso terapéutico
                    </h2>
                </motion.div>

                <Accordion.Root type="single" collapsible className="w-full space-y-4">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-full"
                    >
                        {faqs.map((item, index) => (
                            <motion.div key={index} variants={itemVariants} className="w-full">
                                <Accordion.Item
                                    value={`item-${index}`}
                                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs mb-4"
                                >
                                    <Accordion.Header className="w-full">
                                        <Accordion.Trigger className="flex w-full items-center justify-between p-5 sm:p-6 text-left text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-50/80 transition-all group cursor-pointer gap-4">
                                            <span className="pr-2 leading-snug">{item.q}</span>
                                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                        </Accordion.Trigger>
                                    </Accordion.Header>

                                    <Accordion.Content className="text-xs sm:text-sm text-gray-600 border-t border-gray-50 bg-gray-50/40 p-5 sm:p-6 leading-relaxed data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
                                        {item.a}
                                    </Accordion.Content>
                                </Accordion.Item>
                            </motion.div>
                        ))}
                    </motion.div>
                </Accordion.Root>
            </div>
        </section>
    );
}