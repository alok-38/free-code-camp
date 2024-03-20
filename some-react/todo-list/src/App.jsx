import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]); // 1. Create a state variable to store the todos
  const [inputValue, setInputValue] = useState(''); // 2. Create a state variable to store the input value

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // 3. Update the input value state variable
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]); // 4. Add the input value to the todos state variable
      setInputValue(''); // 5. Reset the input value state variable
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
