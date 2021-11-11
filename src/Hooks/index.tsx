import { useEffect, useRef } from 'react';

const useInterval = (callback: any, delay: any) => {
  const savedCallback: any = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const usePrevious = (value: any) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
    console.log(222);
  }, [value]);
  console.log(value);
  return ref.current;
};

export { useInterval, usePrevious };
