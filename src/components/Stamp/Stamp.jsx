import classNamesHelper from 'classnames';

import './stamp.css';

export default function Stamp({ className }) {
  return <section className={classNamesHelper('stamp', className)}></section>;
}
