import { Theme } from "@radix-ui/themes";
import { Navbar } from "./pages/Navbar";
import { Hero } from "./pages/Hero";
import { Services } from "./pages/Services";
import { AboutMe } from "./pages/AboutMe";
import { Articles } from "./pages/Articles";
import { QuoteSection } from "./components/QuoteSection.";
import { Faq } from "./components/Faq";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";

function App() {

  return (
    <div className="bg-gray-100">
      <Theme>
        <Navbar />
        <Hero />
        <Services />
        <AboutMe />
        <Articles />
        <QuoteSection />
        <Faq />
        <Contact />
        <Footer />
      </Theme>
    </div>
  )
}

export default App
