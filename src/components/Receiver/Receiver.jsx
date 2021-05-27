import classNamesHelper from 'classnames';

import './receiver.css';

export default function Receiver({ className }) {
  return (
    <section className={classNamesHelper('receiver', className)}>
      <h2>To</h2>
      <h2>IKEA</h2>
      <h2>Sweden</h2>
    </section>
  );
}
