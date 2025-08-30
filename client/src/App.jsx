import { useState } from "react"
import { AcademicIcon } from "./assets/icons/academic.jsx"
import { AuthWrapper } from "./components/AuthWrapper.jsx"
import FloatingInput from "./components/FloatingInput.jsx"

function App() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const handleChange = (e) => {
    const {name, value} = e.target;
    if(name === "email") setEmail(value)
    else if(name === "password") setPassword(value)
}
  return (
    <>
      <AuthWrapper>
        <h1>Sign up form</h1>
        <form action="">
          <FloatingInput
            label="Email"
            icon={<AcademicIcon size="mediumIcon" />}
            id="email"
            type="email"
            value={email}
            onChange={handleChange} />
          <FloatingInput
            label="Password"
            icon={<AcademicIcon size="mediumIcon" />}
            id="password"
            type="password"
            value={password}
            onChange={handleChange} />
        </form>
      </AuthWrapper>
    </>

  )
}

export default App
