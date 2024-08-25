import React, { useState } from 'react';

const HandlingInput = ({ onSubmit }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedJson = JSON.parse(jsonInput);
      if (parsedJson && parsedJson.data) {
        setError('');
        onSubmit(parsedJson);
      } else {
        setError('Invalid JSON format');
      }
    } catch (e) {
      setError('Invalid JSON format');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Enter JSON data here...'
        className="w-full p-2 border rounded"
        rows="5"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default HandlingInput;
