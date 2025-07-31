import {useState} from "react";
import "./proExperience.css";

function ProExperience({sendData}) {
    const [isEditing,setIsEditing] = useState(false);
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

    const handleDelete = (e) => {
        const updatedList = proExperience.filter((proExp) => {
            return proExp.number !== Number(e.target.dataset.number);
        })
        setProExperience(updatedList);
        sendData(updatedList);
    }

    const handleEdit = (e) => {
        setCurrentProExperience(proExperience.find((proExp) => {
            return proExp.number === Number(e.target.dataset.number);
        }))
        setIsEditing(true);
    }

    const handleEditConfirm = (e) => {
        const updatedList = proExperience.map((proExp) => {
            if (proExp.number === currentProExperience.number) {
                return currentProExperience;
            } else {
                return proExp;
            }
        })
        setProExperience(updatedList);
        sendData(updatedList);
    }

    return <>
        <div className = "professionalExperience">
            <form action="" onSubmit = {handleSubmit}>
                <legend style = {{marginLeft:"9px"}}>Your professional experience</legend>
                <fieldset style = {{border:"none"}}>
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
                        {!isEditing?
                        <button type="submit" className = "addExperience">Add</button>
                            :
                        <button type = "button" className = "editExperience" onClick = {handleEditConfirm}>Edit Confirm</button>
                        }
                        
                        {(showSuccess&&!isEditing) && (
                            <div className = "successPopup">
                                Professional Experience Added!
                            </div>
                        )}
                    </div>
                    
                </fieldset>
            </form>
            <div className = "expList">
                        {proExperience.length > 0 && proExperience.map((proExp) => {
                            return <div className = "divExp" key = {proExp.number}>
                                <div className = "divExpCompanyName">{proExp.companyname}</div>
                                <button className = "deleteExp" type = "button" onClick = {handleDelete} data-number = {proExp.number} >Delete</button> 
                                <button className = "editExp" type = "button" onClick = {handleEdit} data-number = {proExp.number}>Edit</button>
                            </div>
                        })}
            </div>
        </div>
        </>
    
}

export default ProExperience;