const app = document.getElementById("app");

const Hello = () => {
  return <h1>Hello from React!</h1>;
};

const root = ReactDOM.createRoot(app);
root.render(<Hello />);
