import PropTypes from "prop-types";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = ({ theme, handleTheme }) => {
  return (
    <header className={theme} id='header'>
      <div className="container header__container">
        <h1 className="title">Mauricio Guerrero A.</h1>
        <h5 className="text-light">
          Systems Engineer - Front End & Back End Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

      </div>
        <div className="inputs">
          <label htmlFor="light">
            <input
              type="radio"
              name="theme"
              id="light"
              onClick={handleTheme}
              value="light"
              style={{display:'none'}}
            />
            <i className="fas fa-sun"> Light</i>
          </label>

          <label htmlFor="dark" className="label">
            <input
              type="radio"
              name="theme"
              id="dark"
              onClick={handleTheme}
              value="dark"
              style={{display:'none'}}
            />
            <i className="fas fa-moon"> Dark</i> 
          </label>
        </div>
    </header>
  );
};

export default Header;
