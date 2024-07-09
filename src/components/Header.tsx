import { AppShell, Group, Text } from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' }
]

/**
 * A navigation header that links to other pages.
 * @returns {React.JSX.Element} The navigation header.
 */
export default function Header(): React.JSX.Element {
  const [active, setActive] = useState<string>(links[0].link);

  const items = links.map((link) => {
    // Bold text if link is same as active link
    if (link.link === active) {
      return <Text fw={700} c='blue'>{link.label}</Text>
    }

    return (
      <Link to={link.link} onClick={() => setActive(link.link)}>
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