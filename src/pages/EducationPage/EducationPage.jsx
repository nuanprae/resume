import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import './education-page.css';

export default function EducationPage({ className }) {
  return (
    <section className={classNamesHelper('education-page', className)}>
      <ul className="education-page__list">
        <li className="education-page__list-item">
          <h4 className="education-page__list-item-name">Full-stack web development course</h4>
          <p>FooCoding, Nov 2020 - June 2021</p>
        </li>
        <li className="education-page__list-item">
          <h4 className="education-page__list-item-name">Master of Teaching (Primary)</h4>
          <p>Western Sydney University, 2009-2010</p>
        </li>
        <li className="education-page__list-item">
          <h4 className="education-page__list-item-name">
            Bachelor of Arts (Advanced German Studies and Japanese Studies)
          </h4>
          <p>University of New South Wales, 2006-2009</p>
        </li>
        <li className="education-page__list-item">
          <h4 className="education-page__list-item-name">AFS Exchange Program</h4>
          <p>Gymnasieskolan Spyken, 2003-2004</p>
        </li>
      </ul>
    </section>
  );
}

EducationPage.propTypes = {
  className: PropTypes.string,
};
