import { AcademicIcon } from "./assets/icons/academic.jsx"
import { Button } from "./components/Button.jsx"


function App() {

  return (
    <>
      <h1>Hi reamesh</h1>
      <Button 
      size="small" 
      variant="primary" 
      text="Login" 
      // startIcon={<AcademicIcon size="smallIcon" />} 
      startIcon={<AcademicIcon size="smallIcon" />} 
    />
      <Button size="medium" variant="secondary" text="Login" endIcon={<AcademicIcon size="mediumIcon" />}/>
      <Button size="large" variant="danger" text="Login" endIcon={<AcademicIcon size="largeIcon" />} />
    </>
  )
}

export default App
