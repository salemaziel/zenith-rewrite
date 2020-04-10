import React from 'react';
//import Layout from '../components/layout';
import ComingSoonPage from '../components/PageComponents/ComingSoon/comingsoonpage'
import Helmet from 'react-helmet'


const ComingSoon = () => (
  <>
  <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Zenith Roofing Systems San Diego</title>
            <meta name="description" content="Zenith Roofing Services serving Greater San Diego County, CA" />
            <meta property="og:site_name" content="Zenith Roofing Services" />
            <meta property="og:title" content="Zenith Roofing Services" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="../images/logo-vertical-dark-500x410.png" />
            <meta property="og:description" content="Zenith Roofing Services serving Greater San Diego County, CA" />
            <meta property="og:url" content="https://zenithroofingservices.com" />
            <meta property="twitter:card" content="https://res.cloudinary.com/dexdumfqy/image/upload/v1585697374/zenithroofing/logo_ih5blc.png" />
          </Helmet>
    <ComingSoonPage />
  </>
);

export default ComingSoon
