import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogameName } from "../../redux/actions";
import "./Searchbar.css";

const Searchbar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getVideogameName(search));
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </div>
    </>
  );
};

export default Searchbar;
