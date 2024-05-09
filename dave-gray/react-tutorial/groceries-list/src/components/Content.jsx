import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Content() {
  const defaultItems = [
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa covered Almond mix",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ];

  // Load items from local storage on initial render, or use default items
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    return storedItems || defaultItems;
  });

  // Save items to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleCheckboxChange = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleResetItems = () => {
    setItems(defaultItems);
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li
            className="flex items-center justify-between text-slate-600"
            key={item.id}
          >
            <input
              className="mr-5 w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-300"
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label htmlFor="" className={item.checked ? "line-through" : ""}>
              {item.item}
            </label>
            <FaTrashAlt
              className="ml-10 cursor-pointer text-red-500 transition duration-300 transform hover:scale-110 w-6 h-6"
              onClick={() => handleDeleteItem(item.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
