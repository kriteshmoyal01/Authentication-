import React from 'react';
import './input.css';

// Use PascalCase for component name
const Input = ({ placeholder, required, onChange, value }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      required={required}
      className="ui_input"
    />
  );
};

export default Input;
