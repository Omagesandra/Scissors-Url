import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Vector3 from "../../assets/Vector3.png";
import Vector2 from "../../assets/Vector2.png";
import Frame1 from "../../assets/Frame1.png";

const Navbar = () => {
  return (
    <div>
      <div className="Header">
        <nav>
          {/* left side */}
          <div className="Navbar">
            <div>
              <div className="logo">
                <img alt="logo" src={Logo} />
              </div>
            </div>
            {/* right side */}
            <div className="Nav-Menu">
              <div className="N-Menu">My UrL</div>
              <div className="N-Menu">Features</div>
              <div className="N-Menu">Pricing</div>
              <div className="N-Menu">Analytics</div>
              <div className="N-Menu">FAQs</div>
            </div>
            <div className="left-side">
              <Link to="/login" className="MyNav" id="log">
                Log In
              </Link>
              <button className="free-btn">Try for Free</button>
            </div>
          </div>
        </nav>
        <div className="Header-body">
          <div>
            <h1 className="Heading">
              Optimize Your Online Experience with Our
            </h1>
            <h1 className="Heading">
              Advanced <span className="url">URL Shortening</span> Solution
            </h1>
            <img alt="line" src={Vector3} className="line" />
            <p className="parag">
              Personalize your shortened Urls to align with your brand identity.
              Utilize custom slugs, branded links and domain customization
              options to reinforce your brand presence and enhance user
              engagement.
            </p>
            <div className="last">
              <Link to="/signup">
                <button className="sign">Sign Up</button>{" "}
              </Link>
              <a href="/" className="learn">
                Learn more
              </a>
            </div>
            <div>
              <div className="diagram">
                <img alt="shape" src={Vector2} className="shape" />
                <img alt="frame" src={Frame1} className="frame" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
