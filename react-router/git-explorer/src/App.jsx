import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
    </Routes>
  )
}

export default App
