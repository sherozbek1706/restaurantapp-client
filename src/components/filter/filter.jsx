import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/tools/filter.slice";
import "./filter.css";
export const Filter = () => {
  const [q, setQ] = useState("");

  const dispatch = useDispatch();

  const handleReset = () => {
    setQ("");
    handleSearch("");
  };

  const handleSearch = (xQ = null) => {
    dispatch(search(xQ ? q : ""));
  };

  return (
    <div className="Filter">
      <div className="Filter__down">
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="First name, Last name, Username, Phone Number ..."
        />
        <button onClick={handleSearch} className="Filter__search">
          Search
        </button>
        <button onClick={handleReset} className="Filter__reset">
          Reset
        </button>
      </div>
    </div>
  );
};
