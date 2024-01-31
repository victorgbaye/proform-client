import { useState } from "react";
import { Wrapper } from "../../assets/wrappers/FormQuestion.styles"
import CustomSelect from "./CustomSelect"
import { Link, LongText, ShortText } from "./FormQuestionResponses"
interface QuestionProps {
    onQuestionTypeChange: (type: string) => void;
  }
  const inputComponents: Record<string, React.ReactElement> = {
    'Small text area': <ShortText/>,
    'Large text area': <LongText/>,
    'Link': <Link/>,
    // Add more question types as needed
  };
const FormQuestion: React.FC<QuestionProps> = ({ onQuestionTypeChange }) => {
    const [questionType, setQuestionType] = useState<string>('short-text');

    const handleQuestionTypeChange = (value: string) => {
      setQuestionType(value);
      onQuestionTypeChange(value);
    };
  
  return (
    <Wrapper>
        <input className="question" placeholder="Type text or question here"/>
        <section className="answer-type">
            <p className="answer-type-text">Answer type</p>
            <CustomSelect 
            options={[
                { value: 'Multi-select', label: 'Multi-select' },
                { value: 'Single choice select', label: 'Single choice select' },
                { value: 'Small text area', label: 'Small text area' },
                { value: 'Large text area', label: 'Large text area' },
                { value: 'Contact info', label: 'Contact info' },
                { value: 'Calendar', label: 'Calendar' },
                { value: 'Link', label: 'Link' },
                { value: 'Rating', label: 'Rating' },
                { value: 'File Upload', label: 'File Upload' },
                // Add more options as needed
            ]}
    
            onChange={handleQuestionTypeChange}/>

        </section>
         {inputComponents[questionType]}
    </Wrapper>
  )
}

export default FormQuestion