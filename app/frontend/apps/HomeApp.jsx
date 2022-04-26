import React from 'react';
import { Header, Footer, Main } from '../components';
import './styles.scss';

const HomeApp = () => {
  return (
    <>
      <Header title="Home App" />
      <Main
        appName="Home"
        imgData={{ src: '../images/hank.jpg', alt: 'hank hill' }}
      />
      <Footer />
    </>
  );
};

export default HomeApp;
