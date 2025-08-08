import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(authentication)/reset-password/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(authentication)/reset-password/"!</div>;
}
