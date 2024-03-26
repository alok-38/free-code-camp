// Define a simple functional component
function MyInfo() {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-7xl">
      <h1 className="text-3xl font-bold underline mb-3">Alokananda Y</h1>
      <p className="leading-loose mb-5">Welcome to my first React app!</p>
      <p className="mb-5">Here are some places I would like to visit:</p>
      <ol className="list-none leading-10">
        <li>India</li>
        <li>USA</li>
        <li>UK</li>
      </ol>
    </div>
  );
}

// Use createRoot to render the Greeting component to the root element in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyInfo />);
