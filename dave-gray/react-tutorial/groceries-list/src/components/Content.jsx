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
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input className="mr-5" type="checkbox" name="" id="" />
            <label htmlFor="">{item.item}</label>
            <button className="pl-5">Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
