import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(authentication)')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>Hello "/(authentication)"!</div>
      <Outlet />
    </div>
  );
}
