import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header, Footer, Main } from '../components';
import { AccountSettingsPage } from '../pages';
import './styles.scss';

const HelpApp = () => {
  return (
    <>
      <Routes>
        <Route
          path="/account-settings"
          element={<AccountSettingsPage />}
        ></Route>
      </Routes>
      <Header title="Help App" />
      <Main
        appName="Help"
        imgData={{
          src: '../images/boomhauer.jpg',
          alt: 'boomhauer grinning',
        }}
      >
        <Link to="/account-settings">Account Settings</Link>
      </Main>
      <Footer />
    </>
  );
};

export default HelpApp;
