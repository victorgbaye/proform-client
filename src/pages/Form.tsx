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
// import FormEnviroment from "./FormEnviroment";

const Form = () => {




  
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
        <ExtendedButton color="#404040" backgroundColor="#FAFAFA" border="#FAFAFA" style={{padding:'10px'}}>
            <img src={undo} alt="Preview Eye" />
          </ExtendedButton>
          <ExtendedButton color="#404040" backgroundColor="#FAFAFA" border="#FAFAFA" style={{padding:'10px'}}>
            <img src={redo} alt="Preview Eye" />
          </ExtendedButton>
        <ExtendedButton color="#404040" backgroundColor="#FAFAFA" border="#FAFAFA" style={{padding:'10px'}}>
            <img src={settings} alt="Preview Eye" />
          </ExtendedButton>
          <ExtendedButton color="#404040" backgroundColor="#FAFAFA" border="#FAFAFA" style={{padding:'10px'}}>
            <img src={eye} alt="Preview Eye" />
          </ExtendedButton>
          <ExtendedButton color="#404040" backgroundColor="#FAFAFA" border="#FAFAFA">
            <p>Share</p>
          </ExtendedButton>
          <ExtendedButton color="#EDF1FF">
            <p>Publish</p>
          </ExtendedButton>
        </div>
      </PageHeader>
      <div style={{ marginTop:'80px'}}>

      {/* <TabContent>{tabsData[activeTab].content}</TabContent> */}
      {tabsData[activeTab].content}
      </div>
    </div>
  );
};

export default Form;
