import { useEffect, useState } from 'react';

export type ThemeScheme = 'light' | 'dark' | 'system';
export type ThemeColor =
  | 'neutral'
  | 'blue'
  | 'green'
  | 'amber'
  | 'rose'
  | 'purple'
  | 'orange'
  | 'teal'
  | 'red'
  | 'yellow'
  | 'violet';

const THEME_SCHEME_KEY = 'theme-scheme';
const THEME_COLOR_KEY = 'theme-color';

function getSystemScheme(): ThemeScheme {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

export function useTheme() {
  const [scheme, setScheme] = useState<ThemeScheme>(() => {
    return (localStorage.getItem(THEME_SCHEME_KEY) as ThemeScheme) || 'system';
  });

  const [color, setColor] = useState<ThemeColor>(() => {
    return (localStorage.getItem(THEME_COLOR_KEY) as ThemeColor) || 'neutral';
  });

  useEffect(() => {
    const appliedScheme = scheme === 'system' ? getSystemScheme() : scheme;
    document.documentElement.classList.toggle('dark', appliedScheme === 'dark');
    document.documentElement.classList.toggle(
      'light',
      appliedScheme === 'light'
    );
    localStorage.setItem(THEME_SCHEME_KEY, scheme);
  }, [scheme]);

  useEffect(() => {
    Array.from(document.body.classList)
      .filter((className) => className.startsWith('theme-'))
      .forEach((className) => {
        document.body.classList.remove(className);
      });

    document.body.classList.add(`theme-${color}`);
    localStorage.setItem(THEME_COLOR_KEY, color);
  }, [color]);

  return {
    scheme,
    setScheme,
    color,
    setColor,
  };
}
