import { useEffect, useState } from 'react'

// ⚠️ Verify the official release date on Rockstar's site and update this.
const RELEASE = new Date('2026-11-19T00:00:00')

const calc = () => {
  const diff = Math.max(0, RELEASE - new Date())
  return {
    Days: Math.floor(diff / 86400000),
    Hours: Math.floor(diff / 3600000) % 24,
    Minutes: Math.floor(diff / 60000) % 60,
    Seconds: Math.floor(diff / 1000) % 60,
  }
}

export default function Countdown() {
  const [t, setT] = useState(calc())
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="countdown">
      {Object.entries(t).map(([label, v]) => (
        <div key={label} className="time-box">
          <strong>{String(v).padStart(2, '0')}</strong>
          <small>{label}</small>
        </div>
      ))}
    </div>
  )
}