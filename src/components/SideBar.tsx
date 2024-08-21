import { useFireEvent } from 'src/ReactEventHub';

const SideBar = () => {
  const { fireEvent } = useFireEvent();
  let x = 1;
  return (
    <div className="sideBar">
      <h1>SideBar Component</h1>
      <button
        type="button"
        onClick={() => {
          x += 1;
          fireEvent('someEvent', x);
        }}
      >
        generate event called 'someEvent'
      </button>
    </div>
  );
};

export { SideBar };
