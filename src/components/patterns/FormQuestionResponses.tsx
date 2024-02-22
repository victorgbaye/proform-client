import { FC, useState } from "react"
import { LinkResponse, LongTextResponse, MultiChoiceResponse, RatingResponse, ShortTextResponse } from "../../assets/wrappers/FormQuestionResponses.styles"
import { Checkbox, Radio } from "../elements/Input/Input"
import starFill from '../../assets/images/starFill.svg'
import starOutline from '../../assets/images/starOutline.svg'

interface LinkProps {
  editMode: boolean; // Explicitly typing the editMode prop as boolean
}
export const Link: FC<LinkProps> = ({editMode}) =>{
    return(
        <LinkResponse placeholder="https://www.example.com" readOnly={editMode} editMode={editMode}></LinkResponse>
    )
}

interface LongTextProps {
  editMode: boolean; // Explicitly typing the editMode prop as boolean
}

export const LongText: FC<LongTextProps> = ({editMode}) =>{
    return(
        <LongTextResponse placeholder="User will type answer here" readOnly={editMode} editMode={editMode}></LongTextResponse>
    )
}

interface ShortTextProps {
  editMode: boolean; // Explicitly typing the editMode prop as boolean
}
export const ShortText: FC<ShortTextProps> = ({editMode}) =>{
    return(
        <ShortTextResponse placeholder="User will type answer here" editMode={editMode} readOnly={editMode}></ShortTextResponse>
    )
}

// MULTI-CHOICE
export const MultiChoice = () =>{
    const [checkedOptions, setCheckedOptions] = useState<Array<number>>([]);
    const handleCheckboxChange = (index: number) => {
        const updatedCheckedOptions = [...checkedOptions];
        const indexOfOption = updatedCheckedOptions.indexOf(index);
    
        if (indexOfOption === -1) {
          // If not already checked, add to the array
          updatedCheckedOptions.push(index);
        } else {
          // If already checked, remove from the array
          updatedCheckedOptions.splice(indexOfOption, 1);
        }
    
        setCheckedOptions(updatedCheckedOptions);
        console.log('log log');
      };

    return(
        <MultiChoiceResponse>
            
            <Checkbox
                checked={checkedOptions.includes(0)}
                onChange={() => handleCheckboxChange(0)}
                placeholder='Type answer here'
            />
            <Checkbox
                checked={checkedOptions.includes(1)}
                onChange={() => handleCheckboxChange(1)}
                placeholder='Type answer here'
            />
            <Checkbox
                checked={checkedOptions.includes(2)}
                onChange={() => handleCheckboxChange(2)}
                placeholder='Type answer here'
            />
        </MultiChoiceResponse>
    )
}

export const SingleChoice = () =>{
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleRadioChange = (index: number) => {
      setSelectedOption(index);
      console.log('log log');
    };
    return(
        <MultiChoiceResponse>
            <Radio checked={selectedOption === 0} onChange={()=>handleRadioChange(0)} placeholder='Type answer here'/>
            <Radio checked={selectedOption === 1} onChange={()=>handleRadioChange(1)} placeholder='Type answer here'/>
            <Radio checked={selectedOption === 2} onChange={()=>handleRadioChange(2)} placeholder='Type answer here'/>
        </MultiChoiceResponse>
    )
}

export const Rating = () => {
    const [rating, setRating] = useState(0);
  
    const handleClick = (value: number) => {
      setRating(value);
    };
  
    return (
      <RatingResponse>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
  
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleClick(ratingValue)}
              />
              <img src={ratingValue <= rating ? starFill : starOutline}/>
              {/* <FaStar
                color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                size={25}
              /> */}
            </label>
          );
        })}
      </RatingResponse>
    );
  };