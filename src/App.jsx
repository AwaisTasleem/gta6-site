import { motion } from 'framer-motion'
import Scene from './components/Scene'
import Countdown from './components/Countdown'
import Weather from './components/Weather'
import Showcase from './components/Showcase'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { characters, vehicles } from './data'
import './index.css'

export default function App() {
  return (
    <>
      <nav className="nav">
        <a href="#top"><b>GTA <span>VI</span></b></a>
        <div>
          <a href="#countdown">Countdown</a>
          <a href="#characters">Characters</a>
          <a href="#vehicles">Vehicles</a>
          <a href="#gallery">Places</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="canvas-wrap"><Scene /></div>
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>GRAND THEFT AUTO <span>VI</span></h1>
          <p>Fan-made 3D experience</p>
        </motion.div>
      </section>

      <section className="section" id="countdown">
        <h2>Countdown</h2>
        <Countdown />
        <Weather />
      </section>

      <Showcase id="characters" title="Characters" items={characters} />
      <Showcase id="vehicles" title="Vehicles" items={vehicles} />

      <Gallery />

      <Footer />
    </>
  )
}