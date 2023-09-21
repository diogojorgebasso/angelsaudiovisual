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
  const [email, setEmail] = React.useState('');
  const [nome, setNome] = React.useState('');

  const router = useRouter();

  const handleFacebook = async () => {
    const { result, error } = await signUpWithFacebook();

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/perfil');
  };

  const handleGoogle = async () => {
    const { result, error } = await signUpWithGoogle();

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/perfil');
  };

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const { error } = await signUp(email);

    if (error) {
      return console.log(error);
    }

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
        />
        <TextInput
          label="Seu email"
          placeholder="nome@email.com.br"
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
