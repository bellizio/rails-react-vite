import React from 'react';
import { Main } from '~/components';
import Dale from '~/images/dale.jpg';

function AccountSettingsPage() {
  return (
    <Main
      greeting="This is a react rendered route."
      imgData={{
        src: Dale,
        alt: 'dale gribble',
      }}
    ></Main>
  );
}

export default AccountSettingsPage;
