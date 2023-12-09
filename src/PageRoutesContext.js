import React, {useState, useContext, createContext} from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
const PageRoutesContext = createContext();
export const PageRoutesProvider = ({children, anchors}) =>{
    return(
        <PageRoutesContext.Provider>
            <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/about" element={<About/>}/>
            </Routes>
            {children}
        </PageRoutesContext.Provider>
    )
}