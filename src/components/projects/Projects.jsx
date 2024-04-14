import "./projects.css";
import BMI from "../../assets/bmi.png";
import Todo from "../../assets/result.png";
import Password from "../../assets/password.png";
import Portfolio from "../../assets/portfolio.png";

const Projects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      {/* BMI Calculator */}
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BMI} alt="" />
          </div>
          <h3>BMI Calculator</h3>
          <small className="text-light"> Vite | ReactJs </small>
          <div className="portfolio__item-cta">
            <a
              href="https://puneet070500.github.io/body-mass-index/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>
        {/* TODO */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Todo} alt="" />
          </div>
          <h3>TODO</h3>
          <small className="text-light">React</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/puneet070500/todo.git"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>

          {/* Password  */}
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Password} alt="" />
          </div>
          <h3>Password-Validator</h3>
          <small className="text-light">Vite | React</small>
          <div className="portfolio__item-cta">
            <a
              href="https://puneet070500.github.io/password-validator/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>
        {/* Portfolio */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio} alt="" />
          </div>
          <h3>My Portfolio(This website)</h3>
          <small className="text-light">Vite | ReactJs</small>
          <div className="portfolio__item-cta">
            <a
              href="https://puneet070500.github.io/portfolio/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://puneet070500.github.io/portfolio/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
