import "./Footer.css";
import {ColorThemeContext, ThemeUpdateContext , useTheme}from "./ColorThemeContext";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
const socNetworks = [
    {
        name: "Instagram",
        logo: <FaInstagram />,
        mylink: "https://www.instagram.com/vakulenko_10",
    },
    {
        name: "LinkedIn",
        logo: <FaLinkedin />,
        mylink: "https://www.linkedin.com/in/vitalik-vakulenko",
    },
    {
        name: "Facebook",
        logo: <FaFacebookSquare />,
        mylink: "https://www.facebook.com/vakulenko10",
    },
    {
        name: "GitHub",
        logo: <FaGithub />,
        mylink: "https://github.com/vakulenko10",
    }
]
export const Footer = ()=>{
    const {darkTheme, toggleTheme} = useTheme();
    const [isEmailErrorVisible, setIsEmailErrorVisible] = useState(false);
    const [emailInputError, setEmailInputError] = useState("");
    const [email, setEmail ] = useState("");
    const emailSubmitHandler = (e) =>{
            e.preventDefault();
            if(!email){
                setEmailInputError("Email cannot be an empty value");
                setIsEmailErrorVisible(true);
            }
            if(emailInputError){
                setIsEmailErrorVisible(true);
            }
            // if(!/(@gmail.com)/.test(email)){
            //     setEmailInputError("We can only service the google mail")
            // }
            return;
        }
    const isValidEmail = (email) => {
        // var validator = require("email-validator");
        // if(validator.validate(email)){
        //     if(email.)
        // }
        return /^[a-zA-Z0-9]+([\w\.\'\!\#\$\%\&\*\+\-\/\=\?\^\`\{\|\}\~])+([a-zA-Z0-9])+@(([a-zA-Z0-9\.\-])+.)+([a-zA-Z0-9]{2,8})+$/.test(email)
        // return /(@gmail.com)/.test(email)
        ;
        }
    const emailInputHandler = (e) =>{
        if (!isValidEmail(e.target.value)) {
            setEmailInputError('Email is invalid, check your input on some special characters such  as (/!@#$%^&*()_+-=]}{[|\?"`~');
          } 
        else {
            setEmailInputError(null);
        }
        setEmail(e.target.value);
        
    }
    useEffect(()=>{
        if(isEmailErrorVisible){
            setTimeout(()=>{
                setIsEmailErrorVisible(false);
                console.log("useEffect dziala")
            }, 5000)
            return;
        }
        return;
    }, [isEmailErrorVisible])
    let currentYear = new Date().getFullYear();
    return(
        <footer className={`footer ${darkTheme?"dark":""}`}>
            <div className="container">
                <div className="contact_me">
                    <title>my contacts</title>

                    <ul className="networks">
                        <h2>follow me</h2>
                        {socNetworks.map((soc)=>{
                            let keyvalue = Math.random() * Math.random() * 10000;
                            return(
                                <li key={keyvalue} className="networks_item"><a id={soc.name} href={soc.mylink}>
                                    <span>{soc.logo}</span><label htmlFor={`#${soc.name}`}>{soc.name}</label></a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="divisionary_line"></div>

                    <form autoComplete="off" onSubmit={emailSubmitHandler}className="email_div">
                        <label htmlFor="#email_input">leave your email</label>
                        <div className="email_input_container">
                            <input id="email_input" type="text" className={`email_input ${isEmailErrorVisible?"emailError":""}`} onChange={emailInputHandler} value={email}/>
                        {isEmailErrorVisible?<div className="visibleEmailError">
                        <h4>{emailInputError}</h4>
                        </div>:null}
                        </div>
                    </form>
                    <div className="divisionary_line"></div>
                    <div className="call_me_div">
                        <h2>call me <FaPhoneAlt /></h2>
                        <h3>+48 514 598 268</h3>
                        <h3>+48 514 598 268</h3>
                        <h3>+48 514 598 268</h3>
                    </div>
                    
                </div>
                <div className="horizontal_line"></div>
                <div className="dateAndInfo_div">
                    <h6>{currentYear} Angielska Grobla 10B, Gdańsk, Poland. All rights reserved</h6>

                </div>
            </div>
        </footer>
    )
}