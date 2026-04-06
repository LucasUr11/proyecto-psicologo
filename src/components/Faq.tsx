import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { Container, Flex, Text } from "@radix-ui/themes";
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
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

export function Faq() {
    return (
        <section className="py-24 bg-[#faf9f6]">
            <Container size="3">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Flex direction="column" align="center" className="mb-16">
                        <Text size="2" weight="bold" className="tracking-[0.2em] uppercase text-[#b8938d] mb-4">
                            FAQ
                        </Text>
                        <h2 className="text-4xl font-serif text-gray-800 text-center">
                            Dudas sobre el proceso terapéutico
                        </h2>
                    </Flex>
                </motion.div>

                <Accordion.Root type="single" collapsible className="w-full space-y-4">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {faqs.map((item, index) => (
                            
                            <motion.div key={index} variants={itemVariants}>
                                <Accordion.Item
                                    value={`item-${index}`}
                                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-4"
                                >
                                    <Accordion.Header>
                                        <Accordion.Trigger className="flex w-full items-center justify-between p-6 text-left font-medium text-gray-800 hover:bg-gray-50 transition-all group cursor-pointer">
                                            <span>{item.q}</span>
                                            <ChevronDown className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="p-6 text-gray-600 border-t border-gray-50 bg-gray-50/30">
                                        {item.a}
                                    </Accordion.Content>
                                </Accordion.Item>
                            </motion.div>

                        ))}
                    </motion.div>
                </Accordion.Root>
            </Container>
        </section>
    );
}