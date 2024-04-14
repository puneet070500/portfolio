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
            Hey there! I'm <b>Puneet</b>, a dynamic mechanical engineering
            student with a passion for technology and software development.
            Blending my expertise in engineering with my proficiency in Python,
            Java, and the MERN stack, I'm on a mission to carve a niche for
            myself in the software industry.
          </p>
          <p>
            With a solid foundation in mechanical engineering principles, I
            bring a unique perspective to software development, combining
            analytical thinking with innovative problem-solving skills. My
            journey into the world of programming began with Python and Java,
            where I quickly grasped the fundamentals and delved into creating
            efficient and scalable solutions.
          </p>
          <p>
            However, my curiosity didn't stop there. Eager to broaden my skill
            set, I immersed myself in the MERN stack, mastering technologies
            like MongoDB, Express.js, React.js, and Node.js. This expanded
            toolkit not only allowed me to build dynamic web applications but
            also opened up new avenues for collaboration and creativity.
          </p>
          <p>
            Beyond my academic and technical pursuits, I'm deeply passionate
            about turning ideas into reality through hands-on projects. From
            conceptualization to execution, I revel in the process of bringing
            concepts to life and iterating until perfection is achieved.
          </p>
          <p>
            As I embark on this exhilarating journey, I'm eager to connect with
            like-minded individuals and organizations that share my enthusiasm
            for technology and innovation. Let's collaborate and create
            something extraordinary together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
