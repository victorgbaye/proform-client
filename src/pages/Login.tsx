import { Link } from "react-router-dom"
import { Button } from "../components/elements/Button/Button.styles"
import { Input } from "../components/elements/Input/Input"
import { Wrapper } from "../assets/wrappers/Auth.styles"

const Login = () => {
  return (
    <Wrapper>
        <main>
            <Input label="Email" placeholder="e.g Johdoe@gmail.com"/>
            <Input label="Password" placeholder="Enter password"/>
            <Button style={{width:'100%'}}>Log in</Button>
            <div>
                <p>Dont have an account? <Link to='/signup' style={{textDecoration:'none', color:'#5D55F7'}}>Sign Up</Link></p>
            </div>
        </main>
        
    </Wrapper>
  )
}

export default Login