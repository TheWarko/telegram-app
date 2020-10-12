import _ from 'lodash';
import './assets/scss/style.scss';
import Routing from './assets/js/Routing';


const App = () => {
    Routing('/subscription')
}


// DOM Load
window.addEventListener('DOMContentLoaded', (event) => {
    App();
})
