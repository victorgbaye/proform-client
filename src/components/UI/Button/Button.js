import React from 'react';
import styles from "./Button.module.scss";

const Button = ({ onClick, type, disabled, children, style }) => {
  return (
    <button 
    className={styles.Button}
    type={type} 
    onClick={onClick}
    disabled={disabled}
    style={style}
    >
      {children}
    </button>
  );
};

export default Button;
