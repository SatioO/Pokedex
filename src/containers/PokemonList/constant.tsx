import { IPokemon } from '../../types';

export const LOAD_POKEMONS = '[POKEMONS] LOAD POKEMONS';
export const LOAD_POKEMONS_REQUEST = `[POKEMONS] LOAD POKEMONS REQUEST`;
export const LOAD_POKEMONS_FAILURE = `[POKEMONS] LOAD POKEMONS FAILURE`;
export const SEARCH_POKEMONS = '[POKEMONS] SEARCH POKEMON';

export const LIMIT = 480;
export const OFFSET = 0;

export type IPokemonActionTypes =
    | {
          type: typeof LOAD_POKEMONS_REQUEST;
      }
    | {
          type: typeof LOAD_POKEMONS;
          payload: IPokemon[];
      }
    | {
          type: typeof LOAD_POKEMONS_FAILURE;
          error: string;
      }
    | {
          type: typeof SEARCH_POKEMONS;
          query: string;
      };
