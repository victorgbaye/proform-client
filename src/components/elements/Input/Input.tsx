import { CheckboxInput, CheckboxWrapper, CustomCheckbox, CustomRadioButton, CustomToggleWrapper, DefaultInput, Label, ToggleInput, ToggleSlider } from "./Input.styles";

type InputProps = {
    label: string,
    placeholder:string
}
export const Input = (props: InputProps) => {
    return (
        <div className='input-label'>  
        <Label>{props.label}</Label>
        <DefaultInput
        placeholder={props.placeholder}
        />
    </div>
  )
}

interface CustomSelectProps{
    // options: Option[];
    options: [];
    onChange: (value: string) => void;
    defaultValue?: string;
    placeholder?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = (
    // {
    //     options,
    //     onChange,
    //     defaultValue = '',
    //     placeholder = 'Select an option',
    //   }
) =>{

    return(
        <>
        </>
    )
}

type Checkbpxprop = {
    checked: boolean;
    onChange: () => void;
    placeholder:string
 }

export const Checkbox = (props: Checkbpxprop) => {
    return (
        <CheckboxWrapper>
        <CustomCheckbox type='checkbox'  checked={props.checked} onChange={props.onChange}/>
        <CheckboxInput placeholder={props.placeholder}></CheckboxInput>
      </CheckboxWrapper>
    );
  };

  export const Radio = (props: Checkbpxprop) => {
    return (
        <CheckboxWrapper>
        <CustomRadioButton type='checkbox'  checked={props.checked} onChange={props.onChange}/>
        <CheckboxInput placeholder={props.placeholder}></CheckboxInput>
      </CheckboxWrapper>
    );
  };

  export const CustomToggle = () => {
    return (
        <CustomToggleWrapper>
            <ToggleInput />
             <ToggleSlider />
      </CustomToggleWrapper>
    );
  };