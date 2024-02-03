import { PageHeader } from "../assets/wrappers/PageHeader.styles";
import { ExtendedButton } from "../components/elements/Button/Button.styles";
import eye from '../assets/images/eye.svg';
import settings from '../assets/images/settings.svg';
import undo from '../assets/images/undo.svg';
import redo from '../assets/images/redo.svg';

import BackButton from "../components/patterns/BackButton";
import Tabs from "../components/patterns/Tabs";
// import Form from "./Form";

const FormEnviroment = () => {
  const tabsData = [
    { label: 'Form', content: <p>hello</p>},
    { label: 'Responses', content:<p>hello</p> },
    { label: 'Dashboard', content: <p>hello</p> },
  ];

  return (
    <div style={{ position: 'relative' }}>
      <PageHeader>
        <BackButton />
        <div style={{position: 'absolute', bottom: '0', left: '50%', transform: 'translate( -50%)'}}>
        <Tabs tabs={tabsData} />
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
      <section>
      </section>
    </div>
  );
};

export default FormEnviroment;
