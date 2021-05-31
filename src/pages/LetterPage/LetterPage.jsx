import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import './letter-page.css';

export default function LetterPage({ className }) {
  return (
    <section className={classNamesHelper('letter-page', className)}>
      <header className="letter-page__header">
        <h3>Hej!</h3>
        <h4>I'm Nuanprae.</h4>
        <h4>
          A lifelong learner, a junior web developer, a mother of three (children not dragons)
        </h4>
      </header>
      <p className="letter-page__paragraph">
        Have you ever heard of the expression ‘curiosity killed the cat’? It implies that curiosity
        is a bad thing. Luckily IKEA doesn't agree — and neither do I. My curiosity is precisely
        what has driven me to learn, grow, and become the person I am proud to be today.
      </p>
      <p className="letter-page__paragraph">
        Having grown up learning many different human languages (English, Thai, German and Swedish),
        it has never crossed my mind that one day I will be learning languages that would allow me
        to communicate with machines. I started learning how to build a website using online
        resources in the beginning of 2017. In September of the same year I was accepted into a
        six-month software engineering internship program at Arbor Networks in Sydney, Australia. I
        was able to quickly come up to speed with the technologies used within the company and
        learned how to effectively work in an agile team. I was also a part of Node Girls Sydney, an
        organisation that runs free JavaScript and Node.js workshops for women, non-binary and trans
        people, first as a participant, then later on as a mentor and speaker at the events.
      </p>
      <p className="letter-page__paragraph">
        Before changing my career path to web development, I worked as a primary school teacher in
        both Australia and Sweden. With my background in education, I believe that I can contribute
        to IKEA as a software developer in a unique way. I value learning as a lifelong journey and
        have a repertoire of learning strategies and thinking routines that help us effectively
        improve our mindset and skills. I have contributed on numerous occasions at Arbor Networks
        and FooCoding by using learning strategies to help us learn and improve together.
      </p>
      <p className="letter-page__paragraph">
        After moving back to Sweden in 2018, I went on parental leave and completed a Swedish as a
        second language course (grundläggande nivå) at Komvux. In November 2020 I started an
        intensive full stack web development course at FooCoding in Malmö, which I will complete at
        the end of June. The course has deepened my knowledge and practical skills in React.js,
        JavaScript, Node.js, HTML, CSS and Git.
      </p>
      <p className="letter-page__paragraph">
        I’m absolutely thrilled to be applying for a role within the IKEA Accelerator Program 2021 -
        Junior Software Engineer. I would love to become one of the co-workers at IKEA where my
        values and skills can help create a meaningful digital experience for the many people in the
        world. I believe that I will grow immensely by being a part of this program where I, along
        with co-workers, put IKEA values into practice. I look forward to an opportunity to further
        show you how I can contribute to working at IKEA.
      </p>
      <p className="letter-page__paragraph">Thank you for your time and consideration.</p>
      <p>Kind regards,</p>
      <p className="letter-page__paragraph">Nuanprae Gopalakrishnan</p>
    </section>
  );
}

LetterPage.propTypes = {
  className: PropTypes.string,
};
