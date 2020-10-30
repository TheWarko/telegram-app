import _ from 'lodash';
import './assets/scss/style.scss';
import Routing from './assets/js/Routing';
import { isMobile } from './assets/js/Utils';



const App = () => {
    window.location.hash ? Routing(window.location.hash) : localStorage.getItem("subscribed") ? Routing('#contacts') : Routing('#subscription');
    isMobile();
}


// DOM Load
window.addEventListener('DOMContentLoaded', (event) => {
    App()
})