import "./header.css";

import me from "../../assets/me-new.png";
import Resume from "./Resume";
import Social from "./Social";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm </h5>
        <h1>Puneet Patel</h1>
        <h4 className="text-light">Mechanical Engineering Undergraduate</h4>
        <Resume />
        <Social />

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contacts" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
