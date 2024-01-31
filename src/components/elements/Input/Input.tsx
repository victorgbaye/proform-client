import { CheckboxInput, CheckboxWrapper, CustomCheckbox } from "./Input.styles";
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