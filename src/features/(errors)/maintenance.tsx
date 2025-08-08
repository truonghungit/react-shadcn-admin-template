import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Wrench, Clock, Home } from 'lucide-react';

export const Route = createFileRoute('/(errors)/maintenance')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='min-h-screen bg-slate-50 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='text-center space-y-6'>
          <div className='mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center'>
            <Wrench className='w-8 h-8 text-yellow-600' />
          </div>

          <div className='space-y-2'>
            <h2 className='text-2xl font-semibold text-slate-800'>
              Under Maintenance
            </h2>
            <p className='text-slate-600 leading-relaxed'>
              We're currently performing scheduled maintenance to improve your
              experience. We'll be back shortly.
            </p>
          </div>

          <div className='bg-slate-100 rounded-lg p-4 mx-4'>
            <div className='flex items-center justify-center gap-2 text-slate-700'>
              <Clock className='w-4 h-4' />
              <span className='text-sm font-medium'>
                Estimated downtime: 30 minutes
              </span>
            </div>
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

          <p className='text-xs text-slate-500 pt-2'>
            Follow us on social media for real-time updates
          </p>
        </div>
      </div>
    </div>
  );
}
