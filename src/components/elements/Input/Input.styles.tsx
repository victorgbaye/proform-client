import styled from 'styled-components'
import check from '../../../assets/images/check.svg'
import radio from '../../../assets/images/radio.svg'


export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
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
    background-color: #FDF3FF;
    border-color: #7C2C89;
    
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