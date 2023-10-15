import React from 'react'
import styles from "./Support.module.scss";
import Accordion from '../../components/compound/Accordion/Accordion';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import {FAQ} from './FAQData'
import Button from '../../components/UI/Button/Button';
const Support = () => {
  return (
    <>
        <div className={styles.SupportContainer}>
            <p className={styles.SupportHeader}>Help and Support</p>
            
            {
                FAQ.map((FAQs, Key)=>{
                    return(
                        <div>

                        <div 
                        key={FAQs.id}
                        className={styles.AccordionWrapper}
                        >
                            <Accordion
                                question={FAQs.title}
                                answer={FAQs.info}
                            />
                        </div>
                        </div>
                    )
                })
            }
            
            <section className={styles.SupportSection2}>
                <div className={styles.GetInTouch}>
                    <p className={styles.GetInTouchHeader}>Get in touch with us</p>
                    <div  className={styles.GetInTouchFlex} style={{borderBottom: "1px solid #e1e1ea"}}>
                        <LocalPhoneIcon/>
                        <div>
                            <p>+91 9983XX7898</p>
                            <p>+91 9983XX7897</p>
                        </div>
                        
                    </div>
                    <div className={styles.GetInTouchFlex}>
                        <MailOutlineOutlinedIcon/>
                        <div>
                            <p>support@topform.com</p>
                            <p>help@topform.com</p>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.ChatWithExpert}>
                    <p className={styles.ChatWithExpertHeader}>Chat with our experts</p>
                    <div className={styles.ChatWithExpertMain}>
                        <QuestionAnswerOutlinedIcon style={{fontSize:"40px"}}/>
                        <p>Chat with one of our experts. They can answer, guide and resolve your issues.</p>
                        <Button
                        style={{padding:"10px 34px", background:"none", border:"1px solid #4040F2", color: "#4040F2"}}
                        >
                            Start a Chat Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Support