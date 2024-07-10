import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';

const Display = () => {
  const passwordValue = useSelector((state: RootState) => state.password.value);
  const {passwordColor, passwordMessage} = useSelector((state: RootState) => state.password);
  const hiddenValue = passwordValue.replace(/./g, '*');
  return (
    <>
      <div className="display" style={{backgroundColor: passwordColor}}>
        {hiddenValue}
        {passwordMessage}
      </div>
    </>
  );
};

export default Display;