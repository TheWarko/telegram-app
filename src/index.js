import _ from 'lodash';
import './assets/scss/style.scss';
import Routing from './assets/js/Routing';



const App = () => {

    window.location.hash ? Routing(window.location.hash) : Routing('#subscription')

}


// DOM Load
window.addEventListener('DOMContentLoaded', (event) => {
    App()
})