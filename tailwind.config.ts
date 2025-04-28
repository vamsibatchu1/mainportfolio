import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate"

export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,astro}",
    "./pages/**/*.{js,ts,jsx,tsx,astro}",
    "./components/**/*.{js,ts,jsx,tsx,astro}",
    "./app/**/*.{js,ts,jsx,tsx,astro}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  		  'pri': ['var(--font-pri)'],
  		  'sec': ['var(--font-sec)'],
  		  'tri': ['var(--font-tri)'],
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			black: '#000000',
  			white: '#FFFFFF',
  			zenith: '#FBAF1D',
  			nebula: '#E29FC8',
  			juniper: '#4F7834',
  			breeze: '#90D9E0',
  			paprika: '#F25A3F',
  			'primary-orange': '#CA2625',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
        'card': 'var(--card-corner-radius)'
  		},
      width: {
        'card-white': 'var(--card-white-width)',
        'card-translucent': 'var(--card-translucent-width)',
      },
      height: {
        'card-small': 'var(--card-small-height)',
        'card-regular': 'var(--card-regular-height)',
      },
      gap: {
        'card': 'var(--card-gap)',
      },
  		animation: {
  			grid: 'grid 15s linear infinite',
  			'play-once': 'playOnce 1s steps(1) forwards'
  		},
  		keyframes: {
  			grid: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			playOnce: {
  				'0%': { animationPlayState: 'running' },
  				'100%': { animationPlayState: 'running' }
  			}
  		},
  		transitionProperty: {
  			height: 'height',
  			spacing: 'margin, padding'
  		},
  		gridTemplateColumns: {
  			'16': 'repeat(16, minmax(0, 1fr))',
  		},
  	}
  },

  plugins: [animate],
} satisfies Config;
