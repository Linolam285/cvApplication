import {useState} from "react";


function Experience({setData}) {

    const [experience,setExperience] = useState({
        schoolname: "",
        titlestudy: "",
        startdate: "",
        enddate: ""
    })

    const fieldStyle = {
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem",
    };

    const handleInput = (e) => {
        setExperience({...experience,[e.target.name]:e.target.value});
    }


    return <>
        <form action="">
            <legend>Your educational experience</legend>
            <fieldset>
                <div style={fieldStyle}>
                    <label htmlFor="schoolname">School Name</label>
                    <input type="text" name = "schoolname" onChange = {(e) => {
                        handleInput(e);
                        setData({...experience,schoolname:e.target.value});
                    }}/>
                </div>
                <div style = {fieldStyle}>
                    <label htmlFor="titlestudy">Title of Study</label>
                    <input type="text" name = "titlestudy" onChange = {(e) => {
                        handleInput(e);
                        setData({...experience,titlestudy:e.target.value});
                    }}/>
                </div>
                <div style = {fieldStyle}>
                    <label htmlFor="startdate">Start date</label>
                    <input type="date" name = "startdate" onChange = {(e) => {
                        handleInput(e);
                        setData({...experience,startdate:e.target.value});
                    }}/>
                </div>
                <div style = {fieldStyle}>
                    <label htmlFor="enddate">End date</label>
                    <input type="date" name = "enddate" onChange = {(e) => {
                        handleInput(e);
                        setData({...experience,enddate:e.target.value});
                    }}/>
                </div>
            </fieldset>
        </form>
        </>
    
}

export default Experience;