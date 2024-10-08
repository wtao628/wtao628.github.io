import { ActionIcon, AppShell, Group, Text, useMantineColorScheme } from '@mantine/core';
import { IconCode, IconMoon, IconSun } from '@tabler/icons-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/projects', label: 'Projects' },
]

/**
 * A navigation header that links to other pages on this website.
 * @returns {React.JSX.Element} The navigation header.
 */
export default function Header(): React.JSX.Element {
  const colorScheme = useMantineColorScheme();
  const location = useLocation().pathname;

  const dark = colorScheme.colorScheme === 'dark'

  const items = links.map((link) => {
    // Bold text if link is same as active link
    if (link.link === location) {
      return <Text fw={700} key={link.label}>{link.label}</Text>
    }
    return (
      <Link to={link.link} key={link.label} className='links'>
        {link.label}
      </Link>
    )
  });

  return (
    <AppShell.Header id='header' px='md'>
      <Group>
        <Text fw={700}>Winston</Text>
      </Group>
      <Group>
        {items}
      </Group>
      <Group>
        <ActionIcon
          variant='outline'
          radius='sm'
          color={ dark ? '#97ead2' : '#eb5e28' }
          onClick={() => window.open('https://github.com/wtao628/wtao628.github.io')}
          >
          <IconCode />
        </ActionIcon>
        <ActionIcon
          variant='outline'
          radius='sm'
          color={ dark ? '#eb5e28' : '#97ead2' }
          onClick={colorScheme.toggleColorScheme}
          title='Toggle light-dark theme'
          >
            {dark ? (
              <IconSun />
            ) : (
              <IconMoon />
            )}
        </ActionIcon>
      </Group>
    </AppShell.Header>
  )
}