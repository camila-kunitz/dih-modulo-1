import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Bem vindo ao site do DevInHouse - 4ª edição</h1>

      <section style={{ width: 600 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id vulputate augue, eu feugiat augue. Vestibulum lobortis tincidunt mauris vel gravida. Duis rutrum et quam posuere vulputate. Vivamus sollicitudin condimentum luctus. Phasellus ac tempus risus. Cras pellentesque mi at volutpat vehicula. Nullam sit amet scelerisque urna. Vestibulum dictum rutrum orci, sit amet congue metus fringilla at. Nunc dapibus metus dapibus, consequat nibh a, posuere diam.
      </section>

      <br />

      <footer>
        <Link to="/contato">Contato</Link>
      </footer>
    </div>
  )
}

export default Home;
