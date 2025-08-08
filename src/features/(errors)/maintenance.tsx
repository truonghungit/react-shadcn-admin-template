import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Wrench, Home } from 'lucide-react';

export const Route = createFileRoute('/(errors)/maintenance')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='text-center space-y-6'>
          <div className='mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center'>
            <Wrench className='w-8 h-8 text-yellow-600' />
          </div>

          <div className='space-y-2'>
            <h2 className='text-4xl font-semibold'>Under Maintenance</h2>
            <p className='text-muted-foreground leading-relaxed'>
              We're currently performing scheduled maintenance to improve your
              experience. We'll be back shortly.
            </p>
          </div>

          <div className='flex gap-3 pt-4 justify-center'>
            <Button
              variant='outline'
              asChild
            >
              <a href='/'>
                <Home className='w-4 h-4 mr-2' />
                Check Later
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
