import classNamesHelper from 'classnames';

import './stamp.css';

export default function Stamp({ className }) {
  return (
    <section className={classNamesHelper('stamp', className)}>
      <h4 className="stamp__text">Sverige Brev</h4>
      <section className="heart-container" alt="heart">
        <div className="square">
          <div className="circle-left"></div>
          <div className="circle-right"></div>
        </div>
        <div className="arm-left"></div>
        <div className="arm-right"></div>
      </section>
      <h4 className="stamp__text">css famnig hjärta</h4>
    </section>
  );
}
