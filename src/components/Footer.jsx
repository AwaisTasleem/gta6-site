export default function Footer() {
  return (
    <footer className="footer">
      <div className="f-grid">
        <div>
          <h3>GTA <span>VI</span> Fan Site</h3>
          <p>A fan-made 3D experience built with React, Three.js and Framer Motion.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="#top">Home</a>
          <a href="#countdown">Countdown</a>
          <a href="#characters">Characters</a>
          <a href="#vehicles">Vehicles</a>
          <a href="#gallery">Gallery</a>
        </div>
        <div>
          <h4>Official</h4>
          <a href="https://www.rockstargames.com/VI" target="_blank" rel="noreferrer">Rockstar Games: GTA VI</a>
          <a href="https://www.rockstargames.com/newswire" target="_blank" rel="noreferrer">Rockstar Newswire</a>
        </div>
      </div>
      <p className="legal">
        Unofficial fan project, not affiliated with Rockstar Games or Take-Two Interactive.
        Grand Theft Auto is a trademark of Take-Two Interactive Software, Inc.
        Fan Concept characters and vehicles are original creations.
        <br />© {new Date().getFullYear()} Fan project. Non-commercial.
      </p>
    </footer>
  )
}