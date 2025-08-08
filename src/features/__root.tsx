import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import NotFound from './(errors)/-components/not-found';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
  notFoundComponent: NotFound,
  errorComponent: () => {
    return <>Something went wrong</>;
  },
});
