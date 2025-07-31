import {useState} from "react";
import Info from "./info.jsx";
import ProExperience from "./proExperience.jsx";
import Experience from "./experience.jsx";

function ResumeBuilder({sendAll}) { 
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [info,setInfo] = useState(null);
    const [experience,setExperience] = useState(null);
    const [proExperience, setProExperience] = useState(null);


    const handleInfo = (value) => {
        setInfo(value);
    }

    const handleExperience = (value) => {
        setExperience(value);
    }

    const handleProExperience = (value) => {
        setProExperience(value);
    }

    
    const submitForm = (e) => {
       e.preventDefault();
       sendAll(info,experience,proExperience);
       setIsSubmitted(true);
    }


    return <>
        <Info sendData = {handleInfo}/>
        <Experience sendData = {handleExperience}/>
        <ProExperience sendData = {handleProExperience}/>
        {!isSubmitted?
            <button type="submit" onClick = {submitForm}>Submit</button>
                :
            ""
        }
        
    </>
}

export default ResumeBuilder;