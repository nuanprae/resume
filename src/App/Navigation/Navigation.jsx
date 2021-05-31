import PropTypes from 'prop-types';
import classNamesHelper from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import './navigation.css';

export default function Navigation({ className }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className={classNamesHelper('nav', className)}>
      <Link to="/cover-letter" className={`link ${pathname === '/cover-letter' && 'active'}`}>
        Letter
      </Link>
      <Link to="/projects" className={`link ${pathname === '/projects' && 'active'}`}>
        Projects
      </Link>
      <Link to="/contact" className={`link ${pathname === '/contact' && 'active'}`}>
        Contact
      </Link>
    </nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};
