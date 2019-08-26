import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, PokemonDetails } from './pages';

const App: React.FC = () => {
    return (
        <Router>
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header title={'Pokedex'} />
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/pokemon/:id"
                            component={PokemonDetails}
                        />
                    </div>
                </main>
            </div>
        </Router>
    );
};

export default App;
