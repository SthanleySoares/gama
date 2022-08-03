import React, { useState, useEffect } from 'react';
import PokeCard from '../../components/Cardmon'
import API from '../../Service/api';

type PokeObjType = {
  id: number,
  sprites: {
    front_default: string,
    back_default: string,
  },
  name: string,
  base_experience: number,
}

function Home() {
  const [pokemons, setPokemons] = useState([] as PokeObjType | any) 

  const pokemonGet = async () => {
    for (let i = 1; i <= 20; i++) {
      try {
        const response = await API.get(`/${i}`)
        setPokemons((pokemons: PokeObjType | any) => [...pokemons, response.data]);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    pokemonGet();
  }, [])

  return (
    pokemons.length > 0 && pokemons.map(
      (pokemon: PokeObjType, i: number) => (
        <PokeCard
          base_experience={pokemon.base_experience}
          name={pokemon.name}
          id={pokemon.id}
          key={i}
          sprites={pokemon.sprites}
        />
      )
    )
  );
}

export default Home;
