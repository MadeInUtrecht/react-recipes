import { Switch, Route } from 'react-router-dom';
import SearchResults from './SearchResults';
import RecipePage from './RecipePage';
import Home from './Home';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={SearchResults} />
      <Route path="/recipe" component={RecipePage} />
    </Switch>
  );
}

export default Routes;
