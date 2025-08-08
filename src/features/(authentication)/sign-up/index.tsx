import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(authentication)/sign-up/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(authentication)/sign-up/"!</div>;
}
