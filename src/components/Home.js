import React from 'react'
import avatar from '../images/avatar.png'
export function Home() {
  return (
    <>
      <header>
        <ul>
          <li>
            <a href="/">Taco Tuesday</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
        </ul>
        <ul>
          <li>Welcome back, Steve!</li>
          <li>
            <img src={avatar} alt="Steve's Avatar" height="64" width="64" />
          </li>
        </ul>
      </header>
      <main>
        <h1>Taco Tuesday</h1>
        <form>
          <input type="text" placeholder="Search..." />
        </form>
        <div>MAP</div>
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
