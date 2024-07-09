import { Text, Title } from '@mantine/core';
import React from 'react';
import { useRouteError } from 'react-router-dom';

/**
 * An error page for when something goes wrong.
 * @returns {React.JSX.Element} An error page.
 */
export default function ErrorPage(): React.JSX.Element {
  const error = useRouteError();

  return (
    <div id='error-page'>
      <Title order={1}>Oops!</Title>
      <Title order={2}>Something went wrong...</Title>
      <Text fs='italic'>
        {(error as Error).message || (error as { statusText?: string }).statusText}
      </Text>
    </div>
  )
}