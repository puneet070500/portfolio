import "./about.css";
import myImage from "../../assets/my-image2.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h4>Degree</h4>
              <h5>
                B.Tech Mechanical Engneering(UG) <br />
                <i>Lakshmi Narain College Of Technology, Bhopal</i>
              </h5>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h3>CGPA</h3>
              <h4>8.6</h4>
            </article>
          </div>
          <p>
            I'm a <b>Mechanical Engineering Gradute</b> at the Lakshmi Narain
            College Of Technology. I'm an enthusiastic and driven Software
            Engineering student seeking a challenging internship opportunity to
            apply and expand my technical skills. With a strong academic
            foundation and hands-on experience in various programming languages,
            I am eager to contribute to innovative projects and learn from
            experienced professionals in the industry. I am a quick learner who
            is always ready to face challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
