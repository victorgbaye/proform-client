import { PageHeader } from "../assets/wrappers/PageHeader.styles"
import chevronLeft from '../assets/images/chevronLeft.svg'
import { ExtendedButton } from "../components/elements/Button/Button.styles"
import shareW from '../assets/images/shareW.svg'
import eye from '../assets/images/eye.svg'
import FormQuestion from "../components/patterns/FormQuestion"
const Form = () => {
  return (
    <div>
        <PageHeader>
            <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                <img src={chevronLeft}/>
                <p>Back</p>
            </div>
            <div className="page-header-right">
                <ExtendedButton backgroundColor="none" color="#404040" border="none">
                    <img src={eye}/>
                    <p>Preview</p>
                </ExtendedButton>
                <ExtendedButton color="#EDF1FF">
                    <img src={shareW}/>
                    <p>Share</p>
                </ExtendedButton>
            </div>
        </PageHeader>
        <section>
            <FormQuestion/>
        </section>
    </div>
  )
}

export default Form