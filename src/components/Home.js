import React from 'react'
import avatar from '../images/avatar.png'
import tacoTuesday from '../images/taco-tuesday.svg'

export function Home() {
  return (
    <>
      <header>
        <ul>
          <li>Welcome back, Steve!</li>
          <li className="avatar">
            <img src={avatar} alt="Steve's Avatar" height="64" width="64" />
          </li>
        </ul>
      </header>
      <main>
        <h1>
          <img src={tacoTuesday} alt="Taco Tuesday" />
        </h1>
        <form className="search">
          <input type="text" placeholder="Search..." />
        </form>

        <section className="map">
          <iframe
            src="https://www.google.com/maps/embed"
            frameBorder="0"
            aria-hidden="false"
          ></iframe>
        </section>
        <ul>
          <li>
            <h2>Loli's Mexican Cravings</h2>
            <p>4.7 (2,188)</p>
            <p>8005 Benjamin Rd, Tampa, FL 33634</p>
          </li>
          <li>
            <h2>La Hacienda Mexicana</h2>
            <p>4.2 (245)</p>
            <p>5537 Sheldon Rs, Tampa, FL 33615</p>
          </li>
        </ul>
      </main>
      <footer>
        <p>Built with &hearts; in St Petersburg, Florida.</p>
      </footer>
    </>
  )
}
