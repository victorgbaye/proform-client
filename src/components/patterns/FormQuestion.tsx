import React, { useState } from "react";
import { Wrapper } from "../../assets/wrappers/FormQuestion.styles";
import CustomSelect from "./CustomSelect";
import { Link, LongText, MultiChoice, Rating, ShortText, SingleChoice } from "./FormQuestionResponses";
import drag from '../../assets/images/drag.svg'
import cloneW from '../../assets/images/cloneW.svg'
import trashW from '../../assets/images/trashW.svg'
import { CustomToggle } from "../elements/Input/Input";
import { QuestionFooter } from "../../assets/wrappers/QuestionFooter.styles";


interface QuestionProps {
  id: number;
  onQuestionTypeChange: (id: number, type: string) => void;
  onDelete: (id: number) => void; 
  onClone: (id: number) => void; 

}

const inputComponents: Record<string, React.ReactElement> = {
  'Multi-select': <MultiChoice />,
  'Small text area': <ShortText />,
  'Large text area': <LongText />,
  'Link': <Link />,
  'Single choice select': <SingleChoice />,
  'Rating': <Rating />,

  // Add more question types as needed
};

const FormQuestion: React.FC<QuestionProps> = ({ id, onQuestionTypeChange, onDelete, onClone }) => {
  const [questionType, setQuestionType] = useState<string>('Small text area'); // Set the default value here

  const handleQuestionTypeChange = (value: string) => {
    setQuestionType(value);
    onQuestionTypeChange(id, value);
  };
  const handleDeleteClick = () => {
    onDelete(id);
  };
  const handleCloneClick = () => {
    onClone(id);
  };
  return (
    <div>

        <Wrapper draggable>
        <input className="question" placeholder="Type text or question here" />
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
            onChange={handleQuestionTypeChange}
            />
        </section>
        {inputComponents[questionType]}
        </Wrapper>
        <QuestionFooter>
            <div className="drag"><img src={drag}/></div>
            <div className="footer-right">
                <div className="items required">
                    <CustomToggle/>
                    <p>Required</p>
                </div>
                <div  className="items">
                    <img src={cloneW} onClick={handleCloneClick} style={{cursor:'pointer'}}/>
                </div>
                <div  className="items">
                    <img src={trashW} onClick={handleDeleteClick} style={{cursor:'pointer'}}/>
                </div>
            </div>
        </QuestionFooter>
    </div>
  );
};

export default FormQuestion;
