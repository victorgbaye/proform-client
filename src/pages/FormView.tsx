import { FormViewWrapper } from "../assets/wrappers/FormView.styles";
import { PageHeader } from "../assets/wrappers/PageHeader.styles";
import { Button } from "../components/elements/Button/Button.styles";
import { ResponseCheckbox, ResponseRadio } from "../components/elements/Input/Input";
import { Link, LongText, ShortText } from "../components/patterns/FormQuestionResponses";
// import BackButton from "../components/patterns/BackButton";
import { dummyFormData } from '../utils/ResponseData';

const FormView = () => {
    
  return (
    <>
      <PageHeader>
        {/* <BackButton /> */}
        <p>Powered by Proform</p>
        <Button>Submit</Button>
      </PageHeader>
      <>
        {dummyFormData.map((formDataItem) => (
          <FormViewWrapper key={formDataItem.title}>
            <header>
                <h6 className="form-title">{formDataItem.title}</h6>
                <p className="form-response">{formDataItem.response}</p>
            </header>
            {formDataItem.details.map((data) => (
              <div className="question-card" key={data.id}>
                <div className="question">{data.question}</div>
                <div className="question-response">
                  {/* Conditional rendering based on response type */}
                  {data.responseType === 'Single choice select' && data.options ? (
                    // Render radio buttons if response type is single choice select and options are defined
                    data.options.map((option) => (
                      <ResponseRadio key={option.id} value={option.text} checked={data.selectedOption?.id === option.id} />
                    ))
                  ) : data.responseType === 'Multi-select' && data.options ? (
                    // Render checkboxes if response type is multi-select and options are defined
                    data.options.map((option) => (
                      <ResponseCheckbox key={option.id} value={option.text} checked={data.selectedOptions?.some(selectedOption => selectedOption.id === option.id)} />
                    ))
                  ) : data.responseType === 'Large text area' ? (
                    // Render checkboxes if response type is multi-select and options are defined
                   <>
                   <LongText editMode={false}/>
                   </>
                  ):  data.responseType === 'Small text area' ? (
                    // Render checkboxes if response type is multi-select and options are defined
                   <>
                   <ShortText editMode={false}/>
                   </>
                  ):data.responseType === 'Link' ? (
                    // Render checkboxes if response type is multi-select and options are defined
                   <>
                   <Link editMode={false}/>
                   </>
                  ):
                  (
                    // Render response directly if response type is not single choice select or multi-select, or options are undefined
                    <div>{data.response}</div>
                  )}
                </div>
              </div>
            ))}
          </FormViewWrapper>
        ))}
      </>
    </>
  );
};

export default FormView;
