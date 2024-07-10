import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {addNumber, checkPassword, removeNumber} from './passwordSlice';

const Password = () => {
  const passwordValue = useSelector((state: RootState) => state.password.value);
  const dispatch = useDispatch();
  const buttons = [
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '←',
    '0',
    'E',
  ];

  const buttonClick = (num) => {
    if (num === '←') {
      dispatch(removeNumber());
    } else if (num === 'E') {
      dispatch(checkPassword());
    } else {
      dispatch(addNumber(num));
    }
  };
  return (
    <div>
      <h1>{passwordValue}</h1>
      {buttons.map((num) => (
        <button onClick={() => {
          buttonClick(num);
        }}>
          {num}
        </button>))}
    </div>
  );
};

export default Password;