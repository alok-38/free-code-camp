// Define a simple functional component
function UnorderedList() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ul>
      </div>
    );
  }
  
  // Use createRoot to render the Greeting component to the root element in the HTML
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<UnorderedList />);
  