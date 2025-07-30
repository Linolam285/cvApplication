import {useState} from "react";


function ProExperience({setData}) {
    const [proExpList,setProExpList] = useState([]);
    const [number,setNumber] = useState(1);
    const [proExperience,setProExperience] = useState([{
        companyname:"",
        positiotitle:"",
        startdate:"",
        enddate:""
    }])

    const fieldStyle = {
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem",
    };

    const handleInput = (e) => {
        setProExperience([...proExperience,{...proExperience[number],[e.target.name]:e.target.value}]);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setNumber(number+1);
        setProExpList([...proExpList, `<div>${proExperience[number].companyName}</div>`]);
    }

    return <>
        <form action="">
            <legend>Your professional experience</legend>
            <fieldset>
                <div style={fieldStyle}>
                    <label htmlFor="companyname">Company Name</label>
                    <input type="text" required name = "companyname" onChange = {(e) => {
                        handleInput(e);
                        setData([...proExperience,{...proExperience[number],companyname:e.target.value}]);
                    }}/>
                </div>
                <div style = {fieldStyle}>
                    <label htmlFor="positiontitle">Position Title</label>
                    <input required  type="text" name = "positiontitle" onChange = {(e) => {
                        handleInput(e);
                        setData([...proExperience,{...proExperience[number],positiontitle:e.target.value}]);
                    }}/>
                </div>
                <div style = {fieldStyle}>
                    <label htmlFor="startdate">Start date</label>
                    <input required  type="date" name = "startdate" onChange = {(e) => {
                        handleInput(e);
                        setData([...proExperience,{...proExperience[number],startdate:e.target.value}]);
                    }}/>
                </div>
                <div style = {fieldStyle}>
                    <label htmlFor="enddate">End date</label>
                    <input required type="date" name = "enddate" onChange = {(e) => {
                        handleInput(e);
                        setData([...proExperience,{...proExperience[number],enddate:e.target.value}]);
                    }}/>
                </div>
                <button type="submit" onClick = {handleSubmit}>Add</button>
            </fieldset>
        </form>
        </>
    
}

export default ProExperience;