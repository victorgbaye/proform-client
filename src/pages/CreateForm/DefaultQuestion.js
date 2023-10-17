import React, { useState } from 'react'
import styles from "./CreateForm.module.scss";
import { DropdownInput } from '../../components/UI/Input/Input';
import {fieldType} from './CreateFormData'


const DefaultQuestion = () => {
    const [newQuestion, setNewQuestion] = useState({
        question:'',
        questionType:{
            
        }
    })

    
  return (
    <div>
        {/* <p>hello</p>
        <div className={styles.CreateFormContainer}>
            <section className={styles.NewQuestionContainer}>
                <div className={styles.NewQuestionAndResponse}>
                    <input 
                    name="title" 
                    value={formHeader.title} 
                    onChange={handleTitleChange} 
                    className={styles.NewFormTitle}/>
                    <input 
                    name="description" 
                    value={formHeader.description} 
                    onChange={handleTitleChange} 
                    className={styles.NewFormDescription}/>
                </div>
                <DropdownInput label='Question Type' options={fieldType} style={{width:'222px',height:'4px', padding:'0px'}}/>
            </section>   
        </div> */}
    </div>
  )
}

export default DefaultQuestion