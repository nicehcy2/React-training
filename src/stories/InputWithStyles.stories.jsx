import InputWithStyle from '../04/InputWithStyles';
import '../sass/materialize.scss';

export default {
  title: 'InputWithStyle',
  component: InputWithStyle,
};

export const 기본설정 = {
  args: {
    name: 'name',
  },
};

export const label예제 = {
  args: {
    name: 'name',
    label: '이름',
  },
};

export const value예제 = {
  args: {
    name: 'name',
    label: '이름',
    value: '두잇',
  },
};

export const errorMessage예제 = {
  args: {
    name: 'name',
    label: '이름',
    errorMessage: '이름을 입력해주세요',
  },
};
