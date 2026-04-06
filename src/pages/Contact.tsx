import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Flex, Box, Text, Button } from "@radix-ui/themes";
import { Mail, Phone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'TU_SERVICE_ID',
      'TU_TEMPLATE_ID',
      form.current!,
      'TU_PUBLIC_KEY'
    )
      .then(() => {
        setIsSent(true);
        setIsSending(false);
        form.current?.reset();
      }, (error) => {
        console.log(error.text);
        setIsSending(false);
      });
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <Container size="4">
        <Flex gap="9" direction={{ initial: "column", md: "row" }}>
          {/* Información (Izquierda) */}
          <motion.div
            className="flex-1 w-full flex justify-center md:justify-end"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Box className="flex-1">
              <Text size="2" weight="bold" className="tracking-[0.2em] uppercase text-[#b8938d] mb-4">
                Contacto
              </Text>
              <h2 className="text-5xl font-serif text-gray-800 mb-8">
                Iniciemos una <span className="italic">conversación</span>.
              </h2>
              <Flex direction="column" gap="4">
                <Flex align="center" gap="3">
                  <Box className="p-3 bg-[#9fb1a5]/10 rounded-full text-[#9fb1a5]"><Mail size={20} /></Box>
                  <Text className="text-gray-700 font-medium">lucasestudios2021@gmail.com</Text>
                </Flex>
                <Flex align="center" gap="3">
                  <Box className="p-3 bg-[#9fb1a5]/10 rounded-full text-[#9fb1a5]"><Phone size={20} /></Box>
                  <Text className="text-gray-700 font-medium">+54 9 3537669534</Text>
                </Flex>
              </Flex>
            </Box>
          </motion.div>

          {/* Formulario (Derecha) */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Box className="flex-1 bg-[#faf9f6] p-10 rounded-[40px] shadow-sm relative">
              {isSent ? (
                <Flex direction="column" align="center" justify="center" className="h-full py-10 animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 size={60} className="text-[#9fb1a5] mb-4" />
                  <Text size="5" weight="bold" className="text-gray-800 mb-2 font-serif text-center">¡Mensaje enviado!</Text>
                  <Text className="text-gray-600 text-center">Gracias por escribir, Lucas te responderá a la brevedad.</Text>
                  <Button variant="ghost" className="mt-6 text-[#b8938d] cursor-pointer" onClick={() => setIsSent(false)}>Enviar otro mensaje</Button>
                </Flex>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                    <input name="user_name" required type="text" className="w-full bg-white border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#9fb1a5] outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input name="user_email" required type="email" className="w-full bg-white border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#9fb1a5] outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                    <textarea name="message" required rows={4} className="w-full bg-white border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#9fb1a5] outline-none transition-all resize-none"></textarea>
                  </div>
                  <Button
                    size="4"
                    disabled={isSending}
                    className={`w-full cursor-pointer bg-[#b8938d] transition-all rounded-xl h-14 text-lg font-serif ${isSending ? 'opacity-50' : 'hover:bg-[#a67e78]'}`}
                  >
                    {isSending ? "Enviando..." : "Enviar consulta"}
                  </Button>
                  <Text size="1" className="text-gray-400 block text-center italic pt-4">
                    Toda la información compartida es tratada con absoluta confidencialidad.
                  </Text>
                </form>
              )}
            </Box>
          </motion.div>
        </Flex>
      </Container>
    </section>
  );
}