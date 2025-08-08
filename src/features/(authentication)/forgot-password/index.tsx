import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(authentication)/forgot-password/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(authentication)/forgot-password/"!</div>;
}
