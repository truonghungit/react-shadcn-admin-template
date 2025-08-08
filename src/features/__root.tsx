import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
  notFoundComponent: () => {
    return <>Not Found</>;
  },
  errorComponent: () => {
    return <>Something went wrong</>;
  },
});
