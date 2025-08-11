import ClassicLayout from '@/layouts/classic/classic-layout';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(admin)')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ClassicLayout>
      <Outlet />
    </ClassicLayout>
  );
}
