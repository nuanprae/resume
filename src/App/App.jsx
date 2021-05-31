import { HashRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

import './app.css';

import EnvelopePage from '../pages/EnvelopePage/EnvelopePage';
import LetterPage from '../pages/LetterPage/LetterPage';

export default function App() {
  return (
    <section className="app">
      <Router>
        <Route exact path="/" component={EnvelopePage}></Route>
        <main className="app__main">
          <Navigation className="app__navigation" />
          <Route path="/cover-letter">
            <LetterPage className="app__page" />
          </Route>
        </main>
      </Router>
    </section>
  );
}
