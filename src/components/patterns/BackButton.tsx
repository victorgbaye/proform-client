// src/components/BackButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import chevronLeft from '../../assets/images/chevronLeft.svg'

// import styled from 'styled-components';

// const Button = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
//   border: none;
//   border-radius: 5px;
// `;

const BackButton: React.FC = () => {
    const navigate = useNavigate();


  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <div onClick={handleGoBack} style={{display:'flex', alignItems:'center', gap:'8px', cursor:'pointer'}}>
        <img src={chevronLeft}/>
        <p>Back</p>
    </div>
  );
};

export default BackButton;
