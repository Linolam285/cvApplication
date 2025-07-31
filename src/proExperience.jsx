import {useState} from "react";


function ProExperience({sendData}) {
    const [number,setNumber] = useState(0);
    const [currentProExperience,setCurrentProExperience] = useState({
        number:number,
        companyname:"",
        positiontitle:"",
        startdate:"",
        enddate:""
    });
    const [proExperience,setProExperience] = useState([]);
    const [showSuccess,setShowSuccess] = useState(false);
    const fieldStyle = {
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem",
    };

    const handleInput = (e) => {
        setCurrentProExperience({...currentProExperience,[e.target.name]:e.target.value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!e.currentTarget.reportValidity()) {
            // Le formulaire est invalide : ne pas continuer
            return;
        }
        const newNumber = number+1;
        setNumber(newNumber);
        const updatedProExperience = [...proExperience,currentProExperience]; // car state asynchrone, on veut avoir cette màj instantanément
        setProExperience(updatedProExperience); 
        sendData(updatedProExperience);
        console.log(updatedProExperience);
        setCurrentProExperience({
            number:newNumber,
            companyname:"",
            positiontitle:"",
            startdate:"",
            enddate:""
        });
        setShowSuccess(true);
        const timeout = 2000;
        setTimeout(() => {
            setShowSuccess(false);
        }, timeout);
        //setProExpList([...proExpList, `<div>${proExperience[number].companyName}</div>`]);
    }

    return <>
        <form action="" onSubmit = {handleSubmit}>
            <legend>Your professional experience</legend>
            <fieldset>
                <div style={fieldStyle}>
                    <label htmlFor="companyname">Company Name</label>
                    <input type="text" required name = "companyname" onChange = {(e) => {handleInput(e)}} value = {currentProExperience.companyname}/>
                </div>
                <div style = {fieldStyle}>
                    <label htmlFor="positiontitle">Position Title</label>
                    <input required  type="text" name = "positiontitle" onChange = {(e) => {handleInput(e)}} value = {currentProExperience.positiontitle}/>
                </div>
                <div style = {fieldStyle}>
                    <label htmlFor="startdate">Start date</label>
                    <input required  type="date" name = "startdate" onChange = {(e) => {handleInput(e)}} value = {currentProExperience.startdate}/>
                </div>
                <div style = {fieldStyle}>
                    <label htmlFor="enddate">End date</label>
                    <input required type="date" name = "enddate" onChange = {(e) => {handleInput(e)}} value = {currentProExperience.enddate}/>
                </div>
                <div style = {{position:"relative"}}>
                    <button type="submit" className = "addExperience">Add</button>
                    {showSuccess && (
                        <div className = "successPopup">
                            Professional Experience Added!
                        </div>
                    )}
                </div>
                
                
            </fieldset>
        </form>
        </>
    
}

export default ProExperience;