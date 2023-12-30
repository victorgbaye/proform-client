import React from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../../../assets/Back.svg'
const PreviousButton = () => {
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    navigate(-1); 
  };

  return (
    <>
    <img src={Back} onClick={()=>goToPreviousPage} alt='back button' style={{cursor:'pointer'}}/>
    </>

  );
};

export default PreviousButton;
