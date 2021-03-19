import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Favorites from '../Pages/Favorites.js';
import HomePage from '../Pages/HomePage.js';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={(props) => <HomePage {...props}/> } />
            <Route path="/fav" exact render={(props) => <Favorites {...props}/> } />
        </Switch>
    )
}

export default Routes
