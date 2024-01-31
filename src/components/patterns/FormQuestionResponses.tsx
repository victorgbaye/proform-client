import { LinkResponse, LongTextResponse, MultiChoiceResponse, ShortTextResponse } from "../../assets/wrappers/FormQuestionResponses.styles"
import { Checkbox } from "../elements/Input/Input"

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
    return(
        <MultiChoiceResponse>
            <Checkbox checked={true} onChange={()=>console.log('log log')} placeholder='Type answer here'/>
            <Checkbox checked={true} onChange={()=>console.log('log log')} placeholder='Type answer here'/>
            <Checkbox checked={true} onChange={()=>console.log('log log')} placeholder='Type answer here'/>
        </MultiChoiceResponse>
    )
}