import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />
      </main>
    </>
  )
}

export default App