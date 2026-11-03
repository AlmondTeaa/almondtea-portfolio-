import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App