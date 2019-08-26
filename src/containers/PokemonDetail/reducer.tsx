import { IPokemonDetails } from '../../types';
import {
    LOAD_POKEMON_DETAILS_REQUEST,
    LOAD_POKEMON_DETAILS,
    LOAD_POKEMON_DETAILS_FAILURE,
    PokemonDetailsActionTypes,
} from './constant';

interface IPokemonDetailsState {
    pokemon: IPokemonDetails;
    loading: boolean;
    loaded: boolean;
}

export const initialState: IPokemonDetailsState = {
    pokemon: {
        name: '',
        order: 0,
        base_experience: 0,
        height: 0,
        weight: 0,
        id: 0,
        abilities: [],
    },
    loaded: false,
    loading: false,
};

export function reducer(
    state: IPokemonDetailsState,
    action: PokemonDetailsActionTypes
): IPokemonDetailsState {
    switch (action.type) {
        case LOAD_POKEMON_DETAILS_REQUEST:
            return { ...state, loading: true };

        case LOAD_POKEMON_DETAILS:
            return {
                ...state,
                pokemon: action.payload,
                loaded: true,
                loading: false,
            };

        case LOAD_POKEMON_DETAILS_FAILURE:
            return { ...state, loaded: true };

        default:
            return state;
    }
}
