import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './app.css';

import EnvelopePage from '../pages/EnvelopePage/EnvelopePage';
import LetterPage from '../pages/LetterPage/LetterPage';
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EnvelopePage}></Route>
        <Route path="/letter" component={LetterPage}></Route>
      </Switch>
    </Router>
  );
}
