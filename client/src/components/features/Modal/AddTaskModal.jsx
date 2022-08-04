import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  HStack,
  Input,
  Icon,
  Tbody,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from '@chakra-ui/react';
import { RiCalendarLine, RiTimeFill } from 'react-icons/ri';
import { css } from '@emotion/react';

export const AddTaskModal = ({ isOpen, onClose }) => {
  return (
    <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent py="7" px="4">
        <ModalCloseButton />
        <Table colorScheme="blackAlpha" fontSize="md">
          <Thead>
            <Tr bg="gray.50">
              <Th w="70%" bg="inherit">
                <HStack>
                  <Icon as={RiCalendarLine} css={iconStyle} />
                  <p>TASK</p>
                </HStack>
              </Th>
              <Th w="30%" bg="inherit">
                <HStack>
                  <Icon as={RiTimeFill} css={iconStyle} />
                  <p>TIME</p>
                </HStack>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td px="0" borderBottom="none">
                <Input placeholder="task" />
              </Td>
              <Td borderBottom="none">
                <HStack>
                  <NumberInput w="5rem">
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Text>:</Text>
                  <NumberInput w="5rem">
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <HStack justifyContent="flex-end">
          <Button onClick={onClose}>Cancel</Button>
          <Button
            color="white"
            background="teal.400"
            _hover={{
              background: 'teal.600',
            }}
            onClick={() => console.log('post db')}
          >
            Add Task
          </Button>
        </HStack>
      </ModalContent>
    </Modal>
  );
};

const iconStyle = css({
  width: '16px',
  height: '16px',
});
