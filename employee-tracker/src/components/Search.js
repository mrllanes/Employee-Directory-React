import React from "react";

export const SearchField = ({ handleChange, value }) => (
    <div className="form-row">
        <label htmlFor="search">Search for a Specific Employee</label>
        <input
            className="form-control"
            name="search"
            id="search"
            onChange={handleChange}
            value={value}
        />
    </div>
);
