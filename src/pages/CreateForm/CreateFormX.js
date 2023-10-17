import React,{useState} from 'react'
import styles from "./CreateForm.module.scss";
import Button from '../../components/UI/Button/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { DropdownInput } from '../../components/UI/Input/Input';
import {fieldType} from './CreateFormData'

const CreateFormX = () => {
const [formHeader, setFormHeader] = useState({
    title:'Untitled form',
    description:'Form description'
})

const handleTitleChange = (e) =>{
    const {name, value} = e.target;
    setFormHeader(prevState =>({
        ...prevState,
        [name]: value
    }))

}

const AddQuestion = () =>{

}

  return (
    <div className={styles.CreateFormWrapper}>
        <div className={styles.CreateFormContainer}>
            <header className={styles.NewFormHeaderContainer}>
                {/* <p className={styles.NewFormTitle}>Untitled form</p> */}
                <div>
                    <input 
                    name="title" 
                    value={formHeader.title} 
                    onChange={handleTitleChange} 
                    className={styles.NewFormTitle}/>
                </div>
                <div>
                    <input 
                    name="description" 
                    value={formHeader.description} 
                    onChange={handleTitleChange} 
                    className={styles.NewFormDescription}/>
                </div>
            </header>   
        </div>
        <div className={styles.CreateFormContainer}>
            <section className={styles.NewQuestionContainer}>
                {/* <p className={styles.NewFormTitle}>Untitled form</p> */}
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
        </div>
        <Button 
        onClick={AddQuestion}
        style={{
            border:'1px dashed #4040F2', 
            background:'none', 
            color:'#4040F2', 
            padding:'10px 24px', 
            margin: '0 auto',
            marginTop:'20px'
            }}>
            <AddOutlinedIcon/>
            Add New Field
        </Button>
    </div>
  )
}

export default CreateFormX