import { useState } from 'react';
import './App.css';
import ResumeBuilder from "./resumeBuilder.jsx";

function App() {
  const [data,setData] = useState(null);
  const handleData = (info,experience,proExperience) => {
    setData({info,
      experience,
      proExperience
    });
  }
  
  return (
    <>
      <ResumeBuilder sendAll = {handleData}/>
     {data?
        <>
            <h1>{data.info.fullname}</h1>
            <div>{data.info.phonenumber} • {data.info.email}</div>
        </>
        :
        <div>Waiting...</div>
     }

        
    </>
  )
}

export default App;
