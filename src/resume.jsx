import {useState} from 'react';
import "./resume.css";


function Resume({data}) {
    return <>
        <h1 className ="fullName">{data.info.fullname}</h1>
        <div className = "emailphone">{data.info.email} • {data.info.phonenumber}</div>
        <div className = "proExp">
            <div className = "proExpTitle">Professional Experience</div>
            {data.proExperience && data.proExperience.map((proExp,index) => {
                return <div key = {index} className = "proExpUnit">
                    <div className = "date">{proExp.startdate} - {proExp.enddate}</div>
                    <div className = "companyName">Company Name : {proExp.companyname}</div>
                    <div className = "positionTitle">Position: {proExp.positiontitle}</div>
                </div> 
                //return nécessaire car syntaxe avec flèche sans parenthèses (return explicite ici)
            })}
        </div>
        <div className = "exp">
            <div className="expTitle">Education</div>
            {data.experience && data.experience.map((exp,index) => {
                return <div key = {index*100} className = "expUnit">
                    <div className="date">{exp.startdate} - {exp.enddate}</div>
                    <div className="schoolName">School Name : {exp.schoolname}</div>
                    <div className="titleStudy">Title of Study : {exp.titleStudy}</div>
                </div>
            })}
        </div>
    </>
}


export default Resume;