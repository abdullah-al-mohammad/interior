// jQuery(document).ready(function($) {
//     $(".counter").counterUp({
//       delay: 10, /* The delay in milliseconds per number count up */
//       time: 3000, /*The total duration of the count up animation */
//       offset: 100, 
//       /*The viewport percentile from which the counter starts (by default it's 100, meaning it's triggered at the very moment the element enters the viewport) */
//     });
//   });


// cimport { CountUp } from './js/countUp.min.js';

// window.onload = function() {
//   var countUp = new CountUp('target', 2000);
//   countUp.start(0);
// }
const countUp = new CountUp('targetId', 5234);
if (!countUp.error) {
  countUp.start();
} else {
  console.error(countUp.error);
}