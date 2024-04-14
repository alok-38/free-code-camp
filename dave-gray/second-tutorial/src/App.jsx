import Header from './components/Header'
import Groceries from './components/Groceries'
import Footer from './components/Footer'

function App() {

  return (
      <div className='flex flex-col items-center'>
        <Header />        
        <Groceries />
        <Footer />
      </div>
  )
}

export default App
