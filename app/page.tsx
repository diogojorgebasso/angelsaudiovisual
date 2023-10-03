'use client';

import {
  Container,
  Title,
  Text,
  Group,
  Button,
  Input,
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
            Uma empresa <span className={classes.highlight}>moderna</span>
            de Audiovisual <br /> para você.
          </Title>
          <Text c="dimmed" mt="md">
            Garanta uma cobertura rápida, profissional e pontual para o seu evento.
            Quer entrar em contato?
          </Text>
          <Group mt={30}>
            <Input
              placeholder="Digite seu e-mail"
              radius="xl"
              size="md"
              className={classes.control}
            />
            <Button radius="xl" size="md" className={classes.control}>
              Enviar
            </Button>
          </Group>

        </div>
        <LiteYouTubeEmbed
          aspectHeight={16}
          aspectWidth={9}
          id="KzY1_tHNzsg"
          title="Vídeo de Apresentação da Angels Audiovisual"
          noCookie
        />
      </div>
    </Container>
  );
}
