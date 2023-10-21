import React from 'react'
import styles from "./FormSummary.module.scss";


const FormSummary = () => {
  return (
    <div>
        <section className={styles.SingleSummaryCardContainer}>
            <div className={styles.SingleSummaryCard}>
                <p>587</p>
                <p>Total Views</p>
            </div>
            <div  className={styles.SingleSummaryCard}>
                <p>475</p>
                <p>Total Submissions</p>
            </div>
            <div  className={styles.SingleSummaryCard}>
                <p>385</p>
                <p>Unique Visitors</p>
            </div>
            <div  className={styles.SingleSummaryCard}>
                <p>01m 22sec</p>
                <p>Avg. Session Time</p>
            </div>
        </section>
    </div>
  )
}

export default FormSummary