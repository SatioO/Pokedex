import React, { useEffect, useReducer, useCallback } from 'react';
import { BASE_URL } from '../../environment';
import { reducer, initialState } from './reducer';
import {
    LOAD_POKEMON_DETAILS_REQUEST,
    LOAD_POKEMON_DETAILS,
    LOAD_POKEMON_DETAILS_FAILURE,
} from './constant';
import PokemonImage from '../../components/PokemonImage';

interface IProps {
    id: number;
}

const PokemonDetail: React.SFC<IProps> = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getPokemonDetails = useCallback(async () => {
        try {
            dispatch({ type: LOAD_POKEMON_DETAILS_REQUEST });
            const payload = await (await fetch(
                `${BASE_URL}/pokemon/${props.id}`
            )).json();
            dispatch({ type: LOAD_POKEMON_DETAILS, payload });
        } catch (error) {
            dispatch({ type: LOAD_POKEMON_DETAILS_FAILURE, error });
        }
    }, [props.id]);

    useEffect(() => {
        getPokemonDetails();
    }, [getPokemonDetails]);

    return (
        <div className="mdl-grid">
            {state.loaded && (
                <>
                    <div className="mdl-cell mdl-cell--2-col has-centered">
                        <PokemonImage id={props.id} name={state.pokemon.name} />
                        <h4 className="title has-text-centered is-capitalized">
                            {state.pokemon.name}
                        </h4>
                    </div>
                    <div className="mdl-cell mdl-cell--10-col">
                        <ul
                            className="demo-list-two mdl-list"
                            style={{ backgroundColor: '#ddd' }}
                        >
                            <li className="mdl-list__item mdl-list__item--two-line">
                                <span className="mdl-list__item-primary-content">
                                    <span>Height</span>
                                    <span className="mdl-list__item-sub-title">
                                        {state.pokemon.height}
                                    </span>
                                </span>
                            </li>
                            <li className="mdl-list__item mdl-list__item--two-line">
                                <span className="mdl-list__item-primary-content">
                                    <span>Weight</span>
                                    <span className="mdl-list__item-sub-title">
                                        {state.pokemon.weight}
                                    </span>
                                </span>
                            </li>
                            <li className="mdl-list__item mdl-list__item--two-line">
                                <span className="mdl-list__item-primary-content">
                                    <span>Experience</span>
                                    <span className="mdl-list__item-sub-title">
                                        {state.pokemon.base_experience}
                                    </span>
                                </span>
                            </li>
                            <ul className="demo-list-two mdl-list">
                                {state.pokemon.abilities.map(({ ability }) => (
                                    <li
                                        className="mdl-list__item mdl-list__item--two-line"
                                        key={ability.name}
                                    >
                                        <span className="mdl-list__item-primary-content">
                                            <span>Ability</span>
                                            <span className="mdl-list__item-sub-title">
                                                {ability.name}
                                            </span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default PokemonDetail;
