import "./Home.css"
import {ColorThemeContext, ThemeUpdateContext , useTheme} from "../ColorThemeContext";
import { useState } from "react";
export default function Home(){
    const {darkTheme, toggleTheme} = useTheme();
    const [responseToFetch, setResponseToFetch] = useState([]);
    const formOnSubmitHandler = (e) =>{
    }
    const onChangeInputHandler = async (e) =>{
        e.preventDefault();
        setResponseToFetch(null);
        try{
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${e.target.value}`);
            const response = await res.json();
            
            formatResponse(response);
        }
        catch(error){
            console.log(error)
        }
    }
    const formatResponse = (jsonresponse) =>{
        console.log(jsonresponse)
        const [word, wOrigin] = jsonresponse;
        setResponseToFetch([word, wOrigin])
        // const phonetics = jsonresponse[0].phonetics[0]
        // const partOfSpeech = jsonresponse[0].partOfSpeech
        // setResponseToFetch([phonetics, partOfSpeech]);

    }
    return(
        <div className="homePage">
            <div className="container">
                <div className="homePage_inner">
                   <form onSubmit={formOnSubmitHandler}>
                    <input placeholder="type here" type="text" onChange={onChangeInputHandler} />
                   </form>
                   <div className="word_phonetic">
                    {/* {responseToFetch?responseToFetch.map((item)=>{
                        return {Array.isArray(item) ?<>{item.map((objItem)=><h4>{objItem}</h4>)}</>:<h6>{item}</h6>};
                    }):null} */}
                    {responseToFetch.map((item)=>{
                        return <h6>{item}</h6>
                    })}
                   </div>
                </div>
            </div>
        </div>
    )
}