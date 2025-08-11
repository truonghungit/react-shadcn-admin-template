import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/(admin)/')({
  beforeLoad: () => {
    throw redirect({ to: '/dashboard' });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(admin)/"!</div>;
}
