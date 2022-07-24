import { useState, useEffect } from 'react';
import { TaskTable } from './TaskTable';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { Flex, Text, useDisclosure } from '@chakra-ui/react';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { LogInModal } from 'components/features/Modal';

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
      <LogInModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
