'use client';

import { Container, Title, Text, Button, Group } from '@mantine/core';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Illustration } from '../components/Error/Illustration';
import classes from '../components/Error/NothingFoundBackgroung.module.css';

export default function Error() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrollX(window.scrollX);
      console.log(scrollY);
      console.log(scrollX);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <Image
          className={classes.image}
          src="/backgroundErrorImage.webp"
          alt="Imagem de fundo desfocada"
          height={500}
          width={500}
          quality={100}
        />
        <div className={classes.content}>
          <Title className={classes.title}>
            Eita! Você achou um lugar secreto
          </Title>
          <Text
            c="dimmed"
            size="lg"
            ta="center"
            className={classes.description}
          >
            Uma foto de má qualidade pode arruinar seu evento, assim como essa página.
          </Text>
          <Group justify="center">
            <Button
              component="a"
              href="/produtos"
              size="md"
            >Quero ver o que vocês podem oferecer pra mim :)
            </Button>
          </Group>
          I
        </div>
      </div>
    </Container>
  );
}
