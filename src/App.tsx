import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contacts'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />
        <About />
        < Projects />
        < Contact />
      </main>
    </>
  )
}

export default App