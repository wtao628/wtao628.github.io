import { Center, Container, Flex, Title } from "@mantine/core";
import React from "react";

import './Home.css';

interface HomeProps {
  height: number,
}

/**
 * The homepage.
 * @param {number} height The height 
 * @returns {React.JSX.Element} The homepage for the website.
 */
export default function Home({ height }: HomeProps): React.JSX.Element {
  return (
    <div>
      <Center h={height} id='intro'>
        <Flex align='center' direction='column'>
          <Title size='80'>Hey there!</Title>
          <Title order={1}>I'm Winston.</Title>
        </Flex>
      </Center>
      <Container></Container>
    </div>
  )
}