import { useState } from 'react';
import './App.css';
import ResumeBuilder from "./resumeBuilder.jsx";
import Resume from "./resume.jsx";

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
      <ResumeBuilder  sendAll = {handleData}/>
     {data!=null?
        <>
            <Resume data = {data}/>
        </>
        :
        <div>Waiting...</div>
     }

        
    </>
  )
}

export default App;
