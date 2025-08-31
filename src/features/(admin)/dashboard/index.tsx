import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(admin)/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>Hello "/(admin)/(dashboard)/"!</div>
      <div>
        <Button>OK nè</Button>
      </div>
    </div>
  );
}
