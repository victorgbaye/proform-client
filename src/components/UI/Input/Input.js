import * as React from 'react';
import styles from "./Input.module.scss";


import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



export const Input = ({ type, placeholder, label, name, value, onChange, ...rest }) =>{
    return(
<div className={styles.InputContainer}>
      <label htmlFor={name} className={styles.InputLabel}>{label}</label>
      <input
        autoComplete='false'
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
    )
}


export const DropdownInput = ({ label, options, value, onChange, style }) =>{
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return(
        <>
                {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
                <FormControl fullWidth variant="outlined" size="small"   style={style}>
      <InputLabel>{label}</InputLabel>
      <Select 
      label={label} 
      value={value} 
      onChange={onChange}
      sx={{ 
        fontSize: 14, 
        padding: '0', 
        height:'42px',
        '&.MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#4040F2', // Change the outline color here
            },
          },
     }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}  sx={{ fontSize: 12, paddingY: 1 }}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
        </>
    )
}