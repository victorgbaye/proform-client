import React,{useState} from 'react'
import styles from "./MyForms.module.scss";
import Button from '../../components/UI/Button/Button';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import Table from '../../components/compound/Table/Table';
import FormTable from './FormsTable';
import PreviousButton from '../../components/compound/BackButton/BackButton';

const MyForms = () => {
    const [isEmpty] = useState(false)
  return (
    <div>
        <main className={styles.MyFormContainer}>
            {
                isEmpty ?

                <>
                    <div className={styles.emptyFormListHeader}>
                        <PreviousButton/><p>My Forms(0)</p>
                        <Button
                        style={{width:"200px", background:"#4040F2", color:"white", padding:"10px 24px",}}
                        >+  Create New Form
                        </Button>
                    </div>
                    <p className={styles.emptyFormList}>You haven’t created any forms yet.</p>
                </>
                :

                <>
                    <div className={styles.emptyFormListHeader}>
                        <span style={{display:'flex', gap:'8px', alignItems:'center'}}>
                            <PreviousButton/>
                            <p>My Forms(12)</p>
                        </span>

                        <div className={styles.formSearch}>
                        <input
                        placeholder='Search...'
                        />
                        <SearchOutlinedIcon/>
                        </div>
                        {/* <Button
                        style={{width:"200px", background:"#4040F2", color:"white", padding:"10px 24px",}}
                        >+  Create New Form
                        </Button> */}
                    </div>
                    <section className={styles.ActionSection}>
                        <Button
                        style={{width:"200px", background:"#4040F2", color:"white", padding:"10px 24px",}}
                        >
                            <FeedOutlinedIcon/><p>+ New Form</p>
                        </Button>
                        <Button>
                            <p>Browse Templates</p>
                        </Button>
                        <Button
                        style={{width:"200px", background:"none", color:"#4040F2", padding:"10px 24px",}}
                         >
                            <p>Import Form</p>
                        </Button>
                    </section>
                    <FormTable/>
                </>
            }
        </main>
    </div>
  )
}

export default MyForms