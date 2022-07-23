import {
  RiAddCircleLine,
  RiFlashlightLine,
  RiTimeFill,
  RiDeleteBinLine,
} from 'react-icons/ri';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Icon,
  HStack,
  Modal,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Task } from './Task';
import { useEffect, useState } from 'react';

export const TaskTable = ({ isLogin }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!isLogin) return;
    // TODO: ログイン状態を確認してDBにデータを取りに行く
    setTasks([
      {
        task: '花に水をやる',
        isActive: false,
        limit: 60 * 4,
        activity: [30, 43, 12],
        id: 1,
      },
      {
        task: '犬を散歩に連れて行く',
        isActive: true,
        limit: 60 * 1,
        activity: [32],
        id: 2,
      },
      {
        task: '本を読み終える',
        isActive: false,
        limit: 60 * 25 + 20,
        activity: [10, 43, 12],
        id: 3,
      },
      {
        task: 'タスク名タスク名タスク名タスク名タスク名タスク名タスク名タスク名タスク名タスク名タスク名タスク名タスク名',
        isActive: true,
        limit: 60 * 1,
        activity: [30, 43, 12],
        id: 4,
      },
    ]);
  }, []);

  return (
    <TableContainer
      mt="8"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
    >
      <Table colorScheme="blackAlpha" fontSize="md">
        <Thead>
          <Tr bg="gray.50">
            <Th w="5%" bg="inherit">
              COMPLETE
            </Th>
            <Th w="65%" bg="inherit">
              <HStack>
                <p>TASK</p>
                <Icon
                  as={RiAddCircleLine}
                  css={iconStyle}
                  _hover={{
                    cursor: 'pointer',
                  }}
                  onClick={() => console.log('click')}
                />
              </HStack>
            </Th>
            <Th w="5%" bg="inherit">
              <HStack>
                <Icon as={RiFlashlightLine} css={iconStyle} />
                <p>ACTION</p>
              </HStack>
            </Th>
            <Th w="15%" bg="inherit">
              <HStack>
                <Icon as={RiTimeFill} css={iconStyle} />
                <p>TIME</p>
              </HStack>
            </Th>
            <Th w="10%" bg="inherit">
              <HStack>
                <Icon as={RiDeleteBinLine} css={iconStyle} />
                <p>DELETE</p>
              </HStack>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((item) => {
            return <Task props={item} key={item.id} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
    // modalはフックを使って呼び出せないか？
  );
};

const iconStyle = css({
  width: '16px',
  height: '16px',
});
