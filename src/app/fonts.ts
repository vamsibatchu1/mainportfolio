import localFont from 'next/font/local';

// ... other fonts ...

export const digital = localFont({
  src: '../../public/fonts/argentum.otf',
  variable: '--font-digital',
});

export const redditSans = localFont({
  src: '../../public/fonts/RedditSans-Regular.ttf',
  variable: '--font-reddit-sans'
});

export const kilimanjaro = localFont({
  src: '../../public/fonts/kilimanjaro-sans.otf',
  variable: '--font-kilimanjaro'
});

export const doto = localFont({
  src: '../../public/fonts/doto.ttf',
  variable: '--font-doto'
});

export const neueMontreal = localFont({
  src: '../../public/fonts/NeueMontreal-Regular.otf',
  variable: '--font-neue-montreal'
}); 