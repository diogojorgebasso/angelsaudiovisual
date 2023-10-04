import React from 'react';
import { Text, Container, Group } from '@mantine/core';
import { FaInstagram, FaFacebook, FaPinterest, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import classes from './FooterLinks.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src="/angels.png" height={50} width={50} alt="Logo da Angels" />
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>
          <div className={classes.wrapper}>
            <Text className={classes.title}>Sobre</Text>
            <Text
              className={classes.link}
              component="a"
              href="/equipe"
            >
              Nossa equipe
            </Text>
            <Text
              className={classes.link}
              component="a"
              href="/valores"
            >
              Nossa equipe
            </Text>
          </div>
          <div className={classes.wrapper}>
            <Text className={classes.title}>Legal</Text>
            <Text
              className={classes.link}
              component="a"
              href="/politica-privacidade"
            >
              Produtos
            </Text>
          </div>

        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2023 Angels Audiovisual. Todos os direitos reservados.
        </Text>

        <Group gap={10} className={classes.social} justify="flex-end" wrap="nowrap">
          <a target="blank" rel="noreferrer noopener" title="Link para o número do CEO" href="https://wa.me/5512991877910?text=Ol%C3%A1%2C+Diogo+podemos+conversar%3F+Consegui+seu+n%C3%BAmero+pelo+site.">
            <FaWhatsapp color="black" />
          </a>
          <a target="blank" rel="noreferrer noopener" title="Link para a página do Facebook" href="https://www.facebook.com/angelsaudiovisual">
            <FaFacebook color="black" />
          </a>
          <a target="blank" rel="noreferrer noopener" title="Link para o perfil do Pinterest" href="https://br.pinterest.com/angelsaudiovisual/">
            <FaPinterest color="black" />
          </a>
          <a target="blank" rel="noreferrer noopener" title="Link para o perfil do Instagram" href="https://www.instagram.com/angelsaudiovisual/">
            <FaInstagram color="black" />
          </a>
          <a target="blank" rel="noreferrer noopener" title="Link para o perfil do TikTok" href="https://www.tiktok.com/@angelsaudiovisual">
            <FaTiktok color="black" />
          </a>
        </Group>
      </Container>
    </footer>
  );
}
