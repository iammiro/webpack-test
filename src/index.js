import TweenMax from 'gsap';
import moment from 'moment';
import './styles.css';
import './test.sass';


TweenMax.to('h1', 2, {x:100});

const date = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(date);