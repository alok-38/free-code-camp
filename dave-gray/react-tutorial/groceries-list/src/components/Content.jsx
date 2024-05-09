import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pund bag of Cocoa covered Almond mix",
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
  ]);

  const handleCheckboxChange = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="flex items-center justify-between text-slate-600" key={item.id}>
            <input
              className="mr-5 w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-300"
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label htmlFor="">{item.item}</label>
            <FaTrashAlt className="ml-10 cursor-pointer text-red-500 transition duration-300 transform hover:scale-110 w-6 h-6" />
          </li>
        ))}
      </ul>
    </main>
  );
}
