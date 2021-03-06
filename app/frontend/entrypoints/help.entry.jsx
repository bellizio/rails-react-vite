import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelpApp } from '~/apps/Help';

const container = document.getElementById('help-page');
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter basename="help">
      <HelpApp />
    </BrowserRouter>
  </StrictMode>
);
