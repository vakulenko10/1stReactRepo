import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
export const anchors = 
[
    {
        name: "home",
        path: "/",
        element: <Home />
    },
    {
        name: "about",
        path: "/about",
        element: <About/>
    },
    {
        name: "pricing",
        path: "/pricing",
        element: <Pricing/>
    }
]