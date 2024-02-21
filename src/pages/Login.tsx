import { Link } from "react-router-dom"
import { Button } from "../components/elements/Button/Button.styles"
import { Input } from "../components/elements/Input/Input"

const Login = () => {
  return (
    <div>
        <Input label="Email" placeholder="e.g Johdoe@gmail.com"/>
        <Input label="Password" placeholder="Enter password"/>
        <Button style={{width:'100%'}}>Log in</Button>
        <div>
            <p>Dont have an account? <Link to='/signup'>Sign Up</Link></p>
        </div>
        
    </div>
  )
}

export default Login