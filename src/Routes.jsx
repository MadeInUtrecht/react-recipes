import { Switch, Route } from 'react-router-dom';
import SearchResults from './SearchResults';
import Home from './Home';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={SearchResults} />
    </Switch>
  );
}

export default Routes;
