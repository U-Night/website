import React, { useState } from 'react';
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaRss,
} from "react-icons/fa6";
import BurgerMenu from "./BurgerMenu";
import logo from "../assets/unight.png";
import '../styles/components/Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`flex bg-[#020411] w-full text-white ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="left flex">
        <div className="logo">
          <img src={logo.src} alt="U-Night logo" />
        </div>
        <div className="menu">
          <ul className="flex">
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Join us</a></li>
          </ul>
        </div>
      </div>
      <div className="socials">
        <ul className="flex">
          <li>
            <a href="https://github.com/U-Night" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/6nQ94UkA32" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/6nQ94UkA32" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/6nQ94UkA32" target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/6nQ94UkA32" target="_blank" rel="noopener noreferrer">
              <FaRss />
            </a>
          </li>
        </ul>
      </div>
      <BurgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;