'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import {
  TextInput,
  Button,
  Divider,
  Group,
} from '@mantine/core';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

import signIn, { signInWithGoogle, signInWithFacebook } from '@/firebase/auth/signin';

export default function Page() {
  const router = useRouter();

  const handleFacebook = async () => {
    await signInWithFacebook();

    return router.push('/perfil');
  };

  const handleGoogle = async () => {
    await signInWithGoogle();

    return router.push('/perfil');
  };

  const handleForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
    };
    await signIn(target.email.value);
    return router.push('/perfil');
  };

  return (
    <div>
      <Group grow mb="md" mt="md">
        <Button onClick={handleFacebook} leftSection={<FaFacebook />}>Logar com o Facebook
        </Button>
        <Button onClick={handleGoogle} rightSection={<FaGoogle />}>Logar com o Google
        </Button>
      </Group>
      <Divider label="Ou continue com seu email" labelPosition="center" my="lg" />
      <h1>Entrar</h1>
      <form onSubmit={handleForm} className="form">
        <TextInput
          label="Seu email"
          type="email"
          name="email"
          aria-label="Digite seu email" // for screen readers
          placeholder="nome@email.com.br"
          required
        />
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
}
