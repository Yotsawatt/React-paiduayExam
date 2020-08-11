import React from 'react'

function PokemonCard({name,url}) {

    const id = url.split('/')[6]
    const urlimage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <div className="card_container">
            <img src={urlimage} alt="" />
            <h1>{name}</h1>
        </div>
    )
}

export default PokemonCard
