import { AppShell, Group, Text } from '@mantine/core';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' }
]

/**
 * A navigation header that links to other pages.
 * @returns {React.JSX.Element} The navigation header.
 */
export default function Header(): React.JSX.Element {
  const location = useLocation().pathname;

  const items = links.map((link) => {
    // Bold text if link is same as active link
    if (link.link === location) {
      return <Text fw={700} key={link.label}>{link.label}</Text>
    }

    return (
      <Link to={link.link} key={link.label}>
        {link.label}
      </Link>
    )
  });

  return (
    <AppShell.Header>
      <Group h='100%' px='md'>
        {items}
      </Group>
    </AppShell.Header>
  )
}