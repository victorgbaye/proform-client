import styles from "./CreateForm.module.scss";

import ShortTextOutlinedIcon from '@mui/icons-material/ShortTextOutlined';
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
// import TextFieldsIcon from '@mui/icons-material/TextFields'; // Import the TextFields icon from Material-UI Icons


export   const fieldType = [
    { value: 'option1', 
    label:
     <div className={styles.formType}>
        <ShortTextOutlinedIcon/>
        <p>short response</p>
    </div> },
    { value: 'option2', 
    label:
     <div className={styles.formType}>
        <div><FormatAlignRightOutlinedIcon/></div>   
        <p>long response</p>
    </div> },
        { value: 'option3', 
        label:
         <div className={styles.formType}>
            <div><CheckBoxOutlinedIcon/></div>   
            <p>Multiple Choice</p>
        </div> },

  ];