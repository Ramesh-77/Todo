import { AcademicIcon } from "./assets/icons/academic.jsx"
// import { Button } from "./components/Button.jsx"

import FloatingInput from "./components/FloatingInput.jsx"
import React from "react"


function App() {
  const [fullName, setFullName] = React.useState("")

  return (
    <>
      <h1>Hi reamesh</h1>
        <FloatingInput
        id="fullName"
        label="Email"
        value={fullName}
        type="email"
        onChange={(e) => setFullName(e.target.value)}
        icon={<AcademicIcon size="inputFieldIcon" />}
      />
      
      {/* <Button 
      size="small" 
      variant="primary" 
      text="Login" 
      // startIcon={<AcademicIcon size="smallIcon" />} 
      startIcon={<AcademicIcon size="smallIcon" />} 
    />
      <Button size="medium" variant="secondary" text="Login" endIcon={<AcademicIcon size="mediumIcon" />}/>
      <Button size="large" variant="danger" text="Login" onClick={()=>{
        alert("button clicked")
      }} endIcon={<AcademicIcon size="largeIcon" />} /> */}
    </>
  )
}

export default App
