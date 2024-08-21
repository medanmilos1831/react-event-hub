import { useFireEvent } from 'src/ReactEventHub';

const SideBar = () => {
  const { fireEvent } = useFireEvent();
  let x = 1;
  return (
    <>
      SideBar
      <button
        type="button"
        onClick={() => {
          x += 1;
          fireEvent('someEvent', x);
        }}
      >
        generate event
      </button>
    </>
  );
};

export { SideBar };
