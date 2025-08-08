import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routes/root';

const router = createRouter({ routeTree });

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
