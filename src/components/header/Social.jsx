import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Social = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/puneet-patel-5a99b9181"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/puneet070500"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default Social;
