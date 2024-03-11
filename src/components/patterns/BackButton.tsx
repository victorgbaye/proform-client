// src/components/BackButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import chevronLeft from '../../assets/images/chevronLeft.svg'



const BackButton: React.FC = () => {
    const navigate = useNavigate();


  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <div onClick={handleGoBack} style={{display:'flex', alignItems:'center', gap:'8px', cursor:'pointer'}}>
        <img src={chevronLeft}/>
        <p style={{fontSize:'14px'}}>Back</p>
    </div>
  );
};

export default BackButton;
