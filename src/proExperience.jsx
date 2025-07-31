import {useState} from "react";


function ProExperience({sendData}) {
    const [currentProExperience,setCurrentProExperience] = useState({
        companyname:"",
        positiontitle:"",
        startdate:"",
        enddate:""
    });
    const [number,setNumber] = useState(0);
    const [proExperience,setProExperience] = useState([]);

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
        setNumber(number+1);
        const updatedProExperience = [...proExperience,currentProExperience]; // car state asynchrone, on veut avoir cette màj instantanément
        setProExperience(updatedProExperience); 
        sendData(updatedProExperience);
        console.log(updatedProExperience);
        setCurrentProExperience({
            companyname:"",
            positiontitle:"",
            startdate:"",
            enddate:""
        });
        //setProExpList([...proExpList, `<div>${proExperience[number].companyName}</div>`]);
    }

    return <>
        <form action="">
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
                <button type="submit" onClick = {handleSubmit}>Add</button>
            </fieldset>
        </form>
        </>
    
}

export default ProExperience;