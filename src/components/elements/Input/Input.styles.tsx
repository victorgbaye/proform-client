import styled from 'styled-components'
import check from '../../../assets/images/check.svg'
import radio from '../../../assets/images/radio.svg'





export const DefaultInput = styled.input`
    display: flex;
    width: 100%;
    min-width: 400px;
    height: 40px;
    padding: var(--XS, 8px) var(--SM, 16px);
    align-items: center;
    gap: var(--XS, 8px);
    align-self: stretch;
    border-radius: var(--XS, 8px);
    border: 1px solid #F8F8F8;
    background: #F8F8F8;
    outline: none;
    font-size: 14px;


    ::placeholder{
        color: var(--Grey-001, #A6A6A6);
        font-family: 'Quicksand';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 22.4px */
    }
`;

export const Label = styled.label`
    color: var(--greys-primary-800, #383838);
    /* Button & Label/Caption */
    font-family: "Quicksand";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    letter-spacing: 0.204px;
    /* text-transform: uppercase; */
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  /* cursor: pointer; */
  user-select: none;
`;

export const CustomCheckbox = styled.input`
 appearance: none;
  width: 16px;
  height: 16px;
  /* margin-right: 8px; */
  border: 1px solid #E3E3E3;
  border-radius: 4px;
  outline: none;

  &:checked {
    background-color: #5D55F7;
    border-color: #5D55F7;
    cursor: pointer;

    
  }

  &::after {
    content: '';
    background-image: url(${check});
    background-size: cover; 
    background-position: center;
    display: inline-block;
    width: 14px; 
    height: 14px;
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:checked::after {
    visibility: visible;
  }
`;

export const CheckboxInput = styled.input`
    display: flex;
    height: var(--LG, 24px);
    padding: 0px var(--XS, 8px);
    align-items: center;
    gap: 10px;
    border-radius: var(--XXS, 4px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    background: var(--Cod-Gray-Surface, #FAFAFA);
    margin-left: 8px; /* Adjust spacing as needed */

`;
export const ResponseCheckboxInput = styled(CheckboxInput)`
    display: flex;
    height: fit-content;
    padding: 0px var(--XS, 8px);
    align-items: center;
    gap: 10px;
    border: none;
    background: none;
    margin-left: 8px; /* Adjust spacing as needed */
    color: var(--Text-Secondary-Text, #404040);

    /* Body/4aims.type.body.s */
    font-family: 'Quicksand';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;

`;




export const CustomRadioButton = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #E3E3E3;
  border-radius: 50%;
  outline: none;

  &:checked {
    background-color: #FDF3FF;
    border-color: #7C2C89;
    cursor: pointer;
  }

  &:checked::after {
    content: '';
    background-image: url(${radio});
    background-size: cover;
    background-position: center;
    display: inline-block;
    width: 14px;
    height: 14px;
    visibility: visible;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;



export const CustomToggleWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
`;

export const ToggleInput = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 15px;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 11px;
    width: 11px;
    left: 4px;
    right: 4px;
    bottom: 5px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  ${ToggleInput}:checked + & {
    background-color: #5D55F7;
  }

  ${ToggleInput}:checked + &:before {
    transform: translateX(16px);
  }
`;
