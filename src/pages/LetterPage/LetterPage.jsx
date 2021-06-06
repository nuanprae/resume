import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import './letter-page.css';

export default function LetterPage({ className }) {
  return (
    <section className={classNamesHelper('letter-page', className)}>
      <header className="letter-page__header">
        <h3 className="letter-page__header-greeting">Hi!</h3>
        <h4>I'm Nuanprae.</h4>
        <h4>web developer</h4>
        <h4>lifelong learner</h4>
        <h4>mother of three</h4>
      </header>
      <p className="letter-page__paragraph">
        I'm currently looking for my next challenge. At the end of June, I will have completed an
        intensive full-stack web development course at{' '}
        <a
          className="letter-page__external-link"
          href="https://www.foocoding.org/"
          rel="noreferrer"
          target="_blank"
        >
          FooCoding
        </a>{' '}
        in Malmö. This course has deepened my knowledge and practical skills in{' '}
        <b>React.js, JavaScript, Node.js, HTML, CSS and Git</b>. I enjoy using my creativity to
        develop software solutions that are both aesthetically pleasing on the inside and the
        outside.
      </p>
      <p className="letter-page__paragraph">
        I started learning how to build a website through online resources in the beginning of 2017.
        In September of the same year I was accepted into a{' '}
        <b>six-month software engineering internship program at Arbor Networks</b> in Sydney,
        Australia. My main task was to build a single page web application which shows a global
        summary of DDoS attacks.
      </p>
      <p className="letter-page__paragraph">
        I also participated in Node Girls Sydney (now called{' '}
        <a
          className="letter-page__external-link"
          href="https://musescodejs.org/"
          rel="noreferrer"
          target="_blank"
        >
          Muses Code JS
        </a>
        ), an organisation that runs free JavaScript and Node.js workshops for women, non-binary and
        trans people, first as a participant, then later on as a <b>mentor and speaker</b> at their
        events.
      </p>
      <p className="letter-page__paragraph">
        Before changing my career to web development, I worked as a <b>primary school teacher</b> in
        Australia and Sweden. This has given me the skills and knowledge to effectively learn, guide
        and work in a team.
      </p>
      <p className="letter-page__paragraph">
        I hope to create a positive impact on the world through my passion for web development and
        learning.
      </p>
      <p className="letter-page__paragraph">Thanks for reading, </p>
      <p className="letter-page__paragraph">Nuanprae</p>
    </section>
  );
}

LetterPage.propTypes = {
  className: PropTypes.string,
};
