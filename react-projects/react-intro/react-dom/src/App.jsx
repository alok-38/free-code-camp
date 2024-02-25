import React, { useState } from 'react';

// Greeting component
function Greeting() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <GreetingMessage name="from React" />
      <Counter count={count} />
      <CounterControls onIncrement={incrementCount} />
    </div>
  );
}

// Greeting message component
function GreetingMessage({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Counter component
function Counter({ count }) {
  return <p>Current count: {count}</p>;
}

// Counter controls component
function CounterControls({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Count</button>;
}

export default Greeting