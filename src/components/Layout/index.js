import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/dinda-indra.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = '@assets/images/dinda-indra.jpg';
const META_DESCRIPTION = `Es un Placer Invitarte a Nuestra Boda. Esta Sera Una Ocasion Muy Especial, 
Esperamos Puedas Acompañarnos`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Yilber ❤️ Scarleth Boda</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="Boda Yilber Scarleth" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:site_name" content="Boda Yilver Scarleth" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="Boda Yilver Scarleth" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />


        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
