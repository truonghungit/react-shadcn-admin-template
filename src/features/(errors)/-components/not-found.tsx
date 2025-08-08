import { Button } from '@/components/ui/button';
import { FileQuestion, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='text-center space-y-6'>
          <div className='mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center'>
            <FileQuestion className='w-8 h-8 text-blue-600' />
          </div>

          <div className='space-y-2'>
            <h2 className='text-4xl font-semibold'>Page Not Found</h2>
            <p className='text-muted-foreground leading-relaxed'>
              The page you're looking for doesn't exist. It might have been
              moved, deleted, or you entered the wrong URL.
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
              asChild
            >
              <a href='/search'>
                <Search className='w-4 h-4 mr-2' />
                Search
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
