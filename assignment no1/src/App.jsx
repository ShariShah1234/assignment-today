import React from 'react';
import './App.css'; 

import Input from './Input';
import Button from './Button';
import Select from './Select';
import Table from './Table';
import Card from './Card';

const App = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  const handleInputChange = (event) => {
    console.log('Input value:', event.target.value);
  };

  const handleSelectChange = (event) => {
    console.log('Selected option:', event.target.value);
  };

  const tableData = [
    {
      id: 1,
      userName: 'John Doe',
      age: 25,
      institute: 'ABC University',
      isActive: true,
      category: 'Student',
    },
    
  ];

  return (
    <div className="App">
      <h1>React Components Example</h1>
      <Input
        value=""
        onChange={handleInputChange}
        type="text"
      />

      <Button
        label="Click Me"
        onClick={handleButtonClick}
      />

      <Select
        label="Select Option"
        value=""
        onChange={handleSelectChange}
        optionsList={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ]}
      />

      <Table data={tableData} />

      <Card
        id={1}
        userName="John Doe"
        age={25}
        institute="ABC University"
        isActive={true}
        category="Student"
      />
    </div>
  );
}

export default App;
