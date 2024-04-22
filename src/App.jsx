import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  // CRUD operations
  const addItem = (name) => {
    const newItem = { id: items.length + 1, name };
    setItems([...items, newItem]);
  };

  const displayItems = items.map((item) => (
    <div key={item.id}>
      <span>{item.name}</span>
      <button onClick={() => updateItem(item.id)}>Edit</button>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  ));

  const updateItem = (id) => {
    const updatedName = prompt("Enter the new name:");
    if (updatedName) {
      const updatedItems = items.map((item) =>
        item.id === id ? { ...item, name: updatedName } : item
      );
      setItems(updatedItems);
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(e.target.itemName.value);
  };

  return (
    <div className="App">
      {displayItems}
      <form onSubmit={handleSubmit}>
        <input type="text" name="itemName" placeholder="Enter item name" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default App;
