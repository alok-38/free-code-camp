import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  );
};

const App = () => {
  const name = 'Alok';
  const age = 39;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={39 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
