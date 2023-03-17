import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetings/Greetings';

function Greeting() {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);
  return (
    <div>
      <h1 className='Greeting'>{greetings}</h1>
    </div>
  );
}

export default Greeting;