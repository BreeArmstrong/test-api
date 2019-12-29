import $ from './utils/jquery-like';
import './index.scss';

// Webpack bundles json and js files by default. Check example below
// const wineReviewsStaticJSON = require('../db/wine-reviews');
// console.log(wineReviewsStaticJSON);

console.log('Hello World! This is a bundled file now!!!');
console.log('First dependency: jquery-like: ', $('div'));

console.log('whee!!! Reload! Some more changes ... ');
