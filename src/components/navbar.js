import "./navbar.css";
import React,{useState} from 'react';
import { Link } from 'react-scroll';
 
function Nav() {
    const [isMenuOpen,setIsMenuOpen]=useState(false);

    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLinkClick=()=>{
        setIsMenuOpen(false);
    }

    return (
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
             <div className="logo">
        <Link to="home" smooth={true} duration={500}>
          S
        </Link>
      </div>
            <div className="Menutoggle" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul>
                <li>
                    <Link to="home" offset={10} smooth={true} duration={500} onClick={handleLinkClick}>Home</Link>
                </li>
                <li>
                    <Link to="contact" offset={70} smooth={true} duration={500}onClick={handleLinkClick}>Contact</Link>
                </li>
                <li>
                    <Link to="skills" offset={-10} smooth={true} duration={500} onClick={handleLinkClick}>Skills</Link>
                </li>
                <li>
                    <Link to="experience" offset={-10} smooth={true} duration={500} onClick={handleLinkClick}>Experience</Link>
                </li>
                <li>
                    <Link to="projects" offset={100} smooth={true} duration={500} onClick={handleLinkClick}>Projects</Link>
                </li>
            </ul>
        </nav>
    );
}


export default Nav;