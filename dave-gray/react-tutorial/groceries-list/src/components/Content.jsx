import { useState } from "react";

export default function Content() {
  const [currentName, setCurrentName] = useState("John");
  const names = [
    "John",
    "Emma",
    "Michael",
    "Sophia",
    "William",
    "Olivia",
    "James",
    "Ava",
    "Alexander",
    "Mia",
  ]; // Array of names

  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    setCurrentName(randomName);
  };

  return (
    <div>
      <h1>Current Name: {currentName}</h1>
      <button onClick={generateRandomName}>Generate Random Name</button>
    </div>
  );
}
