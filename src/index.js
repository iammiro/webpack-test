import TweenMax from 'gsap';

import moment from 'moment';

TweenMax.to('h1', 2, {x:100});

console.log((moment().format('MMMM Do YYYY, h:mm:ss a')));