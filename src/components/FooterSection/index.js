import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Eres muy especial para nosotros</h2>
                <p className="info">
                “Dicen que cuando conoces al amor de tu vida, el tiempo se para… Y, es verdad. Lo que no dicen
                 es que cuando vuelve a ponerse en marcha, se mueve aún más rápidamente, para recuperar el tiempo perdido”
                </p>
                <p className="info">
                  Big Fish
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2022 Yilber & Scarleth Wedding. All Rights Reserved.</small>
                
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
