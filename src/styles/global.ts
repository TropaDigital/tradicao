'use client';

import { createGlobalStyle } from 'styled-components';
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}



:root {
  /*SCROLLBAR */
  --scrollbar-size: 10px;

  /*========== Colors ==========*/

  //Color-Primary
  --primary: #0036C6;
  --primary-mid: #213365;
  --primary-dark: #152347;
  --primary-light: #3E65D0;

  //Color-Secundary
  --secondary: #00D35E;
  --secondary-dark: #195434;
  --secondary-light: #42DB87;

  //Status-Color
  --status-success: #06D6A0;
  --status-danger: #E62965;
  --status-waring: #FAAE42;
  --status-info: #039BE5;

  //Gray-Color
  --gray-100: #F8F9FA;
  --gray-200: #E9ECEF;
  --gray-300: #DEE2E6;
  --gray-400: #CED4DA;
  --gray-500: #ADB5BD;
  --gray-600: #6C757D;
  --gray-700: #495057;
  --gray-800: #343A40;
  --gray-900: #212529;

  --dark: #242526;
  --light: #EEEEEE;
  --white: #FFFFFF;
  --black: #000000;
  --background-primary: #ffffff;
  --background-secondary: #F6F7FB;

  //Others-Colors
  --Purple: #8269B2;
  --Blue: #37C3FF;
  --Green: #93E088;
  --Orange: #FFA981;
  --Red: #F92B60;
  --Yellow: #FFD66E;

  //Degrade
  --degrade-primary: linear-gradient(77.17deg, #0036C6 -0.7%, #3E65D0 93.94%);
  --degrade-secondary: linear-gradient(77.17deg, #00D35E -0.7%, #42DB87 93.94%);
  --degrade-green: linear-gradient(250.88deg, #93E088 0%, #73B969 97.63%);
  --degrade-purple: linear-gradient(250.88deg, #8269B2 0%, #533D80 97.63%);
  --degrade-blue: linear-gradient(250.88deg, #37C3FF 0%, #2C98C6 97.63%);
  --degrade-red: linear-gradient(250.88deg, #F92B60 0%, #8E0C2E 97.63%);
  --degrade-yellow: linear-gradient(250.88deg, #FFD66E 0%, #BE9F51 97.63%);

  //Typography-color
  --title-color: #222222;
  --title-color-light: #DEE2E6;
  --text-color: #222222;
  --text-color-light: #6C757D;

  //Shadow

  --shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  --shadow-light: 0px 4px 4px rgba(0, 0, 0, 0.01);

  /*========== Fonts ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  /* --body-font: 'Poppins', sans-serif; */

  --h1-font-size: 2.5rem; // 45px
  --h2-font-size: 2rem; // 32px
  --h3-font-size: 1.75rem; // 28px
  --h4-font-size: 1.5rem; // 24px
  --h5-font-size: 1.25rem; // 20px
  --h6-font-size: 1rem; // 16px

  --normal-font-size: .938rem; // 15px
  --small-font-size: .875rem; // 14px
  --smaller-font-size: .75rem;  // 12px

  /*========== Font weight ==========*/
  --font-medium: 400;
  --font-bold: 700;

  /*========== NEW-TOKENS ==========*/

  /*========== Fonts ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --body-font: 'Ubuntu', sans-serif;

  --text-smal-xs: 0.75rem; // 12px
  --text-smal-sm: 0.875rem; // 14px
  --text-smal-md: 1rem; // 16px
  --text-smal-lg: 1.125rem; // 18px
  --text-smal-xl: 1.25rem; // 20px
  --text-headline-sm: 1.5rem; // 24px
  --text-headline-md: 1.875rem; // 30px
  --text-headline-lg: 2.25rem; // 36px
  --text-headline-lgx: 2.5rem; // 40px
  --text-display-sm: 3rem; // 48px
  --text-display-md: 3.75rem; // 60px
  --text-display-lg: 4.5rem; // 72px

  /*========== Font weight ==========*/

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
}

html {
    scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  background: var(--background);

}

body, input, textarea, button {
  font-family: var(--body-font);
  font-weight: 400;
}

table {
  border-collapse: separate !important;
}

input, button, textarea, select {
  font: inherit;
}

a {
  text-decoration: none;
}

ul{
    list-style: none;
}

img{
    max-width: 100%;
    height: auto;
}

button{
    cursor: pointer;
    border: none;
    outline: none;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  font-family: var(--body-font);
  color: var(--gray-800);
  font-weight: 400;
}

strong {
  font-weight: var(--weight-bold);
  /* color: var(--gray-600); */
}

fieldset {
  margin-top: 1rem;
  min-inline-size: auto;
  border: 0;
}

legend {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
  font-size: var(--text-smal-sm);
  font-weight: var(--weight-bold);
  text-align: center;
  color: #0036C6;
}

 // font-size: 16px (desktop)
 html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
    scroll-behavior: smooth;
  }
  // REM = 1rem = 16px
  button {
    cursor: pointer;
  }

// RANGE
  .SliderRoot {
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    width: 100%;
    height: 20px;
  }

  .SliderRoot:hover {
    /* background-color: #3E65D0; */
    cursor: pointer;
  }

  .SliderTrack {
    background-color: #D9D9D9;
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
    height: 4px;
  }

  .SliderRange {
    position: absolute;
    background-color: #D9D9D9;
    border-radius: 9999px;
    height: 100%;
  }

  .SliderThumb {
    display: block;
    width: 20px;
    height: 20px;
    background-color: white;
    box-shadow: 0 2px 10px #343A40;
    border-radius: 10px;
  }
  .SliderThumb:hover {
    background-color: #3E65D0;
  }
  .SliderThumb:focus {
    outline: none;
    /* box-shadow: 0 0 0 5px transparent; */
    box-shadow: 0 2px 10px #343A40;
  }

`;
