import React from "react";

const SearchKeyword = ({ value, onChange }) => {
  const handleSearchChange = (event) => {
    onChange(event);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search a Photo..."
        value={value}
        onChange={handleSearchChange}
      />
      {}
    </div>
  );
};

export default SearchKeyword;
