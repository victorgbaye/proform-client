import React from 'react';
// import './FormTable.scss'; // Import your SCSS file for styling
import styles from "./MyForms.module.scss";
import { formData } from './MyFormsData'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Link } from 'react-router-dom';

const FormTable = () => {
  return (
    <div className={styles.formTable}>
      <table>
        <thead>
          <tr className={styles.formTableRow}>
            <th>Form Name</th>
            <th>Last Updated</th>
            <th>Total Responses</th>
          </tr>
        </thead>
        <tbody>
          {formData.map(({ formName, lastUpdated, totalResponses }, index) => (
            <tr key={index} className={styles.formTableRow}>
              <td>{formName}</td>
              <td>{lastUpdated.toDateString()}</td>
              <td>{totalResponses}</td>
              <Link to='/singleform'>
                <td className={styles.formTableRowSeeMore}>
                  <p>See More</p>
                  <ArrowForwardOutlinedIcon/>
                </td>
              </Link>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormTable;
