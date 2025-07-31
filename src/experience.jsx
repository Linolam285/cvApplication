import { useState } from "react";
import "./experience.css";

function Experience({ sendData }) {
  const [currentExperience, setCurrentExperience] = useState({
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
    const updatedExperience = [...experience, currentExperience];
    setExperience(updatedExperience);
    sendData(updatedExperience);
    console.log(updatedExperience);
    setCurrentExperience({
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

  return (
    <>
      <form action="" onSubmit = {handleSubmit}>
        <legend>Your educational experience</legend>
        <fieldset>
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
            <button
              className="addExperience"
              type="submit"
            >
              Add
            </button>

            {showSuccess && (
              <div className = "successPopup">
                Experience added!
              </div>
            )}
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default Experience;
