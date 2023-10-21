import React, {useState} from 'react'
import './SingleForm.css'; 
import FormSummary from './FormSummary';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Button from '../../components/UI/Button/Button';

const SingleForm = () => {

    const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="tabs-container">
        <header className='singleFormHeader'>
            <p className='formTitle'>Survey Form 1</p>
            <Button
            style={{width:"230px", background:"#4040F2", color:"white", padding:"10px 24px",}}
            >
            <FileDownloadOutlinedIcon/><p>Download responses</p>
            </Button>

        </header>

        <section className="tabs-flex">
            <div className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTabClick('tab1')}>
                Responses
            </div>
            <div className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')}>
                Summary
            </div>
            <div className={`tab ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => handleTabClick('tab3')}>
                Tab 3
            </div>
        </section>
      <div className="tab-content">
        {activeTab === 'tab1' && <div>Content for Tab 1</div>}
        {activeTab === 'tab2' && <div><FormSummary/></div>}
        {activeTab === 'tab3' && <div>Content for Tab 3</div>}
      </div>
    </div>
  )
}

export default SingleForm