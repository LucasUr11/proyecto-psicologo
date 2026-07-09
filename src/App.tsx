import { Theme } from "@radix-ui/themes";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/layout/Footer";

function App() {

  return (
    <>
      <Theme>
        <Navbar />
        <Home />
        <Footer />
      </Theme>
    </>
  )
}

export default App
