import classNamesHelper from 'classnames';

import './sender.css';

export default function Sender({ className }) {
  return (
    <section className={classNamesHelper('sender', className)}>
      <h3>From</h3>
      <h3>Nuanprae</h3>
      <h3>Veberöd, Sweden</h3>
    </section>
  );
}
