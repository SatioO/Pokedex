import React, { Suspense, lazy } from 'react';
import { Loader } from '../../components';

const PokemonList = lazy(() => import('../../containers/PokemonList'));

const Home: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <PokemonList />
        </Suspense>
    );
};

export default Home;
