import React from "react";

import linkedinLogo from "../../assets/linkedin-logo.png";
import githubLogo from "../../assets/github-logo.png";




function Footer() {
  return (
    <footer className="footer bg-dark ">
      <div className="footer-content">
        <a href="https://github.com/sujamanoj">
          <img
            src={githubLogo}
            alt="Github"
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/suja-raghuram-manoj-621ba038">
          <img src={linkedinLogo} alt="LinkedIn" className="icon" />
        </a>
        <a href="https://twitter.com/SujaIndia">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/220px-Twitter-logo.svg.png"
            alt="Twitter"
            className="icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
