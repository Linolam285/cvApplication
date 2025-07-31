import {useState} from 'react';
import "./resume.css";


function Resume({data}) {
    return <>
        <h1 className ="fullName">{data.info.fullname}</h1>
        <div className = "emailphone">{data.info.email} • {data.info.phonenumber}</div>
        <div className = "proExp">
            <div className = "proExpTitle">Professional Experience</div>
            {data.proExperience.map((proExp,index) => {
                return <div key = {index} className = "proExpUnit">
                    <div className = "date">{proExp.startdate} - {proExp.enddate}</div>
                    <div className = "companyName">Company Name : {proExp.companyname}</div>
                    <div className = "positionTitle">Position: {proExp.positiontitle}</div>
                </div> 
                //return nécessaire car syntaxe avec flèche sans parenthèses (return explicite ici)
            })}
        </div>
    </>
}


export default Resume;