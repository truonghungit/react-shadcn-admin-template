import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ShieldX, Home, ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/(errors)/access-denied')({
  component: RouteComponent,
});

function RouteComponent() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className='h-svh flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='text-center space-y-6'>
          <div className='mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center'>
            <ShieldX className='w-8 h-8 text-red-600' />
          </div>

          <div className='space-y-2'>
            <h2 className='text-4xl font-semibold '>Access Denied</h2>
            <p className='text-muted-foreground leading-relaxed'>
              You don't have permission to access this resource. Contact your
              administrator if you believe this is an error.
            </p>
          </div>

          <div className='flex gap-3 pt-4 justify-center'>
            <Button asChild>
              <a href='/'>
                <Home className='w-4 h-4 mr-2' />
                Go Home
              </a>
            </Button>
            <Button
              variant='outline'
              onClick={handleGoBack}
            >
              <ArrowLeft className='w-4 h-4 mr-2' />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
