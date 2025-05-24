import localFont from 'next/font/local';
import {Poppins, IBM_Plex_Mono, Instrument_Serif } from 'next/font/google';

// Primary Font: W95FA (Windows 95 Font)
export const priFont = localFont({
  src: '../../public/fonts/W95FA.otf',
  variable: '--font-pri',
  display: 'swap',
});

// Secondary Font: Louize
export const secFont = localFont({
  src: '../../public/fonts/Louize.ttf',
  variable: '--font-sec',
  display: 'swap',
});

// Tertiary Font: Poppins from Google
export const triFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-tri',
  display: 'swap',
});

// Fourth Font: IBM Plex Mono from Google
export const fourFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-four',
  display: 'swap',
});

// Fifth Font: Instrument Serif from Google
export const fiveFont = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'], // Instrument Serif only has a regular 400 weight
  variable: '--font-five',
  display: 'swap',
});