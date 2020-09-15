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
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14121.786063335707!2d-82.65914559999999!3d27.765212799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1600188930311!5m2!1sen!2sus"
            width="600"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
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
