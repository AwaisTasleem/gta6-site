import { useEffect } from 'react'
import { motion } from 'framer-motion'

function badgeFor(item) {
  if (item.official !== undefined) return item.official ? 'Official' : 'Fan Concept'
  if (item.region) return 'Location'
  if (item.type) return 'Fan Concept'
  return null
}

export default function Modal({ item, onClose, related = [], onSelect }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const badge = badgeFor(item)
  const subtitle = item.role || item.type || item.region
  const people = related.filter((r) => r.role)
  const rides = related.filter((r) => r.type)

  const Chips = ({ title, list }) =>
    list.length > 0 && (
      <div className="related">
        <h5>{title}</h5>
        <div className="chips">
          {list.map((r) => (
            <button key={r.id} className="chip" onClick={() => onSelect(r)}>
              <img src={r.img} alt="" />
              <span>{r.name}</span>
            </button>
          ))}
        </div>
      </div>
    )

  return (
    <motion.div className="overlay" onClick={onClose}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div key={item.id} className="modal" onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.85, y: 50, rotateX: 15 }}
        animate={{ scale: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.8, y: 60, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}>
        <button className="close" onClick={onClose} aria-label="Close">✕</button>
        <img src={item.img} alt={item.name} />
        <div className="modal-body">
          {badge && <span className={`badge ${badge === 'Official' ? 'official' : ''}`}>{badge}</span>}
          <h3>{item.name}</h3>
          <h4>{subtitle}</h4>
          {item.tagline && <p className="tagline">{item.tagline}</p>}
          <p>{item.bio}</p>

          {item.stats && (
            <div className="stats">
              {Object.entries(item.stats).map(([k, v]) => (
                <div key={k} className="stat">
                  <span>{k}</span>
                  <div className="bar">
                    <motion.div className="fill" initial={{ width: 0 }}
                      animate={{ width: `${v}%` }} transition={{ duration: 0.9, delay: 0.2 }} />
                  </div>
                  <b>{v}</b>
                </div>
              ))}
            </div>
          )}

          <dl className="facts">
            {item.facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>

          <Chips title="Characters here" list={people} />
          <Chips title="Vehicles here" list={rides} />

          {item.region && (
            <p className="note">
              Region names come from Rockstar’s map reveal. Descriptions and links to characters
              and vehicles are fan-written. See Rockstar’s official site for confirmed details.
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}