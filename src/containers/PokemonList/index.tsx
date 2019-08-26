import './style.css';
import React, { useEffect, useReducer, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../environment';
import {
    LOAD_POKEMONS_REQUEST,
    LOAD_POKEMONS,
    LOAD_POKEMONS_FAILURE,
    LIMIT,
    OFFSET,
    SEARCH_POKEMONS,
} from './constant';
import { reducer, initialState } from './reducer';
import { ListItem } from '../../components';
import SearchBox from '../SearchBox';

const PokemonList: React.SFC = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    async function getPokemons() {
        try {
            dispatch({ type: LOAD_POKEMONS_REQUEST });
            const payload = await (await fetch(
                `${BASE_URL}/pokemon?offset=${OFFSET}&limit=${LIMIT}`
            )).json();
            dispatch({ type: LOAD_POKEMONS, payload: payload.results });
        } catch (error) {
            dispatch({ type: LOAD_POKEMONS_FAILURE, error });
        }
    }

    useEffect(() => {
        getPokemons();
    }, [props]);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({ type: SEARCH_POKEMONS, query: e.target.value });
    }

    return (
        <div>
            <div className="mdl-grid" style={{ margin: '20px' }}>
                <SearchBox onChange={onChange} />
            </div>

            <div className="mdl-grid">
                {state.pokemons.map((pokemon, index) => (
                    <div className="mdl-cell mdl-cell--2-col" key={index}>
                        <Link to={`/pokemon/${pokemon.index + 1}`}>
                            <ListItem {...pokemon} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonList;
