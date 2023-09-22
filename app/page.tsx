'use client';

import {
  Container,
  Title,
  Text,
  List,
  Group,
  Button,
} from '@mantine/core';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import classes from '@/components/Hero/Hero.module.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Home() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> React <br /> components library
          </Title>
          <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
          >
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all components and hooks
              export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
              any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
              keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
        <LiteYouTubeEmbed
          aspectHeight={9}
          aspectWidth={16}
          id="KzY1_tHNzsg"
          title="Vídeo de Apresentação da Angels Audiovisual"
        />
      </div>
    </Container>
  );
}
