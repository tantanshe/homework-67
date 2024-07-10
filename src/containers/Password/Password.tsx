import React from 'react';
import {useDispatch} from 'react-redux';
import {addNumber, checkPassword, removeNumber, resetPassword} from './passwordSlice';

const Password = () => {
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
      <div className="password-buttons">
        {buttons.map((num) => (
          <button className="button" onClick={() => {
            buttonClick(num);
          }}>
            {num}
          </button>))}
      </div>
      <button className="button reset" onClick={() => dispatch(resetPassword())}>Reset</button>
    </div>
  );
};

export default Password;