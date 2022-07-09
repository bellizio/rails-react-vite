import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowseApp } from '~/apps/Browse';

const container = document.getElementById('browse-page');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowseApp />
  </React.StrictMode>
);
