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
    <nav className={`flex bg-[#020411] w-full text-white ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src={logo.src} alt="U-Night logo" />
        </div>
      <div className="nav-wrapper flex w-full justify-between">
        <div className="menu">
          <ul className="flex">
            <li><a href="/projects">Projects</a></li>
            <li><a href="/team">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/join-us">Join us</a></li>
          </ul>
        </div>
        <div className="socials">
          <ul className="flex">
            <li>
              <a href="https://github.com/U-Night" target="_blank" rel="noopener noreferrer" aria-label='Open github page'>
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/6nQ94UkA32" target="_blank" rel="noopener noreferrer" aria-label='Open Instagram page'>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/6nQ94UkA32" target="_blank" rel="noopener noreferrer" aria-label='Open Twitter page'>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/6nQ94UkA32" target="_blank" rel="noopener noreferrer" aria-label='Join discord server'>
                <FaDiscord />
              </a>
            </li>
            <li>
              <a href="/rss.xml" target="_blank" rel="noopener noreferrer" aria-label='Open RSS Flux xml'>
                <FaRss />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <BurgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;