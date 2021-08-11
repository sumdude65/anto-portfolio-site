import "./style.css";

import { Home } from "./components/homePage";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
export const App = () => {
  return (
    <div className="appwrapper">
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
