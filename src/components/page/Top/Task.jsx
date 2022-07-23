import { Tr, Td, Checkbox, Button, Input } from '@chakra-ui/react';

export const Task = ({ props }) => {
  const { task, isActive, limit, activity } = props;
  const formatHourTime = (totalMinute) => {
    const _hour = Math.floor(totalMinute / 60);
    const hour = _hour >= 10 ? _hour : '0' + _hour;
    const _minute = totalMinute % 60;
    const minute = _minute >= 10 ? _minute : '0' + _minute;
    // FIXME: zero padding の処理は関数化して外部に切り出した方がいいかも
    return `${hour}:${minute}`;
  };

  return (
    <Tr>
      <Td textAlign={'center'}>
        <Checkbox onClick={() => console.log('toggle')} />
      </Td>
      <Td>
        <Input value={task} />
      </Td>
      <Td>
        <Button
          w="6rem"
          background={isActive ? 'blue.400' : 'teal.400'}
          _hover={{
            background: isActive ? 'blue.600' : 'teal.600',
          }}
          color="white"
          variant="solid"
        >
          {isActive ? 'STOP' : 'START'}
        </Button>
      </Td>
      <Td>
        {formatHourTime(activity.reduce((acc, record) => acc + record, 0))}/{' '}
        {formatHourTime(limit)}
      </Td>
      <Td>
        <Button
          size="md"
          background="red.400"
          _hover={{
            background: 'red.600',
          }}
          color="white"
          variant="solid"
        >
          DELETE
        </Button>
      </Td>
    </Tr>
  );
};
