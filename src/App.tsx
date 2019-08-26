/**
 * Github: SatioO
 * Author: SatioO<vaibhav.satam29991@gmail.com>
 * Description: A sample pokemon application with list and search functionality
 * TechStack: React, Typescript, React Hooks, React-Router, Lazy loading bundles
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Details } from './pages';

const App: React.FC = () => (
    <Router>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <Header title={'Pokedex'} />
            <main className="mdl-layout__content">
                <div className="page-content">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/pokemon/:id" component={Details} />
                </div>
            </main>
        </div>
    </Router>
);

export default App;
