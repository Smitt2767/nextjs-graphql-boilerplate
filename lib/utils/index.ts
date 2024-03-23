import { type ClassValue, clsx } from 'clsx';
import memoize from 'lodash/memoize';
import { twMerge } from 'tailwind-merge';

type HMS = {
  hours: number;
  minutes: number;
  seconds: number;
};

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const isSSR = () => typeof window === 'undefined';

export const isDevelopmentServer = () => process.env.NODE_ENV === 'development';

// Number Formats

// 0 -> 00 | 7 -> 07
export const twoDigitsFormat = new Intl.NumberFormat('en', {
  minimumIntegerDigits: 2
}).format;

export const secondsToHMS = memoize((totalSeconds: number): HMS => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return { hours, minutes, seconds };
});

export const formatHMS = (hms: HMS): string => {
  const { hours, minutes, seconds } = hms;

  if (hours > 0) return `${hours}:${twoDigitsFormat(minutes)}:${twoDigitsFormat(seconds)}`;
  else return `${minutes}:${twoDigitsFormat(seconds)}`;
};

export const secondsToFormattedHMS = (seconds: number) => formatHMS(secondsToHMS(seconds));
