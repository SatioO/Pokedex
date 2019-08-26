import {
    LOAD_POKEMONS,
    LOAD_POKEMONS_REQUEST,
    LOAD_POKEMONS_FAILURE,
    SEARCH_POKEMONS,
    IPokemonActionTypes,
} from './constant';
import { IPokemon } from '../../types';
import { getRandomNumber } from '../../shared/utils';

type PokemonState = {
    loading: boolean;
    loaded: boolean;
    pokemons: IPokemon[];
    cache: IPokemon[];
};

export const initialState: PokemonState = {
    loading: false,
    loaded: false,
    pokemons: [],
    cache: [],
};

function formPayload(data: IPokemon[]): IPokemon[] {
    return data.map((item, index) => ({
        ...item,
        index,
    }));
}

export function reducer(
    state: PokemonState,
    action: IPokemonActionTypes
): PokemonState {
    switch (action.type) {
        case LOAD_POKEMONS_REQUEST:
            return { ...state, loading: true };

        case LOAD_POKEMONS:
            let pokemons = formPayload(action.payload);
            const cachedPokemon = localStorage.getItem('pokemon') || '{}';
            const pokemon = JSON.parse(cachedPokemon);

            const currentDate = new Date();
            const cachedDate = new Date(pokemon.date || currentDate);

            if (!pokemon.date || cachedDate.getTime() < currentDate.getTime()) {
                const random = getRandomNumber(0, action.payload.length);
                const today = new Date();
                today.setDate(today.getDate() + 1);
                localStorage.setItem(
                    'pokemon',
                    JSON.stringify({
                        ...pokemons[random],
                        date: today.getTime(),
                    })
                );

                pokemons = [
                    { ...pokemons[random], featured: true },
                    ...pokemons,
                ];
            } else {
                pokemons = [{ ...pokemon, featured: true }, ...pokemons];
            }

            return {
                ...state,
                pokemons,
                cache: pokemons,
                loaded: true,
                loading: false,
            };

        case LOAD_POKEMONS_FAILURE:
            return { ...state, loaded: true };

        case SEARCH_POKEMONS:
            return {
                ...state,
                pokemons: state.cache.filter(pokemon =>
                    pokemon['name'].match(new RegExp(action.query))
                ),
            };

        default:
            return state;
    }
}
