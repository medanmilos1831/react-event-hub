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
  return (
    <div className="contentContainer">
      <h1>ContentContainer Component</h1>
      <span>Listen 'someEvent' event {counter}</span>
    </div>
  );
};

export { ContentContainer };
