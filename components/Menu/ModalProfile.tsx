"use client";
import React, { useState } from "react";

import {
  Container,
  Avatar,
  Menu,
  Group,
  Burger,
  UnstyledButton,
  Text,
  rem,
} from "@mantine/core";

//icons
import {
  FaHeart,
  FaRegArrowAltCircleDown,
  FaCommentDots,
  FaBookmark,
  FaTrashAlt,
  FaSyncAlt,
  FaPeopleArrows,
  FaSignInAlt,
} from "react-icons/fa";

import { useDisclosure } from "@mantine/hooks";
import cx from "clsx";

import { useAuthContext } from "../../src/context/AuthContext";

//css
import classes from "./ModalProfile.module.css";

export default function ModalProfile() {
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { user } = useAuthContext();

  return (
    <Container className={classes.mainSection} size="md">
      <Group justify="space-between">
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

        <Menu
          width={260}
          position="bottom-end"
          transitionProps={{ transition: "pop-top-right" }}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton
              className={cx(classes.user, {
                [classes.userActive]: userMenuOpened,
              })}
            >
              <Group gap={7}>
                <Avatar
                  src={user?.image}
                  alt={user?.name}
                  radius="xl"
                  size={20}
                />
                <Text fw={500} size="sm" lh={1} mr={3}>
                  {user?.name}
                </Text>
                <FaRegArrowAltCircleDown
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                <FaHeart
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              Propostas curtidas
            </Menu.Item>
            <Menu.Item
              leftSection={
                <FaBookmark
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              Propostas salvas
            </Menu.Item>
            <Menu.Item
              leftSection={
                <FaCommentDots
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              Seus comentários
            </Menu.Item>

            <Menu.Label>Configurações</Menu.Label>
            <Menu.Item
              leftSection={
                <FaSyncAlt
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              Atualizar dados
            </Menu.Item>
            <Menu.Item
              leftSection={
                <FaPeopleArrows
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              Trocar conta
            </Menu.Item>
            <Menu.Item
              leftSection={
                <FaSignInAlt
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              Sair
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Área Perigosa</Menu.Label>
            <Menu.Item
              leftSection={
                <FaSyncAlt
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              Alterar dados
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={
                <FaTrashAlt
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              Deletar conta
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Container>
  );
}
