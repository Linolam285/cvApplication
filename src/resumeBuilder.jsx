import {useState} from "react";
import Info from "./info.jsx";
import ProExperience from "./proExperience.jsx";
import Experience from "./experience.jsx";
import "./resumeBuilder.css";

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
        <div className = "resumeBuilder" style = {{width:"30vw"}}>
            <Info sendData = {handleInfo}/>
            <Experience sendData = {handleExperience}/>
            <ProExperience sendData = {handleProExperience}/>
            {!isSubmitted && info !== {}?
                <button type="submit" id = "submitResumeBuilder" onClick = {submitForm}>Submit</button>
                    :
                ""
            }
        </div>
    </>
}

export default ResumeBuilder;