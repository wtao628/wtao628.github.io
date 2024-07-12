import { AppShell } from '@mantine/core';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Home from './pages/Home';

/**
 * The wrapper for the web application.
 * @returns {React.JSX.Element} The web application.
 */
export default function App(): React.JSX.Element {
  return (
    <BrowserRouter basename='/wtao628.github.io/'>
      <AppShell header={{ height: 50 }} padding='md'>
        <Header />
        <AppShell.Main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </BrowserRouter>
  )
}
