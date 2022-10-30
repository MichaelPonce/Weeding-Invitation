import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-indra.jpg';
import Groom from '@assets/images/p-dinda-2.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation ? '24 Septiembre 2022, Asados El Campeche, San Sebastian De Yali' : 'Sabado, 24 Septiembre 2022';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Boda Jarquin Rivera</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                Para Nosotros Es Fundamental Compartir La Alegria De Nuestro Matrimonio Con Ustedes, <br/>
                Por Eso Nos Gustaria Que Nos Acompañen.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Yilber Jarquin</h3>
                <p className="parent-name parent-name__top">
                  <br />
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Scarleth Rivera</h3>
                <p className="parent-name">
                <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Informacion Covid-19</h2>
                <p className="info">
                En relación con la actual condición de pandemia la continuidad de 
                nuestro evento se estará realizando tomando ciertas medidas tanto
                 de distanciamiento social como medidas preventivas antes de entrar a local. 
                </p>
                <p className="info">
                Por lo cual pedimos su colaboración para seguir estás medidas al llegar 
                al local, esperamos pueden disfrutar con nosotros esté feliz día.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
