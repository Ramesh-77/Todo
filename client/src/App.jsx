import { AcademicIcon } from "./assets/icons/academic.jsx"
import { Button } from "./components/Button.jsx"


function App() {

  return (
    <>
     <h1>Hi reamesh</h1>
     <Button size="small" variant="primary" text="Login" startIcon={<AcademicIcon />}/>
     <Button size="medium" variant="secondary" text="Login" />
     <Button size="large" variant="danger" text="Login" />
    </>
  )
}

export default App
