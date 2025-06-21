import localFont from 'next/font/local';
import {Poppins, IBM_Plex_Mono, Instrument_Serif, Teko, Kode_Mono, Lora, Inter, EB_Garamond, Plus_Jakarta_Sans } from 'next/font/google';

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

// Sixth Font: Devanagari
export const sixFont = localFont({
  src: '../../public/fonts/Devanagari.otf',
  variable: '--font-six',
  display: 'swap',
});

// Teko Font from Google
export const tekoFont = Teko({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-teko',
  display: 'swap',
});

// Kode Mono Font from Google
export const kodeMonoFont = Kode_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-kodemono',
  display: 'swap',
});

// Lora Font from Google
export const loraFont = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

// Inter Font from Google
export const interFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

// EB Garamond Font from Google
export const ebGaramondFont = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

// Jakarta Sans Font from Google
export const jakartaFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-jakarta',
  display: 'swap',
});

