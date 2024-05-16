// Define a simple functional component
const SimpleComponent = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a simple JSX element.</p>
    </div>
  );
};

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<SimpleComponent />);
