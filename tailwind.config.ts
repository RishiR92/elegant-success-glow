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
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Fira Code', 'monospace']
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-dark': 'var(--gradient-dark)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)'
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
				success: {
					DEFAULT: 'hsl(var(--success))',
					glow: 'hsl(var(--success-glow))'
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
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 40px hsl(148 62% 55% / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 60px hsl(148 62% 55% / 0.6)'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'50%': {
						transform: 'translateY(-20px) translateX(10px)'
					}
				},
				'float-slower': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'50%': {
						transform: 'translateY(15px) translateX(-15px)'
					}
				},
				'float-fast': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'50%': {
						transform: 'translateY(-10px) translateX(20px)'
					}
				},
				'drift': {
					'0%': {
						transform: 'translateX(0px) translateY(0px)'
					},
					'100%': {
						transform: 'translateX(50px) translateY(50px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'float-slower': 'float-slower 8s ease-in-out infinite',
				'float-fast': 'float-fast 4s ease-in-out infinite',
				'drift': 'drift 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
