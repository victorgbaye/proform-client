import { useState } from "react"
import { LinkResponse, LongTextResponse, MultiChoiceResponse, ShortTextResponse } from "../../assets/wrappers/FormQuestionResponses.styles"
import { Checkbox, Radio } from "../elements/Input/Input"

export const Link = () =>{
    return(
        <LinkResponse placeholder="User will paste link here" readOnly></LinkResponse>
    )
}

export const LongText = () =>{
    return(
        <LongTextResponse placeholder="User will type answer here" readOnly></LongTextResponse>
    )
}

export const ShortText = () =>{
    return(
        <ShortTextResponse placeholder="User will type answer here" readOnly></ShortTextResponse>
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