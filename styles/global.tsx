import { createGlobalStyle } from 'styled-components';
import { CLOUDINARY_URL } from '../config';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-grey-transparent: rgba(105,100,29,.5);
    --color-white-transparent: rgba(255,255,255,0.5);
    --color-blue-opposite: hsla(398, 95%, 75%, 0.5);
    --color-grey: #595959;
    --color-grey-dark: #222222;
    --color-grey-light: #EEEEEE;
    --color-red: #a20000;
    --color-RED: #A20000;
    --color-green: #027500;
    --color-green-dark: #3e6b0a;
    --color-green-dark-transparent: #3e6b0abf;
    --color-yellow: #d08c0f;
    --color-tan: #ecd6b3;
    --color-brown: #584426;
    --box-shadow: 2px 2px 15px 0px rgba(50,50,50,1);

    --max-width: 1600px;

    --modular1: 1.125;
    --modular2: 1.35;

    --startwidth: 30;
    --endwidth:105;

    //need these numbers for h6 and p without units for calc.
    --base-min: 1.15;
    --base-max:1.5;

    
    --h1-responsive: calc(var(--h1-size) + ((var(--modular2) * var(--modular2) * var(--modular2) * var(--modular2) * var(--modular2)) - (var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));
    --h2-responsive:calc(var(--h2-size) + ((var(--modular2) * var(--modular2) * var(--modular2) * var(--modular2)) - (var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));
    --h3-responsive:calc(var(--h3-size) + ((var(--modular2) * var(--modular2) * var(--modular2)) - (var(--modular1) * var(--modular1) * var(--modular1))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));
    --h4-responsive:calc(var(--h4-size) + ((var(--modular2) * var(--modular2)) - (var(--modular1) * var(--modular1))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));    
    --h5-responsive:calc(var(--h5-size) + ((var(--modular2)) - (var(--modular1))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));
    --h6-responsive:calc(var(--h6-size) + ((var(--base-max)) - (var(--base-min))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));
    --p-responsive:calc(var(--p-size) + ((var(--base-max)) - (var(--base-min))) * ((100vw - (var(--startwidth) * 1em)) / (var(--endwidth) - var(--startwidth))));

    //Initially I wanted to use an expression like this, and just change the font-min and font-max for each header:
    //--fontsize-responsive:calc(var(--font-min) * 1rem + ((var(--font-max)) - (var(--font-min))) * ((100vw - (var(--startwidth) * 1rem)) / (var(--endwidth) - var(--startwidth))));
    //But I needed a unit to use calc, and font-min and font-max could not be calculated without a unit. For the above to work, they needed to be unitless. Perhaps there is a way around this?

    --h1-size: calc(var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1) * 1em);

    --h2-size: calc(var(--modular1) * var(--modular1) * var(--modular1) * var(--modular1) * 1em);

    --h3-size: calc(var(--modular1) * var(--modular1) * var(--modular1) * 1em);

    --h4-size: calc(var(--modular1) * var(--modular1) * 1em);

    --h5-size: calc(var(--modular1) * 1em);

    --h6-size:calc(var(--base-min) * 1em);

    --p-size:calc(var(--base-min) * 1em);
  }
  html {
    font-size: 10px;
    min-height: 100vh;
    font-family: 'Raleway', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    background: url('${CLOUDINARY_URL}/assets/sky.png') no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`;