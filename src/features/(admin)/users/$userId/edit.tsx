import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(admin)/users/$userId/edit')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(admin)/users/$userId/edit"!</div>;
}
