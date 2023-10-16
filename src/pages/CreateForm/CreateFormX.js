import React,{useState} from 'react'
import styles from "./CreateForm.module.scss";
import Button from '../../components/UI/Button/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

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
// const [formHeader, setFormHeader] = useState({
//     title: 'Untitled form',
//     description:'Form description'
// });

// const [formHeader, setFormHeader] = useState({
//     input1: 'Untitled form',
//     input2: 'Form description'
//   });


//   const handleTitleChange = (e) => {
//     const { name, value } = e.target;
//     setFormHeader(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };
// const handleTitleChange = (e) => {
//     const { name, value } = e.target;
//     setFormHeader(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };
  return (
    <>
    <div className={styles.CreateFormContainer}>
        <header className={styles.NewFormHeaderContainer}>
            {/* <p className={styles.NewFormTitle}>Untitled form</p> */}
            <div>
                <input name="title" value={formHeader.title} onChange={handleTitleChange} className={styles.NewFormTitle}/>
            </div>
            <div>
                <input name="description" value={formHeader.description} onChange={handleTitleChange} className={styles.NewFormDescription}/>
            </div>
            {/* <p className={styles.NewFormDescription}>Form description</p> */}
            
        </header>
        <div>
  </div>
       
    </div>
    <div className={styles.CreateFormContainer}>
        <p>Your Question goes here</p>

    </div>
    <Button style={{border:'1px dashed #4040F2', background:'none',color:'#4040F2', padding:'10px 24px'}}>
        <AddOutlinedIcon/>
        Add New Field
    </Button>
    </>
  )
}

export default CreateFormX