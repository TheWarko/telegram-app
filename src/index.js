import _ from 'lodash';
import './assets/scss/style.scss';
import Routing from './assets/js/Routing';
// import {selectCountryPrefix} from './assets/js/Utils';
// import Form from './assets/js/Form';



const App = () => {
    window.location.hash ? Routing(window.location.hash) : Routing('#subscription')

    // selectCountryPrefix('selectCountry','labelCountry')
    // Form()
}


// DOM Load
window.addEventListener('DOMContentLoaded', (event) => {
    App()
})