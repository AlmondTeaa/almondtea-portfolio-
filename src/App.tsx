import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />
        <About />
        < Projects />
      </main>
    </>
  )
}

export default App