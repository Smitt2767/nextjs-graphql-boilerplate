import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const isSSR = () => typeof window === 'undefined';

export const isDevelopmentServer = () => process.env.NODE_ENV === 'development';
