import {Navbar} from './Navbar'
import {ColorThemeContext, ThemeUpdateContext , useTheme}from "./ColorThemeContext";


import {Route, Routes} from "react-router-dom";
import {anchors} from "./anchors";
import { Footer } from './Footer';
function App() {
  const {darkTheme, toggleTheme} = useTheme();
  return (
    <>
    <div className={`App, ${darkTheme?'DarkTheme':'LightTheme'}`}>
      <Navbar anchors={anchors}/>
    </div>
    <div className={`container, ${darkTheme?'DarkTheme':'LightTheme'}`}>
        <Routes>
          {anchors.map((anchor)=>{
            const keyvalue = Math.random()
            return <Route path={anchor.path} key={keyvalue} element={anchor.element}/>
          })}
        </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
