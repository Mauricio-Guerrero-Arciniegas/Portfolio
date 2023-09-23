import { useState } from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import About from "../about/About";
import Experience from "../experience/Experience";
import Services from "../services/Services";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const initialTheme = "light";

const Theme = () => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    console.log(e.target.value);
  };

  return (
    <>
      <div className="theme">
        <Header theme={theme} handleTheme={handleTheme} />
        <Nav theme={theme} handleTheme={handleTheme} />
        <About theme={theme} handleTheme={handleTheme} />
        <Experience theme={theme} handleTheme={handleTheme} />
        <Services theme={theme} handleTheme={handleTheme} />
        <Portfolio theme={theme} handleTheme={handleTheme} />
        <Contact theme={theme} handleTheme={handleTheme} />
        <Footer theme={theme} handleTheme={handleTheme} />
      </div>
    </>
  );
};

export default Theme;
