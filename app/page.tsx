'use client';

import {
  Container,
  Title,
  Text,
  Group,
  Button,
  Avatar,
  Stack,
  Badge,
} from '@mantine/core';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import classes from '@/components/Hero/Hero.module.css';
import YouTubeFrame from '@/components/Hero/YouTubeFrame';

export default function Home() {
  return (
    <>
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Nós <span className={classes.highlight}>cuidamos</span>
              de sua imagem em 7 dias.
            </Title>
            <Text c="dimmed" mt="md">
              Seja Foto, Vídeo ou Drone, seu evento merece o melhor.
              Muuuito além da entrega rápida e profissional.
            </Text>
            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Faça um orçamento agora. Sem CC
              </Button>
            </Group>
            <Group justify="space-between" mt="md">
              <Avatar.Group spacing="md">
                <Avatar src="/gustavo-hermetto.jpg" radius="xl" />
                <Avatar src="/raquel-beyoha.jpg" radius="xl" />
                <Avatar src="/geovanna-leone.jpg" radius="xl" />
                <Avatar radius="xl">+30</Avatar>
                <Stack gap="xs">
                  <span>
                    <FaStar color="pink" /><FaStar color="pink" /><FaStar color="pink" /><FaStar color="pink" /><FaStar color="pink" />
                  </span>
                  <Text>(pelo Google)</Text>
                </Stack>
              </Avatar.Group>
            </Group>
          </div>
          <div className={classes.image}>
            <YouTubeFrame video="XWOF98gtN-M" width={800} height={800} thumbnailQuality="mqdefault" />
          </div>
        </div>
        <Group gap="xs">
          <Badge>Empresas parceiras</Badge>
          <Image src="/barcultural.png" alt="Logo do Bar Cultural, maior Da da América Latina" width={170} height={100} />
          <Image src="/jyba.png" alt="Logo do Jybá, eleita melhor Pilsen do Brasil" width={170} height={100} />
          <Image src="/albatroz.png" alt="Logo do Albatroz, Diretório Acadêmico de Medicina" width={170} height={100} />
          <Image
            src="/mfbd.png"
            alt="Logo do MFBD, Escritório com mais de 20 anos de atuação"
            width={180}
            height={100}
          />
        </Group>
      </Container>
      <Container size="md">
        <Title order={2}>Uma imagem vale mais <br /> do que mil palavras.</Title>
        <Text>Como você está posicionado indica do que seu negócio é sobre.</Text>
      </Container>
    </>
  );
}
