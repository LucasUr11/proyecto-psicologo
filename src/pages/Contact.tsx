import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
    <section id="contacto" className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">

          {/* Información (Izquierda) */}
          <motion.div
            className="flex-1 w-full flex flex-col text-center md:text-left"
            initial={{ opacity: 0, x: -30 }} // Suavizado de -100 a -30 para evitar desbordamiento lateral
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="block text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#b8938d] mb-3">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-6 leading-tight">
              Iniciemos una <span className="italic">conversación</span>.
            </h2>

            {/* Contenedor de métodos de contacto */}
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex items-center gap-3 text-left w-full max-w-sm md:max-w-none">
                <div className="p-3 bg-[#9fb1a5]/10 rounded-full text-[#9fb1a5] shrink-0">
                  <Mail size={20} />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base break-all">
                  lucasestudios2021@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3 text-left w-full max-w-sm md:max-w-none">
                <div className="p-3 bg-[#9fb1a5]/10 rounded-full text-[#9fb1a5] shrink-0">
                  <Phone size={20} />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  +54 9 3537669534
                </span>
              </div>
            </div>
          </motion.div>

          {/* Formulario (Derecha) */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }} // Suavizado de 100 a 30
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Caja del formulario */}
            <div className="bg-[#faf9f6] p-6 sm:p-10 rounded-4xl sm:rounded-[40px] shadow-xs relative">
              {isSent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 size={60} className="text-[#9fb1a5] mb-4 shrink-0" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Gracias por escribir, Lucas te responderá a la brevedad.
                  </p>
                  <button
                    type="button"
                    className="mt-6 text-sm font-semibold text-[#b8938d] hover:text-[#a67e78] cursor-pointer transition-colors"
                    onClick={() => setIsSent(false)}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      name="user_name"
                      required
                      type="text"
                      className="w-full bg-white border border-gray-100 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base focus:ring-2 focus:ring-[#9fb1a5]/50 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      name="user_email"
                      required
                      type="email"
                      className="w-full bg-white border border-gray-100 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base focus:ring-2 focus:ring-[#9fb1a5]/50 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-white border border-gray-100 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base focus:ring-2 focus:ring-[#9fb1a5]/50 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Botón de Enviar Nativo */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full flex items-center justify-center cursor-pointer bg-[#b8938d] text-white transition-all rounded-xl h-12 sm:h-14 text-base sm:text-lg font-serif ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#a67e78] active:scale-[0.98]'
                      }`}
                  >
                    {isSending ? "Enviando..." : "Enviar consulta"}
                  </button>

                  <span className="text-[11px] text-gray-400 block text-center italic pt-2 leading-normal">
                    Toda la información compartida es tratada con absoluta confidencialidad.
                  </span>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}