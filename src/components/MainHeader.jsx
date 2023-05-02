import { Link } from "react-router-dom";
import "../pages/home/home.css";
import "./navbar.css";
import "./Navbar";
import Image from "../images/main_header.png";

export const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100daysofworkout</h4>
          <h1>Join the legends of the fitness world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
            error numquam possimus minus sint minima.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>

        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="main header image" />
          </div>
        </div>
      </div>
    </header>
  );
};
