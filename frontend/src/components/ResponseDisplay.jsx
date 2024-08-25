import React from 'react';

const ResponseDisplay = ({ response, selectedOptions }) => {
  const { numbers, alphabets, highest_lowercase_alphabet } = response;

  return (
    <div className="p-4">
      {selectedOptions.includes('Numbers') && (
        <div>
          <h3 className="font-bold">Numbers:</h3>
          <p>{numbers.join(', ') || 'None'}</p>
        </div>
      )}
      {selectedOptions.includes('Alphabets') && (
        <div>
          <h3 className="font-bold">Alphabets:</h3>
          <p>{alphabets.join(', ') || 'None'}</p>
        </div>
      )}
      {selectedOptions.includes('Highest lowercase alphabet') && (
        <div>
          <h3 className="font-bold">Highest lowercase alphabet:</h3>
          <p>{highest_lowercase_alphabet.join(', ') || 'None'}</p>
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;
