import React from 'react';
import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { FaInstagram, FaFacebook, FaPinterest, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Produtos', link: '/produtos' },
      { label: 'Contato', link: '/contato' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src="/angels.png" height={50} width={50} alt="Logo da Angels" />
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaWhatsapp style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaFacebook style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaPinterest style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaInstagram style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
