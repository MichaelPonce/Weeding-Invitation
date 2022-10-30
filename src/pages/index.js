import React, { useState, Fragment } from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import LocationSection from '@components/LocationSection';
import FooterSection from '@components/FooterSection';
import CovidSection from '@components/Covid19';
import FloatingMusic from '@components/FloatingMusic/Loadable';



function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  const firstName = guestName.replace(/ .*/, '');
  const isAnonymGuest = guestName === '' && !isInvitation;
  const codeLink = getQueryValue(location, 'code') || '';
  const finalTicketLink = `code=${codeLink}&name=${guestName}`;

  const [showDetailContent, setShowDetailContent] = useState(false);

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };

  const renderDetailContent = () => {
    if (!showDetailContent) return null;

    return (
      <Fragment>
        <HelloSection isInvitation={isInvitation} />
        <WeddingSection isInvitation={isInvitation} />
        {isInvitation && <CovidSection />}
        {isInvitation && <LocationSection />}
        
        <LocationSection/>
        <FooterSection isInvitation={isInvitation} />
      </Fragment>
    );
  };

  return (
    <MainLayout>
      <WelcomeSection
        guestName={guestName}
        isAnonymGuest={isAnonymGuest}
        isInvitation={isInvitation}
        location={location}
        codeLink={finalTicketLink}
        onClickDetail={handleClickDetail}
      />
      {renderDetailContent()}
      <FloatingMusic />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
