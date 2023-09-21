import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  Box,
  Anchor,
} from '@mantine/core';
import { FaSun, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';
import classes from './ContactUs.module.css';

export default function Page() {
  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contate-nos</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Responderemos em 24 horas.
          </Text>
          <div className={classes.wrapper}>
            <Box mr="md">
              <FaRegEnvelope />
            </Box>

            <div>
              <Text size="xs" className={classes.title}>
                Email
              </Text>
              <Text className={classes.description}>diogo@angelsaudiovisual.com</Text>
            </div>
          </div>
          <div className={classes.wrapper}>
            <Box mr="md">
              <FaWhatsapp />
            </Box>

            <div>
              <Text size="xs" className={classes.title}>
                WhatsApp
              </Text>
              <Anchor href="https://wa.me/5512991877910?text=Olá, Angels! Podem me ajudar?" target="_blank" className={classes.description}>(12)99187-7910</Anchor>
            </div>
          </div>
          <div className={classes.wrapper}>
            <Box mr="md">
              <FaSun />
            </Box>

            <div>
              <Text size="xs" className={classes.title}>
                Horário de Atendimento
              </Text>
              <Text className={classes.description}>8a.m. - 11p.m.</Text>
            </div>
          </div>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="seu@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Nome"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Mensagem"
            placeholder="Eu quero saber mais sobre..."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control}>Enviar mensagem</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
