import React from 'react';

const Select = ({ label, value, onChange, optionsList }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {optionsList.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
