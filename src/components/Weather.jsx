import { useEffect, useState } from 'react'

export default function Weather() {
  const [w, setW] = useState(null)

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=25.77&longitude=-80.19&current=temperature_2m,wind_speed_10m')
      .then((r) => r.json())
      .then((d) => setW(d.current))
      .catch(() => setW(null))
  }, [])

  return (
    <div className="weather">
      <h3>Live in Miami (real-world inspiration)</h3>
      {w ? <p>🌡️ {w.temperature_2m}°C &nbsp; 💨 {w.wind_speed_10m} km/h</p> : <p>Loading…</p>}
    </div>
  )
}