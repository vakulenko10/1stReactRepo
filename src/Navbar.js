import './Navbar.css';
import {ColorThemeContext, ThemeUpdateContext , useTheme}from "./ColorThemeContext";
import { useRef, useState } from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import { ToggleThemeBtn } from './ToggleThemeBtn';
import { useEffect } from 'react';

export const Navbar = ({anchors})=>{
    const {darkTheme, toggleTheme} = useTheme();
    const pStyle = {
    color: "black"
    }
    const header_burger = useRef(null);
    const header_links = useRef(null);
    
    const openMenu = () =>{
        const burger = header_burger.current;
        const links = header_links.current;
        if(!burger.classList.contains('on_menu')){
            burger.classList.add('on_menu');
            links.classList.add("active")
        }
        else{
            burger.classList.remove('on_menu');
            links.classList.remove("active")
        }
        return false;
    }
    const currentPath = useRef(window.location.pathname);
    const [activePage, setActivePage] = useState(window.location.pathname);
    const updateActivePage = ()=>{
        currentPath.current = window.location.pathname;
        setActivePage(currentPath.current);
    }
    const removeMenu = () =>{
        updateActivePage();
        const burger = header_burger.current;
        const links = header_links.current;
        if(links.classList.contains("active")){
            links.classList.remove("active"); 
            burger.classList.remove('on_menu');
        }
        
        return false
    }
    
  
    return(
        <nav className="navbar">
            <div className='container navbar_inner'>
                <div className='logo_container'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png"className='logo'/>
                </div>
                <div ref={header_links} className='linksContainer'>
                    <ul className='links_list'>
                        {anchors.map((anchor)=>{
                            const keyvalue = Math.random() * Math.random() * 10000;
                            return <NavbarLink anchor={anchor} keyvalue={keyvalue} removeMenu={removeMenu}/>
                        })}
                    </ul>
                    <div className='toggleThemeBtn_container'>
                        <ToggleThemeBtn/>
                    </div>
                    
                </div>
            
                
                <button ref={header_burger} onClick={openMenu} id="js_burger" className="burger">
                    <span className="burger_line top"></span>
                    <span className="burger_line mid"></span>
                    <span className="burger_line botm"></span>
                </button>
            </div>
        </nav>
    )
}
const NavbarLink = ({anchor, keyvalue, removeMenu}) =>{
    const resolvedPath = useResolvedPath(anchor.path);
    const isActive = useMatch(resolvedPath.pathname)
    return <Link to={anchor.path} onClick={removeMenu} className={`navbar_link_item  ${(isActive)?"activePage":""}`}><li key={keyvalue} className="link">{anchor.name}</li></Link>
}