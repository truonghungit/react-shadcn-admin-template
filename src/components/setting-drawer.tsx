import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { useTheme } from '@/hooks/use-theme';
import type { ThemeScheme, ThemeColor } from '@/hooks/use-theme';

const schemes: ThemeScheme[] = ['light', 'dark', 'system'];
const colors: ThemeColor[] = [
  'neutral',
  'red',
  'blue',
  'green',
  'amber',
  'rose',
  'purple',
  'orange',
  'teal',
  'yellow',
  'violet',
];

export function SettingDrawer() {
  const { scheme, setScheme, color, setColor } = useTheme();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size='icon'
          variant='outline'
          aria-label='Open settings'
          aria-describedby='config-drawer-description'
          className='rounded-full fixed right-4 top-40 z-40'
        >
          <Settings aria-hidden='true' />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <SheetHeader className='pb-0 text-start'>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription className='text-sm text-muted-foreground'>
            Configure your preferences for the application.
          </SheetDescription>
        </SheetHeader>
        <div className='space-y-6 overflow-y-auto px-4'>
          <div>
            <div className='font-semibold'>Scheme:</div>
            <div className='mt-4 grid grid-cols-3 gap-3'>
              {schemes.map((s) => (
                <Button
                  key={s}
                  variant='outline'
                  className='capitalize'
                  onClick={() => setScheme(s)}
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <div className='font-semibold'>Theme:</div>
            <div className='mt-4 grid grid-cols-3 gap-3'>
              {colors.map((c) => (
                <Button
                  key={c}
                  variant='outline'
                  onClick={() => setColor(c)}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
