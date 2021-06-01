import { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

import './app.css';

import EnvelopePage from '../pages/EnvelopePage/EnvelopePage';
import LetterPage from '../pages/LetterPage/LetterPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import EducationPage from '../pages/EducationPage/EducationPage';
import ExperiencePage from '../pages/ExperiencePage/ExperiencePage';

export default function App() {
  return (
    <section className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={EnvelopePage}></Route>
          <Route path="/contact" component={EnvelopePage}></Route>
          <Fragment>
            <main className="app__main">
              <Navigation className="app__navigation" />
              <Route path="/letter">
                <LetterPage className="app__page" />
              </Route>
              <Route path="/projects">
                <ProjectsPage className="app__page" />
              </Route>
              <Route path="/experience">
                <ExperiencePage className="app__page" />
              </Route>
              <Route path="/education">
                <EducationPage className="app__page" />
              </Route>
            </main>
          </Fragment>
        </Switch>
      </Router>
    </section>
  );
}
