import "./Navbar.css";
import { logo } from "../../assets";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar app_bg">
      <figure className="navbar_logo">
        <img src={logo} alt="logo" />
      </figure>
      <div className="navbar_links">
        <a href="#home" className="p_poppins">
          Home
        </a>
        <a href="#aboutus" className="p_poppins">
          About Us
        </a>
        <a href="#features" className="p_poppins">
          Features
        </a>
        <a href="#solution" className="p_poppins">
          Solution
        </a>
      </div>
      <div className="navbar-smallscreens">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-smallscreens">
            <div className="navbar_links-smallscreens">
              <a href="#home" className="p_poppins">
                Home
              </a>
              <a href="#aboutus" className="p_poppins">
                About Us
              </a>
              <a href="#features" className="p_poppins">
                Features
              </a>
              <a href="#solution" className="p_poppins">
                Solution
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
