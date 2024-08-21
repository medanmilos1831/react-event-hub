import { ReactEventHubProvider } from 'src/ReactEventHub';
import { PageOne } from 'src/pages';

const App = () => {
  return (
    <ReactEventHubProvider>
      <PageOne />
    </ReactEventHubProvider>
  );
};

export { App };
