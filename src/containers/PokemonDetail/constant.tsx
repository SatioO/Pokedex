import { IPokemonDetails } from '../../types';

export const LOAD_POKEMON_DETAILS = '[POKEMONS DETAILS] LOAD POKEMONS DETAILS';
export const LOAD_POKEMON_DETAILS_REQUEST = `[POKEMONS DETAILS] LOAD POKEMONS DETAILS REQUEST`;
export const LOAD_POKEMON_DETAILS_FAILURE = `[POKEMONS DETAILS] LOAD POKEMONS DETAILS FAILURE`;

export type PokemonDetailsActionTypes =
    | {
          type: typeof LOAD_POKEMON_DETAILS_REQUEST;
      }
    | {
          type: typeof LOAD_POKEMON_DETAILS;
          payload: IPokemonDetails;
      }
    | {
          type: typeof LOAD_POKEMON_DETAILS_FAILURE;
          error: string;
      };
