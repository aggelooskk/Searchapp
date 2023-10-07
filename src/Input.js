import React, { useState } from "react";
import "./App.css";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const itemList = [
    { name: "Apple", price: "$1.99" },
    { name: "Banana", price: "$0.99" },
    { name: "Orange", price: "$1.49" },
    { name: "Strawberry", price: "$2.49" },
    { name: "Grapes", price: "$3.99" },
    { name: "Watermelon", price: "$4.99" },

    
  ];

  const handleInputChange = (event) => {
    const input = event.target.value;
    setInputValue(input);

    const filtered = itemList.filter((item) =>
      item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input value:", inputValue);

    const filtered = itemList.filter((item) =>
      item.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="Input">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          id="filter"
          name="filter"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>

      {inputValue === "" ? null : (
        <ul className="item-list">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
              </li>
            ))
          ) : (
            <li>No matching items found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Input;

