import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from './Recipes';
import SingleRecipe from './SingleRecipe';
import Text from './Text.js';
import {
  BrowserRouter as Router,
  Route, Link, NavLink
} from 'react-router-dom';
import LandingPage from './LandingPage';


class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Route path="/recipe/:recipe_id" component={SingleRecipe} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/recipes" component={Recipes} />
          </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));