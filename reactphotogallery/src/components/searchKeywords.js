import React from "react";

const SearchKeywords = ({ value, onChange, onSearch }) => {
  const handleSearchChange = (event) => {
    onChange(event);
    onSearch();
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

export default SearchKeywords;
