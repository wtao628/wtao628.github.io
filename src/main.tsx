import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import '@mantine/core/styles.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>,
)
