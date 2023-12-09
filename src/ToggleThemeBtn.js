import {ColorThemeContext, ThemeUpdateContext , useTheme}from "./ColorThemeContext";
import { IoMdSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import "./ToggleThemeBtn.css";
export const ToggleThemeBtn = () =>{
    const {darkTheme, toggleTheme} = useTheme();
    const changeTheme = (e)=>{
        toggleTheme();
    }
    
    return(
        // <button className="toggleThemeBtn" onClick={toggleTheme}>{darkTheme?<IoMdSunny/>:<IoIosMoon/>}</button>
        <div className="toggleThemeBtn">
            <input type="checkbox" className="checkbox" id="checkbox" onChange={changeTheme}/>
            <label htmlFor="checkbox" className="checkbox-label" >
                <IoIosMoon className="fa-moon"/>
                <IoMdSunny className="fa-sun"/>
                <span className="ball"></span>
            </label>
        </div>
    )
}