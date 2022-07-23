import { useState, useEffect } from 'react';
import { TaskTable } from './TaskTable';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import {
  Button,
  Flex,
  HStack,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';
dayjs.locale('ja');

export const Top = () => {
  const Day = dayjs();
  const today = Day.format('YYYY/ MM/ DD(ddd)');

  const [isLogin, setIsLogin] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (!isLogin) {
      onOpen();
    }
  }, []);

  return (
    <>
      <Flex justify="space-between">
        <Text fontSize="2xl">{today}</Text>
        <ColorModeSwitcher />
      </Flex>
      <TaskTable isLogin={isLogin} />
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent py="7" px="4" fontWeight="bold">
          <ModalCloseButton />
          <Text>E-mail</Text>
          <Input type="email" />
          <Text>Password</Text>
          <Input type="password" />
          <HStack justifyContent="center" my="6">
            <Button background="white" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              background="teal.400"
              color="white"
              onClick={() => console.log('login')}
            >
              Log In
            </Button>
          </HStack>
          <Text textAlign="center" my="2">
            create acount
          </Text>
          <Button
            w="6rem"
            margin="0 auto"
            background="teal.400"
            color="white"
            onClick={() => console.log('signup')}
          >
            Sign Up
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};
