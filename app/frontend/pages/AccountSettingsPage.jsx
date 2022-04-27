import React from 'react';
import { Main } from '../components';

function AccountSettingsPage() {
  return (
    <Main
      greeting="This is a react rendered route."
      imgData={{
        src: '../images/dale.jpg',
        alt: 'dale gribble',
      }}
    ></Main>
  );
}

export default AccountSettingsPage;
