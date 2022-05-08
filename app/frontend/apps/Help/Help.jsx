import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header, Footer, Main } from '~/components';
import { AccountSettings } from './AccountSettings';
import BoomHauer from '~/images/boomhauer.jpg';
import '../styles.scss';

const HelpApp = () => {
  return (
    <>
      <Header title="Help App" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main
                greeting="This is a rails rendered route."
                imgData={{
                  src: BoomHauer,
                  alt: 'boomhauer grinning',
                }}
              >
                <Link to="/account-settings">Account Settings</Link>
              </Main>
            </>
          }
        ></Route>
        <Route path="/account-settings" element={<AccountSettings />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default HelpApp;
