import { useState } from 'react'
import Button from '../../components/UI/Button/Button'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Input } from '../../components/UI/Input/Input';
import styles from "./CreateForm.module.scss";


const CreateFormV2 = () => {
    const [questions, setQuestions] = useState([]);
    const [isReadOnly, setIsReadOnly] = useState(false);


    const addQuestion = () =>{
        const newQuestion = {
            id: questions.length + 1,
            text: 'Question',
            type: 'text', // You can have different question types like text, multiple choice, etc.
            // response: <DefaultQuestion/>
          };
          setQuestions([...questions, newQuestion]);
          setIsReadOnly(false)
    }
  return (
    <div>
        <section>
            <Input
            readOnly={isReadOnly}
            />
             <Input
            readOnly={isReadOnly}
            />
        </section>
        {
            questions.map((question)=>{
                return(
                    <>
                        <p>Hello world</p>
                    </>
                )
            })
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

export default CreateFormV2