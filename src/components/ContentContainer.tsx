import { useState } from 'react';
import { useOnEvent } from 'src/ReactEventHub';

const ContentContainer = () => {
  const [counter, setCounter] = useState(0);
  useOnEvent({
    event: 'someEvent',
    handler: (data) => {
      setCounter(data);
    },
  });
  return <>ContentContainer {counter}</>;
};

export { ContentContainer };
