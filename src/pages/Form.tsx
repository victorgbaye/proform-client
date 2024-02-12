import { PageHeader } from "../assets/wrappers/PageHeader.styles";
import { ExtendedButton } from "../components/elements/Button/Button.styles";
import eye from '../assets/images/eye.svg';
import settings from '../assets/images/settings.svg';
import undo from '../assets/images/undo.svg';
import redo from '../assets/images/redo.svg';
import { useState } from "react";
import BackButton from "../components/patterns/BackButton";
import { TabButton, TabContainer } from "../assets/wrappers/Tabs.styles";
import Edit from "./Edit";
import Responses from "./Responses";
import Modal from "../components/patterns/Modal";
// import { Input } from "../components/elements/Input/Input";
import Tabs from "../components/patterns/Tabs";
import { Link } from "react-router-dom";
import CopyLink from "../components/patterns/CopyLink";
import Embed from "../components/patterns/Embed";
// import FormEnviroment from "./FormEnviroment";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);



  const shareTabsdata = [
    { label: 'Copy', content: <CopyLink/>},
    { label: 'Embed', content: <Embed/>},
  ];
  
  const tabsData = [
    { label: 'Form', content: <Edit/>},
    { label: 'Responses', content:<Responses/> },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index: number) => {
      setActiveTab(index);
    };
  return (
    <div style={{ position: 'relative' }}>
      <PageHeader>
        <BackButton />
        <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translate( -50%)' }}>
            <TabContainer className='tab-content'>
                {tabsData.map((tab, index) => (
                <TabButton
                    key={index}
                    isActive={index === activeTab}
                    onClick={() => handleTabClick(index)}
                >
                    {tab.label}
                </TabButton>
                ))}
            </TabContainer>
        </div>
        <div className="page-header-right">
        <ExtendedButton color="#404040" backgroundColor="#FAFAFA" border="#FAFAFA" style={{padding:'10px'}} disabled>
            <img src={undo} alt="Preview Eye" />
          </ExtendedButton>
            <ExtendedButton color="#404040" backgroundColor="#FAFAFA" border="#FAFAFA" style={{padding:'10px'}} disabled>
                <img src={redo} alt="Preview Eye" />
            </ExtendedButton>
        <ExtendedButton color="#404040" backgroundColor="#FAFAFA" border="#FAFAFA" style={{padding:'10px'}}>
            <img src={settings} alt="Preview Eye" />
          </ExtendedButton>
          <Link to='/response-view'>
            <ExtendedButton color="#404040" backgroundColor="#FAFAFA" border="#FAFAFA" style={{padding:'10px'}}>
              <img src={eye} alt="Preview Eye" />
            </ExtendedButton>
          </Link>
          <ExtendedButton color="#404040" backgroundColor="#FAFAFA" border="#FAFAFA" onClick={()=> setIsModalOpen(!isModalOpen)}>
            <p>Share</p>
          </ExtendedButton>
          <ExtendedButton color="#EDF1FF">
            <p>Publish</p>
          </ExtendedButton>
        </div>
      </PageHeader>
      <div style={{ marginTop:'80px'}}>

      {tabsData[activeTab].content}
      </div>
      {
            isModalOpen &&
            <Modal title="Share link" closeModal={()=>setIsModalOpen(false)} buttonLabel="Copy link" onConfirm={()=>console.log()} isCanel={true}>
                <Tabs tabs={shareTabsdata}></Tabs>
            </Modal>
        }
    </div>
  );
};

export default Form;