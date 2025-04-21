import localFont from 'next/font/local';
import { Work_Sans, Inter } from 'next/font/google';

// ... other fonts ...

// Configure Inter
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

// Configure Work Sans
export const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-work-sans'
});

// Commenting out missing fonts
// export const digital = localFont({
//   src: '../../public/fonts/argentum.otf',
//   variable: '--font-digital',
// });

export const redditSans = localFont({
  src: '../../public/fonts/RedditSans.ttf',
  variable: '--font-reddit-sans'
});

// Commenting out missing fonts
// export const kilimanjaro = localFont({
//   src: '../../public/fonts/kilimanjaro-sans.otf',
//   variable: '--font-kilimanjaro'
// });

export const doto = localFont({
  src: '../../public/fonts/doto.ttf',
  variable: '--font-doto'
});

// Commenting out the missing font files
// export const neueMontreal = localFont({
//   src: '../../public/fonts/NeueMontreal-Regular.otf',
//   variable: '--font-neue-montreal'
// }); 

// Commenting out missing fonts
// export const newake = localFont({
//   src: '../../public/fonts/Newake.otf',
//   variable: '--font-newake'
// }); 

export const louize = localFont({
  src: '../../public/fonts/Louize.ttf',
  variable: '--font-louize'
}); 

// Commenting out the missing font file
// export const ppNeueMontrealBook = localFont({
//   src: '../../public/fonts/ppneuemontreal-book.otf',
//   variable: '--font-pp-neue-montreal-book'
// }); 