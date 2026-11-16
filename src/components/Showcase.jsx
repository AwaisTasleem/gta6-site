import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './Modal'

export default function Showcase({ id, title, items }) {
  const [active, setActive] = useState(null)

  return (
    <section className="section" id={id}>
      <h2>{title}</h2>
      <div className="showcase">
        {items.map((it, i) => (
          <motion.button key={it.id} className="s-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -10, rotateZ: -1, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActive(it)}>
            <img src={it.img} alt={it.name} />
            <div className="s-info">
              <strong>{it.name}</strong>
              <small>{it.role || it.type}</small>
            </div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {active && <Modal item={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}