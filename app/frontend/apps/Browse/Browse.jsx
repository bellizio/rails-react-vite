import React from 'react';
import { Header, Footer, Main } from '~/components';
import '../styles.scss';

const BrowseApp = () => {
  return (
    <>
      <Header title="Browse App" />
      <Main
        greeting="This is a rails rendered route."
        imgData={{
          src: '../images/bobby.gif',
          alt: 'bobby hill dancing in pajamas',
        }}
      />
      <Footer />
    </>
  );
};

export default BrowseApp;
