import React from 'react';

const FilterSelect = ({ options, selectedOptions, onChange }) => {
  return (
    <div className="p-4">
      <label className="block font-bold mb-2">Select Filters:</label>
      <select
        multiple
        value={selectedOptions}
        onChange={(e) => {
          const selected = Array.from(e.target.selectedOptions).map((option) => option.value);
          onChange(selected);
        }}
        className="w-full p-2 border rounded"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
