import { useState } from "react";

function DynamicList() {
  const [items, setItems] = useState([]);

  const handleClick = () => {
    // Add a new item to the list
    setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;
