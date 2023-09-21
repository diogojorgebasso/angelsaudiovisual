"use client"; // Error components must be Client Components

// imagem desfocada no fundo e à medida que o usuário move o mouse em direção ao botão de produtos, a imagem se torna mais nítida. O texto vai trocando também.

import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Illustration } from "../../components/Error/Illustration";
import classes from "../../components/Error/NothingFoundBackgroung.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Error() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrollX(window.scrollX);
      console.log(scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <Image
          src={"./backgroundErrorImage.webp"}
          alt="Imagem de fundo desfocada"
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
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Group justify="center">
            <Button size="md">Take me back to home page</Button>
          </Group>
          I
        </div>
      </div>
    </Container>
  );
}
