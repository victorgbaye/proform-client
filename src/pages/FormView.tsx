import { FormViewWrapper } from "../assets/wrappers/FormView.styles"
import {dummyFormData} from '../utils/ResponseData'
const FormView = () => {
  return (
    <FormViewWrapper>
            {
                dummyFormData.map((data)=>{
                    return(
                        <div className="question-card">
                            <div className="question">{data.question}</div>
                            <div className="question-response">
                               {data.response}
                            </div>

                        </div>
                    )
                })
            }

    </FormViewWrapper>
  )
}

export default FormView