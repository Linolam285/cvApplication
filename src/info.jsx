import {useState} from "react";


function Info({sendData}) {
    
    const [info,setInfo] = useState({
        fullname: "",
        email: "",
        phonenumber: ""
    });

    const fieldStyle = {
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem",
    };

    const handleInput = (e) => {
        setInfo({...info,[e.target.name]:e.target.value});
    }

    return <>
        <form action="">
            <legend>Your personal information</legend>
            <fieldset>
                <div style={fieldStyle}>
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" name = "fullname" onChange = {(e) =>  {
                        handleInput(e); 
                        sendData({...info,fullname:e.target.value});
                    }}/>
                </div>
                <div style = {fieldStyle}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name = "email" onChange = {(e) => {
                        handleInput(e);
                        sendData({...info,email:e.target.value})
                    }}/>
                </div>
                <div style = {fieldStyle}>
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input type="number" name = "phonenumber" onChange = {(e) => {
                        handleInput(e);
                        sendData({...info,phonenumber:e.target.value});
                    }} />
                </div>
            </fieldset>
        </form>
        </>
    
}

export default Info;