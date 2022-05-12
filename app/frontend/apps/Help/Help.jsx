import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Footer, Header, Main } from '~/components';
import BoomHauer from '~/images/boomhauer.jpg';
import { AccountSettings } from './AccountSettings';
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
