import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		backgroundImage: {
			'custom-gradient': 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)',
		},
		images: {
			remotePatterns: [
			  {
				protocol: "https",
				hostname: "assets.aceternity.com",
				port: "", // Leave empty if no specific port is required
				pathname: "/**", // Allow all paths under this domain
			  },
			],
		  },
		colors: {
			background: "var(--background)",
			foreground: "var(--foreground)",
		  },
  		animation: {
  			buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out',
  			border: 'border 4s linear infinite',
  		},
  		keyframes: {
  			buttonheartbeat: {
  				'0%': {
  					'box-shadow': '0 0 0 0 theme("colors.red.500")',
  					transform: 'scale(1)'
  				},
  				'50%': {
  					'box-shadow': '0 0 0 7px theme("colors.red.500/0")',
  					transform: 'scale(1.05)'
  				},
  				'100%': {
  					'box-shadow': '0 0 0 0 theme("colors.red.500/0")',
  					transform: 'scale(1)'
  				}
  			},
  			border: {
  				to: {
  					'--border-angle': '360deg'
  				}
  			},
  		},
  	}
  },
  plugins: [],
} satisfies Config;
