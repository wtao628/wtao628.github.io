import { Center, Container, Flex, Grid, Paper, Text, Title } from "@mantine/core";
import React from "react";

import './Home.css';

/** The props that must be inputted into the Home component. */
interface HomeProps {
  height: number,
}

/**
 * The homepage for the website.
 * @param {number} height The height the animation takes up.
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
      <Container>
        <Grid>
          <Grid.Col span={4}>
            <Paper shadow='md' radius='lg'>
              <Text>Hi</Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={8}>2</Grid.Col>
        </Grid>
      </Container>
    </div>
  )
}