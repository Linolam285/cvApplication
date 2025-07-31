import { useState } from "react";
import "./experience.css";

function Experience({ sendData }) {
  const [isEditing,setIsEditing] = useState(false);
  const [number,setNumber] = useState(0);
  const [currentExperience, setCurrentExperience] = useState({
    number:number,
    schoolname: "",
    titlestudy: "",
    startdate: "",
    enddate: "",
  });
  const [experience, setExperience] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const fieldStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  };

  const handleInput = (e) => {
    setCurrentExperience({
      ...currentExperience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) {
      // Le formulaire est invalide : ne pas continuer
      return;
    }
    const newNumber = number+1;
    setNumber(newNumber);
    const updatedExperience = [...experience, currentExperience];
    setExperience(updatedExperience);
    sendData(updatedExperience);
    console.log(updatedExperience);
    setCurrentExperience({
      number:newNumber,
      schoolname: "",
      titlestudy: "",
      startdate: "",
      enddate: "",
    });
    setShowSuccess(true);
    const timeout = 2000;
    setTimeout(() => {
      setShowSuccess(false);
    }, timeout);
  };

  const handleDelete = (e) => {
    const updatedList = experience.filter((exp) => {
      return exp.number != Number(e.target.dataset.number);
    })
    setExperience(updatedList);
    sendData(updatedList);
    setIsEditing(false);
    setCurrentExperience({
      number:number,
      schoolname: "",
      titlestudy: "",
      startdate: "",
      enddate: ""
    }) //reset
  }

  const handleEdit = (e) => {
    setCurrentExperience(experience.find((exp)=>{
      return Number(exp.number == e.target.dataset.number);
    }))
    setIsEditing(true);
  }

  const handleEditConfirm = (e) => {
    const updatedList = experience.map((exp) => {
            if (exp.number === currentExperience.number) {
                return currentExperience;
            } else {
                return exp;
            }
    });
    setExperience(updatedList);
    sendData(updatedList);
    setIsEditing(false);
    const newNumber = number+1;
    setCurrentExperience({
      number:newNumber,
      schoolname: "",
      titlestudy: "",
      startdate: "",
      enddate: ""
    })
  }

  return (
    <>
    <div className = "educationalExperience">
        <form action="" onSubmit = {handleSubmit}>
          <legend>Your educational experience</legend>
          <fieldset style = {{border:"none"}}>
            <div style={fieldStyle}>
              <label htmlFor="schoolname">School Name</label>
              <input
                required
                type="text"
                name="schoolname"
                onChange={(e) => {
                  handleInput(e);
                }}
                value={currentExperience.schoolname}
              />
            </div>
            <div style={fieldStyle}>
              <label htmlFor="titlestudy">Title of Study</label>
              <input
                required
                type="text"
                name="titlestudy"
                onChange={(e) => {
                  handleInput(e);
                }}
                value={currentExperience.titlestudy}
              />
            </div>
            <div style={fieldStyle}>
              <label htmlFor="startdate">Start date</label>
              <input
                required
                type="date"
                name="startdate"
                onChange={(e) => {
                  handleInput(e);
                }}
                value={currentExperience.startdate}
              />
            </div>
            <div style={fieldStyle}>
              <label htmlFor="enddate">End date</label>
              <input
                required
                type="date"
                name="enddate"
                onChange={(e) => {
                  handleInput(e);
                }}
                value={currentExperience.enddate}
              />
            </div>
            <div style={{ position: "relative" }}>
              {!isEditing?
              <>
                <button className="addExperience"type="submit">Add</button>
                <div></div>
              </> // evite un bug (quand le bouton edit confirm est appuyé le bouton add l'est aussi car superposition)
                :
                <button type = "button" className = "editExperienceConfirm" onClick = {handleEditConfirm}>Edit Confirm</button>
              }
              {(!isEditing && showSuccess) && (
                <div className = "successPopup">
                  Experience added!
                </div>
              )}
            </div>
          </fieldset>
        </form>
        <div className = "expList">
                        {experience.length > 0 && experience.map((exp) => {
                            return <div className = "divExp" key = {exp.number}>
                                <div className = "divExpCompanyName">{exp.schoolname}</div>
                                <button className = "deleteExp" type = "button" onClick = {handleDelete} data-number = {exp.number} >Delete</button> 
                                <button className = "editExp" type = "button" onClick = {handleEdit} data-number = {exp.number}>Edit</button>
                            </div>
                        })}
            </div>
      </div>
    </>
  );
}

export default Experience;
