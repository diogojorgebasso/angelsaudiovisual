'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import {
  TextInput,
  Button,
  Switch,
  Divider,
  Group,
} from '@mantine/core';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

import signUp, { signUpWithFacebook, signUpWithGoogle } from '../../firebase/auth/signup';

export default function Page() {
  const router = useRouter();

  const handleFacebook = async () => {
    await signUpWithFacebook();
    return router.push('/perfil');
  };

  const handleGoogle = async () => {
    await signUpWithGoogle();
    return router.push('/perfil');
  };

  const handleForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string },
      nome: { value: string }
    };

    await signUp(target.email.value, target.nome.value);
    return router.push('/perfil');
  };

  return (
    <div>
      <Group grow mb="md" mt="md">
        <Button onClick={handleFacebook} leftSection={<FaFacebook />}>Se inscrever com o Facebook
        </Button>
        <Button onClick={handleGoogle} rightSection={<FaGoogle />}>Se inscrever com o Google
        </Button>
      </Group>
      <Divider label="Ou continue com o email" labelPosition="center" my="lg" />
      <h1>Cadastrar</h1>
      <form onSubmit={handleForm} className="form">
        <TextInput
          label="Seu Nome"
          placeholder="Diogo Jorge Basso"
          required
          name="nome"
          type="text"
        />
        <TextInput
          label="Seu email"
          placeholder="nome@email.com.br"
          type="email"
          name="email"
          required
        />
        <button type="submit">Se inscrever</button>
        <Switch
          defaultChecked
          label="Eu concordo com os termos e condições"
        />
      </form>
    </div>
  );
}
