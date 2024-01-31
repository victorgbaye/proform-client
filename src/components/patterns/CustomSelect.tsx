// CustomSelect.tsx
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
}

const StyledSelect = styled.div`
  position: relative;
  width: 200px;
`;

const SelectButton = styled.button`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    text-align: left;
    cursor: pointer;
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    color: var(--Cod-Gray-Secondary-Text, #404040);
    font-family: 'Quicksand';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 157.143% */
    letter-spacing: 0.5px;
`;

const OptionList = styled.ul<{ isOpen: boolean }>`
    position: absolute;
    z-index: 1;
    width: 200px;
    padding: var(--XS, 8px);
    margin: 0;
    margin-top: 4px;
    list-style: none;
    border: 1px solid #ccc;
    background-color: #fff;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid red;
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    background: var(--Neutral-Base, #FFF);
    box-shadow: -2px 2px 12.1px 0px rgba(0, 0, 0, 0.05);
`;


const OptionItem = styled.li`
    padding: 8px;
    cursor: pointer;
    width: 100%;
    color: var(--Cod-Gray-Secondary-Text, #404040);
    font-family: 'Quicksand';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 157.143% */
    letter-spacing: 0.5px;

  &:hover {
    border-radius: var(--XXS, 4px);
    background: var(--Base-2-Highlight, #EDF1FF);
  }
`;

// ... (other imports and styles)

const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    onChange,
    defaultValue = '',
    placeholder = 'Select an option',
  }) => {
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
        const handleOutsideClick = (event: Event) => {
          if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        };
      
        window.addEventListener('mousedown', handleOutsideClick);
      
        return () => {
          window.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);
      
  
    const handleSelectClick = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (value: string) => {
        setIsOpen(false); // Close the OptionList when an option is selected
      setSelectedValue(value);
      onChange(value);
      
    };
  
    return (
      <StyledSelect ref={selectRef}>
        <SelectButton onClick={handleSelectClick}>
          {selectedValue ? selectedValue : placeholder}
        </SelectButton>
        <OptionList isOpen={isOpen}>
          {options.map((option) => (
            <OptionItem key={option.value} onClick={() => handleOptionClick(option.value)}>
              {option.label}
            </OptionItem>
          ))}
        </OptionList>
      </StyledSelect>
    );
  };
  
  export default CustomSelect;
  