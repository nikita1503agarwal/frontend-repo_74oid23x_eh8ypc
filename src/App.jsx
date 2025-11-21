import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Footer />
    </div>
  )
}

export default App
