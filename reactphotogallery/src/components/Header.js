import React from "react";
import SearchKeyword from "./components/searchKeyword";

const Header = ({ searchKeyword, handleSearchChange, searchByValue }) => {
  return (
    <header>
      <SearchKeyword
        value={searchKeyword}
        onChange={handleSearchChange}
        onSearch={searchByValue}
      />
      <button disabled={!searchKeyword} onClick={searchByValue}>
        Search
      </button>
    </header>
  );
};

export default Header;
