import React,{useState} from 'react'
import styles from "./Accordion.module.scss";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
const Accordion = ({question, answer}) => {
    const [show, setShow] = useState(false)
  return (
    <div className={styles.accordionContainer}>
        <div className={styles.accordionQestionButton}>
            <div className={styles.accordionQuestion}>{question}</div>
            <div onClick={()=>setShow(!show)}>{show? <ExpandLessOutlinedIcon/> :<ExpandMoreOutlinedIcon/>}</div>
        </div>
        {show && <div className={styles.accordionAnswer}>{answer}</div>}
    </div>
  )
}

export default Accordion