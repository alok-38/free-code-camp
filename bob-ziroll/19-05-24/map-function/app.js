const app = document.getElementById("app");
const nums = [1, 2, 3, 4, 5];
const squared = nums.map((num) => num * num);

function SquaredList({ numbers }) {
  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<SquaredList numbers={squared} />);
