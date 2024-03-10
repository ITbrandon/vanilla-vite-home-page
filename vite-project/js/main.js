import '../css/style.css';
import javascriptLogo from '../images/javascript.svg';
import viteLogo from '../images/vite.svg';
import { setupCounter } from './counter.js';
import dayjs from 'dayjs';
import _ from 'lodash';

const currentDate = dayjs();
const formattedCurrentDate = currentDate.format('MMM DD, YYYY');
const startDate = dayjs('2023-09-05');
const daysSinceStart = currentDate.diff(startDate, 'day');
const array = [1, 2, 3, 4, 5];
const sum = _.sum(array);

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p>Today's date: ${formattedCurrentDate}</p>
    <p>Days since program started on September 5, 2023: ${daysSinceStart}</p>
    <p>${sum}</p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
console.log();