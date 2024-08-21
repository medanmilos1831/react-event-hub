import { ContentContainer, SideBar } from 'src/components';

const PageOne = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '20%',
          background: 'green',
        }}
      >
        <SideBar />
      </div>
      <div
        style={{
          width: '80%',
          background: 'red',
        }}
      >
        <ContentContainer />
      </div>
    </div>
  );
};

export { PageOne };
