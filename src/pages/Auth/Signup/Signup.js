import React from 'react'
import styles from "./Signup.module.scss";
import Button from '../../../components/UI/Button/Button';
import { Input } from '../../../components/UI/Input/Input';

const Signup = () => {
  return (
    <div className={styles.LoginWrapper}>
    <div className={styles.LoginLeft}>
        <h1 className={styles.LoginLogo}>Proform.</h1>
        <header className={styles.LoginHeaderText}>
            <h3>Get started with Proform</h3>
            <p>Getting started is easy</p>
        </header>
        <main className={styles.loginForm}>
        <Input
            type='text'
            label='Full name'
            placeholder='jon Doe'

            />
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
            <p style={{textAlign:'center', marginTop:'6px', fontSize:'12px'}}>Already have an account? <span style={{color:'#4040F2'}}>Login</span></p>
    </div>
    <div style={{background:'#03111B', flex:0.5, borderRadius:'12px'}}></div>
</div>
  )
}

export default Signup