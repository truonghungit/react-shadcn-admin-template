import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(authentication)/sign-in/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(authentication)/sign-in/"!</div>;
}
