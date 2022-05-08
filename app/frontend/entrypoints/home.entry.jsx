import React from 'react';
import { createRoot } from 'react-dom/client';
import { HomeApp } from '~/apps';

const container = document.getElementById('home-page');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HomeApp />
  </React.StrictMode>
);
