import './App.css';
import HandleNameChange from "./components/HandleNameChange";

export default function App() {
  return (
    <div>
    <p className='flex gap-2 justify-center'>Hello!
      <HandleNameChange /> {/* Corrected: Use HandleNameChange component */}
      </p>
    </div>
  );
}
