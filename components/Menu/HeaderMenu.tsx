'use client';

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
  Switch,
  Indicator,
} from '@mantine/core';

import Image from 'next/image';
import Link from 'next/link';

import { useDisclosure } from '@mantine/hooks';

import {
  FaTv,
  FaCameraRetro,
  FaCamera,
  FaFilm,
  FaCubes,
  FaPlane,
  FaRegArrowAltCircleDown,
  FaRegMoon,
  FaRegSun,
  FaRegEnvelopeOpen,
} from 'react-icons/fa';

import classes from './HeaderMenu.module.css';

import ModalProfile from './ModalProfile';

import { useAuthContext } from '../../context/AuthContext';

const mockdata = [
  {
    icon: FaCubes,
    title: 'Foto + Vídeo',
    description: 'Fazemos a Captação de Imagens e Vídeos do seu evento.',
    destination: '/produtos/foto-video',
  },
  {
    icon: FaCamera,
    title: 'Fotografia',
    description: 'Uma imagem vale mais que mil palavras, e nós sabemos disso.',
    destination: '/produtos/fotografia',
  },
  {
    icon: FaPlane,
    title: 'Serviços Aéreos',
    description: 'Visão superiora do seu evento.',
    destination: '/produtos/servicos-aereos',
  },
  {
    icon: FaTv,
    title: 'Edição de Vídeo',
    description:
      'Tem um material bruto e precisa de uma edição profissional?',
    destination: '/produtos/edicao-de-video',
  },
  {
    icon: FaCameraRetro,
    title: 'Edição de Imagem',
    description:
      'Lembra daquela viagem? Vamos deixar suas fotos ainda mais marcantes.',
    destination: '/produtos/edicao-de-imagem',
  },
  {
    icon: FaFilm,
    title: 'Edição para Redes Sociais',
    description:
      'Pílulas de conteúdo para o seu público.',
    destination: '/produtos/editor-redes-sociais',
  },
];

export function HeaderMenu() {
  const { user } = useAuthContext();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <a href={item.destination} className={classes.link}>
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon
              style={{ width: rem(22), height: rem(22) }}
              color={theme.colors.blue[6]}
            />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </a>
      </Group>
    </UnstyledButton>
  ));

  const sunIcon = (
    <FaRegSun
      style={{ width: rem(16), height: rem(16) }}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <FaRegMoon
      style={{ width: rem(16), height: rem(16) }}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image
            src="/angels.png"
            width={50}
            height={50}
            alt="logo da Angels"
          />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>  {/* Trocar Home por outra página ou tirar daí */}
              Home
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="/produtos" className={classes.link}>
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
                        Tem um evento com demandas específicas?
                      </Text>
                    </div>
                    <Button component={Link} href="/produtos/pedido-personalizado" variant="default">Orçamento Personalizado</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="/clientes" className={classes.link}>
              Nossos clientes
            </a>
            <a href="/sobre" className={classes.link}>
              Sobre Nós
            </a>
          </Group>

          <Group visibleFrom="sm">
            {!user ? (
              <>
                <Button
                  component="a"
                  href="/entrar"
                  variant="default"
                >Entrar
                </Button>
                <Button
                  component="a"
                  href="/cadastrar"
                >Cadastrar
                </Button>
              </>
            ) : (
              <ModalProfile />
            )}
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
                Produtos
              </Box>
              <FaRegArrowAltCircleDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="/clientes" className={classes.link}>
            Nossos Clientes
          </a>
          <a href="/sobre" className={classes.link}>
            Sobre Nós
          </a>

          <Divider my="sm" />
          <Indicator inline processing size={12}>
            <FaRegEnvelopeOpen />
          </Indicator>
          <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />
          <Group justify="center" grow pb="xl" px="md">
            {user ? (
              <>
                <Button
                  component="a"
                  href="/entrar"
                  variant="default"
                >Entrar
                </Button>
                <Button
                  component="a"
                  href="/cadastrar"
                >Cadastrar
                </Button>
              </>
            ) : (
              <ModalProfile />
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
