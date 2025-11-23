export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        metallic: "#C0C0C0",
        futuristic: "#0F172A",
        neonBlue: "#00FFFF",
        neonPink: "#FF00FF",
        neonGreen: "#39FF14",
        neonPurple: "#9B59B6"
      },
      boxShadow: {
        neon: "0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF"
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate"
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF" },
          "50%": { boxShadow: "0 0 20px #00FFFF, 0 0 30px #00FFFF" },
          "100%": { boxShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF" }
        }
      }
    },
  },
  plugins: [],
}