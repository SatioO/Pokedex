import React, { memo } from 'react';
import { IPokemon } from '../../types';
import PokemonImage from '../PokemonImage';

const ListItem: React.FC<IPokemon> = pokemon => {
    return (
        <div
            className="pokemoncard has-text-centered"
            style={pokemon.featured ? { backgroundColor: '#f9a825' } : {}}
        >
            <div className="pokemoncard-image">
                <PokemonImage id={pokemon.index + 1} name={pokemon.name} />
            </div>
            <div className="pokemoncard-content">
                <h4 className="title is-capitalized">
                    {pokemon.name} {`#${pokemon.index + 1}`}
                </h4>
            </div>
        </div>
    );
};

export default memo(ListItem);
