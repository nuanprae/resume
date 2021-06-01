import classNamesHelper from 'classnames';

import './stamp.css';

export default function Stamp({ className }) {
  return (
    <section className={classNamesHelper('stamp', className)}>
      <h4 className="stamp__text">Sverige Brev</h4>
      <section className="bear" alt="sleeping bear">
        <div className="head">
          <div className="head-copy"></div>
          <div className="ear-left">
            <div className="inner-ear"></div>
          </div>
          <div className="ear-right">
            <div className="inner-ear"></div>
          </div>
          <div className="eye-left"></div>
          <div className="eye-right"></div>
          <div className="snout">
            <div className="nose"></div>
            <div className="nose-line"></div>
            <div className="mouth"></div>
          </div>
        </div>
      </section>
      <h4 className="stamp__text">css</h4>
    </section>
  );
}
