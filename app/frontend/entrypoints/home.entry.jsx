import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HomeApp } from '~/apps/Home';

const container = document.getElementById('home-page');
const root = createRoot(container);

root.render(
  <StrictMode>
    <HomeApp />
  </StrictMode>
);
