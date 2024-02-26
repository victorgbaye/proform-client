import { CheckboxInput, CheckboxWrapper, CustomCheckbox, CustomRadioButton, CustomToggleWrapper, DefaultInput, Label, ResponseCheckboxInput, ToggleInput, ToggleSlider } from "./Input.styles";

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
    checked?: boolean;
    onChange?: () => void;
    placeholder?:string
    value?:string
 }


 

 type ResponseCheckbpxprop = {
  checked?: boolean | undefined;
  value:string
}
export const Checkbox = (props: Checkbpxprop) => {
    return (
        <CheckboxWrapper>
        <CustomCheckbox type='checkbox'  checked={props.checked} onChange={props.onChange}/>
        <CheckboxInput placeholder={props.placeholder}></CheckboxInput>
      </CheckboxWrapper>
    );
  };


  export const ResponseCheckbox = (props: ResponseCheckbpxprop) => {
    return (
        <CheckboxWrapper>
        <CustomCheckbox type='checkbox'  checked={props.checked}/>
        <ResponseCheckboxInput value={props.value}></ResponseCheckboxInput>
      </CheckboxWrapper>
    );
  };

  export const Radio = (props: Checkbpxprop) => {
    return (
        <CheckboxWrapper>
        <CustomRadioButton type='checkbox'  checked={props.checked} onChange={props.onChange}/>
        <CheckboxInput placeholder={props.placeholder} value={props.value}></CheckboxInput>
      </CheckboxWrapper>
    );
  }

  export const  ResponseRadio = (props: ResponseCheckbpxprop) => {
    return (
        <CheckboxWrapper>
        <CustomRadioButton type='checkbox'  checked={props.checked}/>
        <ResponseCheckboxInput value={props.value}></ResponseCheckboxInput>
      </CheckboxWrapper>
    );
  };
  export const  ViewRadio = (props: ResponseCheckbpxprop) => {
    return (
        <CheckboxWrapper>
        <CustomRadioButton type='checkbox'  checked={props.checked}/>
        <ResponseCheckboxInput value={props.value}></ResponseCheckboxInput>
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