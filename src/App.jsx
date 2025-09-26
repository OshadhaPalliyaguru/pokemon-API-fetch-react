import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  //const [count, setCount] = useState(0)

  const [ pokemon, setPokemon ] = useState([])


  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      .then(res => res.json())
      .then(data => {
        setPokemon(data.pokemon);

      });
  }, []);



  return (
    <>
      <div className="container">
        <div className="row">

          {pokemon.map((poke) => (
            <div className="card" style={{ "width": "18rem" }}>
              <img src={poke.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{poke.name}</h5>
                <p className="card-text">{poke.type}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default App
