import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './pokemon.scss'
import PokemonCard from './PokemonCard'

function Pokemon() {

    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        
        const fetchItem = async () => {
            const result = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=104`)
            setPokemon(result.data.results)
            setLoading(false)
          }

        fetchItem()

    }, [])

    return (
        <div className="pokemon_container" >
            <h1>Pokemon api</h1>
           {
               loading === true ? 'Loading...' 
               :
               <div className="pokemon_grid">
                    {
                        pokemon && pokemon.map(item => (
                            <PokemonCard name={item.name} url={item.url} key={item.name} />
                        ))
                    }
                </div>
           }
        </div>
    )
}



export default Pokemon
