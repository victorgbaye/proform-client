import React from 'react'
import styles from "./Login.module.scss";
import Button from '../../../components/UI/Button/Button';
import { FcGoogle } from "react-icons/fc";
import { Input } from '../../../components/UI/Input/Input';

const Login = () => {
  return (
    <div className={styles.LoginWrapper}>
        <div className={styles.LoginLeft}>
            <h1 className={styles.LoginLogo}>Proform.</h1>
            <header className={styles.LoginHeaderText}>
                <h3>Welcome Back</h3>
                <p>Login into your account</p>
            </header>
            <main className={styles.loginForm}>
                <Input
                type='email'
                label='Email Address'
                placeholder='jon@mail.com'

                />
                <Input
                type='password'
                label='Password'
                placeholder='**********'
                />
            </main>
                <Button
                style={{
                    background:'#4040F2',
                    color:'white',
                    padding:'20px 174px',
                    margin:'0 auto',
                    fontSize:'17px'
                }}
                >
                   Login
                </Button>
                <p style={{textAlign:'center', marginTop:'6px', fontSize:'12px'}}>Don’t have an account? <span style={{color:'#4040F2'}}>Sign Up</span></p>
        </div>
        <div style={{background:'#03111B', flex:0.5, borderRadius:'12px'}}></div>
    </div>
  )
}


export default Login