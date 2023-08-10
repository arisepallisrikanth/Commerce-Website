/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'lg':{'max':'991px'},
      'xl':{'max':'1200px'},
      'sm':{'max':'767px'},
      'xsm':{'max':'550px'},
      'md':{'max':'375px'}
    }
  },
  plugins: [],
}
