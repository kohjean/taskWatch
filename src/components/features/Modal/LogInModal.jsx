import { useState } from 'react';
import {
  Button,
  HStack,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

export const LogInModal = ({ isOpen, onClose }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent py="7" px="4" fontWeight="bold">
        <ModalCloseButton />
        <Text>E-mail</Text>
        <Input
          type="email"
          value={mail}
          placeholder="example@sample.com"
          onChange={(e) => setMail(e.target.value)}
        />
        <Text>Password</Text>
        <Input
          type="password"
          value={password}
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <HStack justifyContent="center" my="6">
          <Button background="white" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            background="teal.400"
            color="white"
            onClick={() => console.log(mail, password)}
          >
            Log In
          </Button>
        </HStack>
        <Text textAlign="center" my="2">
          create account
        </Text>
        <Button
          w="6rem"
          margin="0 auto"
          background="teal.400"
          color="white"
          onClick={() => console.log('switch modal')}
        >
          Sign Up
        </Button>
      </ModalContent>
    </Modal>
  );
};
