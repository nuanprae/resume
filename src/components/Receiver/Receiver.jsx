import classNamesHelper from 'classnames';

import './receiver.css';

export default function Receiver({ className }) {
  return (
    <section className={classNamesHelper('receiver', className)}>
      <h2>To</h2>
      <h2>You</h2>
    </section>
  );
}
