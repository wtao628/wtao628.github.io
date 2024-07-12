import { Flex, Text, Title } from '@mantine/core';
import React from 'react';

/**
 * An error page for when something goes wrong.
 * @returns {React.JSX.Element} An error page.
 */
export default function ErrorPage(): React.JSX.Element {
  return (
    <Flex gap='md' align='center' direction='column'>
      <Title order={1}>Oops!</Title>
      <Text fs='italic'>Something went wrong...</Text>
    </Flex>
  )
}