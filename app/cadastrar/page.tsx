'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { TextInput, Button, Box, Code, PasswordInput, Switch } from '@mantine/core';
import { FaFacebook, FaGoogle, FaRegEnvelope } from 'react-icons/fa';

import signUp, { signUpWithFacebook, signUpWithGoogle } from '../../firebase/auth/signup';

export default function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
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

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/perfil');
  };

  return (
      <div>
        <Button onClick={handleFacebook} leftSection={<FaFacebook />}>Se inscrever com o Facebook
        </Button>
        <Button onClick={handleGoogle} rightSection={<FaGoogle />}>Se inscrever com o Google
        </Button>
        <h1>Cadastrar</h1>
        <form onSubmit={handleForm} className="form">
        <TextInput
          label="Seu email"
          placeholder="nome@email.com.br"
          rightSection={FaRegEnvelope}
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
