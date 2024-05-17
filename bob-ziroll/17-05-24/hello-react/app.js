const app = document.getElementById("app");

const Hello = () => {
  return (
    <div>
      <h1>Hello from React!</h1>
      <FavoriteThings />
    </div>
  );
};

const FavoriteThings = () => {
  return (
    <div>
		<h2>Things I love to do...</h2>
      <ul>
        <li>Drink Coffee</li>
        <li>Occasionally read books</li>
        <li>Code often</li>
        <li>Listen to music</li>
        <li>Workout regularly</li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(app);
root.render(<Hello />);
