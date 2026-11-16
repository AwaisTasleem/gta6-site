import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import TiltCard from './TiltCard'
import Modal from './Modal'
import { places, characters, vehicles } from '../data'

export default function Gallery() {
  const [active, setActive] = useState(null)

  // Find characters/vehicles linked to the open place
  const related = active?.region
    ? [
        ...(active.characters || []).map((id) => characters.find((c) => c.id === id)),
        ...(active.vehicles || []).map((id) => vehicles.find((v) => v.id === id)),
      ].filter(Boolean)
    : []

  return (
    <section className="section" id="gallery">
      <h2>Places</h2>
      <p className="hint">Click a place to see who and what you’ll find there.</p>
      <div className="grid">
        {places.map((p) => (
          <TiltCard key={p.id} src={p.img} title={p.name} onClick={() => setActive(p)} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        {active && (
          <Modal key={active.id} item={active} related={related}
            onSelect={setActive} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}