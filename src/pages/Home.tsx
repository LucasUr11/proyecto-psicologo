import { Hero } from "./Hero"
import { Services } from "./Services"
import { AboutMe } from "./AboutMe"
import { Articles } from "./Articles"
import { QuoteSection } from "./QuoteSection."
import { Faq } from "./Faq"
import { Contact } from "./Contact"

export const Home = () => {
    return (
        <main className="bg-gray-100">
             <Hero />
             <Services />
             <AboutMe />
             <Articles />
             <QuoteSection />
             <Faq />
             <Contact />
        </main>
    )
}