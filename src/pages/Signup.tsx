import { Link } from "react-router-dom"
import { Button } from "../components/elements/Button/Button.styles"
import { Input } from "../components/elements/Input/Input"
import { Wrapper } from "../assets/wrappers/Auth.styles"

const Signup = () => {
  return (
    <Wrapper>
        <main>
            <Input label="Full name" placeholder="e.g John Doe"/>
            <Input label="Email" placeholder="e.g Johdoe@gmail.com"/>
            <Input label="Password" placeholder="Enter password"/>
            <Input label="Re-type Password" placeholder="Enter password"/>
            <Button style={{width:'100%'}}>Signup</Button>
            <div>
                <p>Already have an account? <Link to='/login' style={{textDecoration:'none', color:'#5D55F7'}}>Login</Link></p>
            </div>
        </main>
        
    </Wrapper>
  )
}

export default Signup