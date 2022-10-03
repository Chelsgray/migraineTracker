/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#2E9692",
                    
            "secondary": "#3AA4CA",
                    
            "accent": "#B84D50",
                    
            "neutral": "#20313D",
                    
            "base-100": "#FFFFFF",
                    
            "info": "#3ABFF8",
                    
            "success": "#36D399",
                    
            "warning": "#FBBD23",
                    
            "error": "#F87272",
        },
      },
    ],
  },
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
