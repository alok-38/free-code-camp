import React, { useState } from 'react';
import './App.css';

const Greeting = ({ name, age }) => (
  <div>
    <p>
      Hello {name}, you are {age} years old.
    </p>
  </div>
);

const GreetingForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || isNaN(age) || age <= 0) {
      alert('Please enter a valid name and age.');
      return;
    }
    onSubmit({ name, age: parseInt(age) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => {
  const [greetingData, setGreetingData] = useState(null);

  return (
    <div>
      <h1>Greetings</h1>
      {greetingData ? (
        <Greeting {...greetingData} />
      ) : (
        <GreetingForm onSubmit={setGreetingData} />
      )}
    </div>
  );
};

export default App;
