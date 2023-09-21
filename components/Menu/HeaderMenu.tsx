import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import { FaTv, FaCameraRetro, FaCamera, FaFilm, FaCubes, FaPlane, FaRegArrowAltCircleDown } from "react-icons/fa";
import classes from './HeaderMegaMenu.module.css';

const mockdata = [
  {
    icon: FaCubes,
    title: 'Foto + Vídeo',
    description: 'Faremos a Captação de Imagens e Vídeos do seu evento.',
  },
  {
    icon: FaCamera,
    title: 'Fotografia',
    description: 'Uma imagem vale mais que mil palavras, e nós sabemos disso.',
  },
  {
    icon: FaPlane,
    title: 'Serviços Aéreos',
    description: 'Captamos imagens aéreas com drones de última geração.',
  },
  {
    icon: FaTv,
    title: 'Edição de Vídeo',
    description: 'Tenho um material bruto e preciso de uma edição profissional.',
  },
  {
    icon: FaCameraRetro,
    title: 'Edição de Imagem',
    description: 'Lembra daquela viagem? Vamos deixar suas fotos ainda mais bonitas.',
  },
  {
    icon: FaFilm,
    title: 'Edição para Redes Sociais',
    description: 'As redes sociais são o futuro do marketing, e nós sabemos disso. Pílulas de conteúdo para o seu público.',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image 
          src={"./angels.png"}
          alt='logo da Angels' />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Produtos
                    </Box>
                    <FaRegArrowAltCircleDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Produtos</Text>
                  <Anchor href="/produtos" fz="xs">
                    Ver todos
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                      Quero mais opções
                      </Text>
                      <Text size="xs" c="dimmed">
                        Se as opções acima não te atenderam, clique no botão ao lado e veja mais opções.
                      </Text>
                    </div>
                    <Button component="a"
                      href="/produtos"
                      variant="default">Mais Opções</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
          </Group>

          <Group visibleFrom="sm">
            { isUser ? <>
            <Button variant="default">Entrar</Button>
            <Button>Cadastro</Button>
</> :

          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <FaRegArrowAltCircleDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}



import cx from 'clsx';
import { useState } from 'react';

import classes from './HeaderTabs.module.css';

const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
};
