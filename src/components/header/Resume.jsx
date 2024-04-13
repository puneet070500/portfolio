import CV from "../../assets/Puneet_Patel_Resume.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default Resume;
