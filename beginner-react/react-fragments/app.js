const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

// Define a functional component
const App = () => {
    return (
      // Use React fragment shorthand <>
      <>
        <h1>React<br />Fragments</h1>
        <p>This is a demonstration of React fragments.</p>
      </>
    );
};

root.render(<App />);