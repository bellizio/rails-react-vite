import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header, Footer } from '../components';
import { AccountSettingsPage } from '../pages';

const HelpApp = () => {
  return (
    <>
      <Header title="Help App" />
      <div>👋 Howdy from the Help App! 🤠</div>
      <Routes>
        <Route
          path="/account-settings"
          element={<AccountSettingsPage />}
        ></Route>
      </Routes>
      <Link to="/account-settings">Account Settings</Link>
      <Footer />
    </>
  );
};

export default HelpApp;
