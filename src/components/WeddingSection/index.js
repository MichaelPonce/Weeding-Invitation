import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Presencial" time="2:00 Pm" date="Sabado, 24 Septiembre 2022"
          description='Asados El Campeche <br/>San Sebastian de Yali'
          />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">Feliz De Tenerlos</span>
              <h2 className="main-font main-font__wedding">Ceremonia de Matrimonio presencial</h2>
              <span className="sub-title sub-title__wedding">En la siguiente seccion encontrara la informacion mas detallada:</span>
            </div>
          </div>
          <div className="row">
            {!isInvitation && renderGuestInfo()}
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Ceremonia"
                  time="Se implementara en la mañana "
                  date="Sabado, 24 Septiembre 2022"
                  description="Asados El Campeche <br/>San Sebastian de Yali"
                />
                <WeddingInfoBox
                  title="Recepcion"
                  time="Se Implementara en la Tarde "
                  date="Sabado, 24 Septiembre 2022"
                  description=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
