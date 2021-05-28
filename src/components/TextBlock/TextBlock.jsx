import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import './text-block.css';

export default function TextBlock({ className, name }) {
  return (
    <section className={classNamesHelper('text-block', className)}>
      <h4>{name}</h4>
    </section>
  );
}

TextBlock.propTypes = {
  name: PropTypes.string,
};
