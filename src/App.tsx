import { AppShell, MantineProvider } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

import '@mantine/core/styles.css';

/**
 * The wrapper for the web application.
 * @returns {React.JSX.Element} The web application.
 */
export default function App(): React.JSX.Element {
  const [height, setHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (current) {
      setHeight(current.offsetHeight);
    }
  }, [])

  return (
    <MantineProvider>
      <BrowserRouter>
        <AppShell header={{ height: 50 }} padding={0}>
          <Header />
          <AppShell.Main ref={ref}>
            <Routes>
              <Route index element={<Home height={height} />} />
              <Route path='/projects' element={<ErrorPage />}/>
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  )
}
