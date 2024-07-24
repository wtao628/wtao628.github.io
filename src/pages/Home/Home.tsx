import { ActionIcon, Center, Container, Flex, Grid, Group, Image, Paper, Text, Title } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBuilding, IconMapPin, IconSchool } from "@tabler/icons-react";
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
          <Title size={80}>Hey there!</Title>
          <Title order={1}>I'm Winston.</Title>
        </Flex>
      </Center>
      <Container h={height} pt='lg' pb='lg'>
        <Grid>
          <Grid.Col span={4.5}>
            <Paper shadow='md' radius='lg'>
              <Flex align='center' direction='column'>
                <Image radius='xl' src={null} pt='lg' />
                <Title order={3}>Winston Tao</Title>
                <Text fs='italic' pb='md'>Undergraduate Student</Text>
                <Group gap='xs' pb='md'>
                  <ActionIcon
                    variant='white'
                    onClick={() => window.open('https://github.com/wtao628')}
                    >
                    <IconBrandGithub className='icon' />
                  </ActionIcon>
                  <ActionIcon
                    variant='white'
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
          <Grid.Col span={7.5}>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  )
}