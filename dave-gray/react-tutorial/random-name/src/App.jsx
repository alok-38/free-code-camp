import React, { useState } from "react";
import "./App.css";

function App() {
  const names = ["Bob", "Kevin", "Dave"];
  const [name, setName] = useState(
    names[Math.floor(Math.random() * names.length)]
  );

  const handleNameChange = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  };

  return (
    <div>
      <header>Hello {name}!</header>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
}

export default App;
