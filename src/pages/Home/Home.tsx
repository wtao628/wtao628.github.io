import { ActionIcon, Center, Container, Flex, Grid, Group, Image, Paper, Text, Title } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBuilding, IconMapPin, IconSchool } from '@tabler/icons-react';
import React from 'react';

import './Home.css';

const paragraphs = [
  `I'm a fourth-year student at the University of British Columbia, aiming for
  my Bachelor of Science. I'm enrolled in the Combined Honours in Physics and
  Astronomy and Science Co-op programs. Currently, I'm finishing up my
  software engineering internship at Korotu Technology Inc.`,
]

/** The props that must be inputted into the Home component. */
interface HomeProps {
  /** The height of the homepage animation. */
  height: number,
}

/**
 * The homepage for the website.
 * @param {number} height The height of the homepage animation.
 * @returns {React.JSX.Element} The homepage for the website.
 */
export default function Home({ height }: HomeProps): React.JSX.Element {
  const description = paragraphs.map(
    (paragraph) => <Text pb='md'>{paragraph}</Text>
  );

  return (
    <div>
      <Center h={height} id='intro'>
        <Flex align='center' direction='column'>
          <Title size={80} className='greeting'>Hey there!</Title>
          <Title className='greeting'>I'm Winston.</Title>
        </Flex>
      </Center>
      <Container h={height} pt='lg' pb='lg'>
        <Grid>
          <Grid.Col span={{ sm: 4.5, xs: 12 }}>
            <Paper shadow='md' radius='lg'>
              <Flex align='center' direction='column'>
                <Image radius='xl' src={null} pt='lg' />
                <Title order={3}>Winston Tao</Title>
                <Text fs='italic' pb='md'>Undergraduate Student</Text>
                <Group gap='xs' pb='md'>
                  <ActionIcon
                    variant='subtle'
                    onClick={() => window.open('https://github.com/wtao628')}
                    >
                    <IconBrandGithub className='icon' />
                  </ActionIcon>
                  <ActionIcon
                    variant='subtle'
                    onClick={() => window.open('https://ca.linkedin.com/in/winston-tao-ab3b57262')}
                    >
                    <IconBrandLinkedin className='icon' />
                  </ActionIcon>
                </Group>
                <Flex direction='column' pb='lg'>
                  <Group gap='xs'>
                    <IconSchool className='icon' />
                    <Text>University of British Columbia</Text>
                  </Group>
                  <Group gap='xs'>
                    <IconBuilding className='icon' />
                    <Text>Korotu Technology Inc.</Text>
                  </Group>
                  <Group gap='xs'>
                    <IconMapPin className='icon' />
                    <Text>Vancouver, CA</Text>
                  </Group>
                </Flex>
              </Flex>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ sm: 7.5, xs: 12 }}>
            <Title order={2}>About Me</Title>
            {description}
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  )
}
