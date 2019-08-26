import React, { Suspense, lazy } from 'react';
import { Loader } from '../../components';

const PokemonDetail = lazy(() => import('../../containers/PokemonDetail'));

interface Props {
    match: {
        params: {
            id: number;
        };
    };
}

const PokemonDetails: React.FC<Props> = props => {
    return (
        <Suspense fallback={<Loader />}>
            <PokemonDetail id={props.match.params.id} />
        </Suspense>
    );
};

export default PokemonDetails;
