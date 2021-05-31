import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import './button.css';

export default function Button({ className, name }) {
  return <button className={classNamesHelper('button', className)}>{name}</button>;
}

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};
