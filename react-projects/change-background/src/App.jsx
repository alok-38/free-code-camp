import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body className='bg-indigo-500 flex-col'>
      <div className='logo'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='bg-cyan-500 text-white'>Vite + React</h1>
      <div className="card">
        <button className='mb-10 py-2 px-5 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs italic text-white	">
        Click on the Vite and React logos to learn more
      </p>
    </body>
  )
}

export default App
