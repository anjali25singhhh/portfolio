
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					blue: '#00f0ff',
					purple: '#8b5cf6',
					pink: '#d946ef',
					cyan: '#0ea5e9',
				},
				dark: {
					DEFAULT: '#121212',
					lighter: '#1a1a1a',
					card: '#1e1e1e',
					border: '#333333',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				glow: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'neon-pulse': {
					'0%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.7), 0 0 10px rgba(0, 240, 255, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.9), 0 0 30px rgba(0, 240, 255, 0.7)' },
					'100%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.7), 0 0 10px rgba(0, 240, 255, 0.5)' }
				},
				typing: {
					from: { width: '0' },
					to: { width: '100%' }
				},
                blink: {
                    '0%, 100%': { borderColor: 'transparent' },
                    '50%': { borderColor: 'hsl(var(--primary))' }
                },
				'text-shimmer': {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' }
				},
				'background-pan': {
					from: { backgroundPosition: '0% center' },
					to: { backgroundPosition: '-200% center' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				glow: 'glow 2s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 2s infinite',
				typing: 'typing 3.5s steps(40, end)',
				blink: 'blink 1s step-end infinite',
				'text-shimmer': 'text-shimmer 2.5s ease-out infinite alternate',
				'background-pan': 'background-pan 3s linear infinite',
				float: 'float 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'cyber-grid': 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)'
			},
			backdropFilter: {
				'blur-10': 'blur(10px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
