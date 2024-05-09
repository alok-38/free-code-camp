import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
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

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  return (
    <main>
      {items.length ? (
        <div>
          <ul className="flex flex-col space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center hover:bg-gray-100 transition duration-300"
              >
                <input
                  type="checkbox"
                  onChange={() => handleCheck(item.id)}
                  checked={item.checked}
                  className="mr-2 cursor-pointer"
                />
                <label
                  className={item.checked ? "line-through" : ""}
                  onDoubleClick={() => handleCheck(item.id)}
                >
                  {item.item}
                </label>
                <div className="ml-auto">
                  <FaTrashAlt
                    onClick={() => handleDelete(item.id)}
                    role="button"
                    tabIndex="0"
                    className="cursor-pointer transition duration-300 hover:text-red-600"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
}
