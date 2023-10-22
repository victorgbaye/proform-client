import React,{useState} from 'react'
import styles from "./CreateForm.module.scss";
import Button from '../../components/UI/Button/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { DropdownInput } from '../../components/UI/Input/Input';
import {fieldType} from './CreateFormData'
import DefaultQuestion from './DefaultQuestion';

const CreateFormX = () => {
    const [formHeader, setFormHeader] = useState({
        title:'Untitled form',
        description:'Form description'
    })
    const [questions, setQuestions] = useState([]);
    const [editingQuestionId, setEditingQuestionId] = useState(null);

const handleTitleChange = (e) =>{
    const {name, value} = e.target;
    setFormHeader(prevState =>({
        ...prevState,
        [name]: value
    }))

}

const addQuestion = () =>{
    const newQuestion = {
        id: questions.length + 1,
        text: 'Question',
        type: 'text', // You can have different question types like text, multiple choice, etc.
        response: <DefaultQuestion/>
      };
      setQuestions([...questions, newQuestion]);
}

const handleQuestionChange = (e, questionId) => {
    const updatedQuestions = questions.map(question =>
      question.id === questionId ? { ...question, text: e.target.value } : question
    );
    setQuestions(updatedQuestions);
  };

  const startEditingQuestion = questionId => {
    setEditingQuestionId(questionId);
  };

  const stopEditingQuestion = () => {
    setEditingQuestionId(null);
  };



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
        {
            questions.map((question)=>(
                
                    
                    <div  key={question.id}>
                    <div className={styles.CreateFormContainer}>
                        <section className={styles.NewQuestionContainer}>
                            {/* <p className={styles.NewFormTitle}>Untitled form</p> */}
                            <div className={styles.NewQuestionAndResponse}>
                                <input 
                                name="title" 
                                value={formHeader.title} 
                                onChange={e => handleQuestionChange(e, question.id)}
                                className={styles.NewFormTitle}/>
                                <input 
                                name="description" 
                                value={formHeader.description} 
                                onChange={e => handleQuestionChange(e, question.id)}
                                className={styles.NewFormDescription}/>
                            </div>
                            <DropdownInput label='Question Type' options={fieldType} style={{width:'222px',height:'4px', padding:'0px'}}/>
                        </section>   
                    </div>
                    </div>
                
            ))
        }
        <Button 
        onClick={addQuestion}
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