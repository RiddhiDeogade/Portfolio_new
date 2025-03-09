
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Cert from './components/Cert'
import Extras from './Extras'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Cert/>
        <Projects />
        <Extras/>
        <Contact />
        <Footer />
    </div>
  )
}

export default App
