import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(admin)/contacts/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(admin)/contacts/"!</div>;
}
