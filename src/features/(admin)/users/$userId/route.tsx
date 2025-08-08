import { createFileRoute, Outlet } from '@tanstack/react-router';
export const Route = createFileRoute('/(admin)/users/$userId')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>Hello "/(admin)/users/$userId/"!</div>
      <div>Layout</div>
      <Outlet />
    </div>
  );
}
