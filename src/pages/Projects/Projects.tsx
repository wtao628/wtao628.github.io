import { ActionIcon, Anchor, Autocomplete, Center, Container, Group, Menu, Pagination, Paper, Stack, Text } from '@mantine/core';
import { IconFilter, IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';

import data from '../../data/projects.json';

import './Projects.css';

/**
 * The page containing a searchable list of projects.
 * @returns {React.JSX.Element} The page containing a list of projects.
 */
export default function Projects(): React.JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [projects, setProjects] = useState<{ name: string, link: string, technologies: string[] }[]>(data);

  /**
   * Updates the list of shown projects according to the search input.
   * @param {string} input The text input to the search bar.
   */
  const search = (input: string) => {
    if (input.length == 0) {
      setProjects(data);
    } else {
      setProjects(data.filter((project) => project.name.toLowerCase().includes(input)));
    }
  };

  const cards = projects.slice(4*page - 4, 4*page).map((project) => {
    const key = project.name.toLowerCase().replace(/\s+/g, '-')
    return (
      <Paper shadow='xs' radius='md' key={`${key}-paper`} className='card'>
        <Stack
          align='stretch'
          justify='flex-start'
          gap='sm'
          p='md'
          key={`${key}-stack`}
          >
          <Anchor
            href={project.link}
            underline='never'
            fw={700}
            c='#eb5e28'
            key={key}
            >
            {project.name}
          </Anchor>
          <Group key={`${key}-tech`}>
            {project.technologies.map(
              (technology) => <Text fs='italic' size='sm' key={`${key}-${technology}`}>{technology}</Text>
            )}
          </Group>
        </Stack>
      </Paper>
    )
  });

  return (
    <Container>
      <Text pt='md'>
        These are some of the projects I've worked on. Take a look!
      </Text>
      <Group justify='space-between' p='md'>
        <Menu shadow='md' width={200}>
          <Menu.Target>
            <ActionIcon
            variant='outline'
            color='#eb5e28'
            >
              <IconFilter />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown></Menu.Dropdown>
        </Menu>
        
        <Autocomplete
          placeholder='Search'
          leftSection={<IconSearch />}
          onChange={(input) => search(input.toLowerCase().trim())}
        />
      </Group>
      {
        projects.length == 0 ? (
          <Center>
            <Text fs='italic'>
              We couldn't find what you were looking for...
            </Text>
          </Center>
        ) : (
          <Stack
            align='stretch'
            justify='flex-start'
            gap='md'
            pb='md'
            >
            {cards}
            <Center>
              <Pagination
                total={Math.ceil(projects.length / 4)}
                value={page}
                color='#eb5e28'
                onChange={setPage}
              />
            </Center>
          </Stack>
        )
      }
    </Container>
  )
}