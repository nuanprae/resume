import classNamesHelper from 'classnames';

import './stamp.css';

export default function Stamp({ className }) {
  return (
    <section className={classNamesHelper('stamp', className)}>
      <h4 className="stamp__text">Sverige Brev</h4>
      <section class="bear" alt="sleeping bear">
        <div class="head">
          <div class="head-copy"></div>
          <div class="ear-left">
            <div class="inner-ear"></div>
          </div>
          <div class="ear-right">
            <div class="inner-ear"></div>
          </div>
          <div class="eye-left"></div>
          <div class="eye-right"></div>
          <div class="snout">
            <div class="nose"></div>
            <div class="nose-line"></div>
            <div class="mouth"></div>
          </div>
        </div>
      </section>
      <h4 className="stamp__text">css bear</h4>
    </section>
  );
}
