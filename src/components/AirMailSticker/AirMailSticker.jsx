import classNamesHelper from 'classnames';

import './air-mail-sticker.css';

export default function AirMailSticker({ className }) {
  return (
    <section className={classNamesHelper('air-mail-sticker', className)}>
      <h4>Air Mail</h4>
      <h4>Par Avion</h4>
    </section>
  );
}
