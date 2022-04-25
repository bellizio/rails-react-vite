import React from 'react';
import { Header, Footer } from '../components';
import './styles.scss';

const HomeApp = () => {
  return (
    <>
      <Header title="Home App" />
      <div>👋 Howdy from the Home App! 🤠</div>
      <Footer />
    </>
  );
};

export default HomeApp;
