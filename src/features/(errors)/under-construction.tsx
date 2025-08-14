import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Hammer, Home, Search } from 'lucide-react';

export const Route = createFileRoute('/(errors)/under-construction')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='min-h-screen bg-white flex items-center justify-center p-4'>
      <div className='max-w-md mx-auto text-center space-y-8'>
        {/* Icon */}
        <div className='flex justify-center'>
          <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center'>
            <Hammer className='h-8 w-8 text-blue-600' />
          </div>
        </div>

        {/* Main content */}
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold text-gray-900'>
            Under Construction
          </h1>

          <p className='text-gray-600 leading-relaxed'>
            We're working hard to bring you something amazing. The site will be
            back online soon.
          </p>
        </div>

        {/* Action buttons */}
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <Button className='bg-gray-900 hover:bg-gray-800 text-white'>
            <Home className='h-4 w-4 mr-2' />
            Go Home
          </Button>

          <Button
            variant='outline'
            className='border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent'
          >
            <Search className='h-4 w-4 mr-2' />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
