import React, { useState } from 'react';

const App = () => {
  // Initialize state to hold the current date
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to update the current date when the button is clicked
  const updateDate = () => {
    setCurrentDate(new Date());
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>The current date and time is: {currentDate.toString()}</p>
      {/* Button to update the date */}
      <button onClick={updateDate}>Update Date</button>
    </div>
  );
};

export default App;
