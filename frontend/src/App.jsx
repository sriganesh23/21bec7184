import React, { useState } from 'react';
import HandlingInput from './components/HandlingInput';
import FilterSelect from './components/FilterSelect';
import ResponseDisplay from './components/ResponseDisplay';
import axios from 'axios';

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Numbers', 'Alphabets', 'Highest lowercase alphabet'];

  const handleJsonSubmit = async (jsonData) => {
    try {
      const res = await axios.post('http://localhost:3000/bfhl', jsonData);
      setResponse(res.data);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Roll Number</h1>
      <HandlingInput onSubmit={handleJsonSubmit} />
      {response && (
        <>
          <FilterSelect
            options={options}
            selectedOptions={selectedOptions}
            onChange={setSelectedOptions}
          />
          <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;
