import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';

const Password = () => {
  const passwordValue = useSelector((state: RootState) => state.password.value)
  const dispatch = useDispatch();
  return (
    <div>
      
    </div>
  );
};

export default Password;