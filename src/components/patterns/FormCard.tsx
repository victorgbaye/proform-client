import { Wrapper } from "../../assets/wrappers/FormCard.styles"
import ellipsis from '../../assets/images/ellipsis.svg'

const FormCard = () => {
  return (
    <Wrapper>
        <div className="form-card-thumbnail">

        </div>
        <div className="form-card-details-container">
            <div className="form-card-details">
                <p className="form-card-title">Document Name</p>
                <p className="form-card-description">Document long description</p>
            </div>
            <img src={ellipsis}/>
        </div>
    </Wrapper>
  )
}

export default FormCard