import React, { memo } from 'react';
import { fixNames, padNumber } from '../../shared/utils';

const PokemonImage: React.FC<Props> = ({ id, name }: Props) => (
    <img
        src={`https://pokedex.magarcia.now.sh/pokemons/${padNumber(
            id,
            3
        )}-${fixNames(name)}.svg`}
        style={{ height: 200, width: 200 }}
        alt="pokemon"
    />
);

interface Props {
    id: number;
    name: string;
}

export default memo(PokemonImage);
