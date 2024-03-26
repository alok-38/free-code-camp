// Define a simple functional component
function Greeting() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to my first React app!</p>
      </div>
    );
  }
  
  // Use createRoot to render the Greeting component to the root element in the HTML
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Greeting />);
  