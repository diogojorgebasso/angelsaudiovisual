"use client";
import React from "react";
import signUp from "../../firebase/auth/signup";

import {signUpWithFacebook} from "../../firebase/auth/signup";

import { useRouter } from "next/navigation";
import { TextInput, Button, Box, Code } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validate: {
      name: (value) =>
        value.length < 4 ? "Nomes tem que ter quatro letras" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email Inválido"),
      password: (value) => (value.length < 8 ? "Mínimo de 8 caracteres" : null),
    },
  });

  const handleFacebook = async () => {

    const { result, error } = await signUpWithFacebook();

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/perfil");
  }
  
  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/perfil");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Cadastrar</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="senha">
            <p>Senha</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Se inscrever</button>
          <Button onClick={handleFacebook}>Se inscrever com o Face</Button>
        </form>
      </div>
    </div>
  );
}
