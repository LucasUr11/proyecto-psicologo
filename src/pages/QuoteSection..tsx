import { Container, Flex, Text, Box } from "@radix-ui/themes";
import { Quote as QuoteIcon } from "lucide-react";

export function QuoteSection() {
    return (
        <section
            className="py-24 relative"
            style={{
                backgroundColor: "#b8938d",
                backgroundImage: `url("https://www.transparenttextures.com/patterns/black-thread.png")`,
            }}
        >
            <Container size="3">
                <Flex direction="column" align="center" className="text-center">

                    {/* Icono decorativo de comillas */}
                    <Box className="mb-8 opacity-40">
                        <QuoteIcon size={48} color="white" strokeWidth={1} />
                    </Box>

                    {/* Texto de la Cita */}
                    <blockquote className="max-w-3xl">
                        <Text
                            as="p"
                            className="text-white text-3xl md:text-4xl font-serif italic leading-relaxed mb-8"
                        >
                            "Lo que es más personal es lo más universal."
                        </Text>

                        {/* Autor */}
                        <cite className="not-italic">
                            <Text
                                as="span"
                                size="2"
                                weight="bold"
                                className="text-white/80 uppercase tracking-[0.3em]"
                            >
                                — Carl Rogers
                            </Text>
                        </cite>
                    </blockquote>

                </Flex>
            </Container>
        </section>
    );
}