import _ from 'lodash';
import './assets/scss/style.scss';
import Routing from './assets/js/Routing';
import Subscription from './assets/js/Subscription';



const App = () => {
    localStorage.getItem("subscribed") 
    window.location.hash ? Routing(window.location.hash) : localStorage.getItem("subscribed") ? Routing('#contacts') : Routing('#subscription')
}


// DOM Load
window.addEventListener('DOMContentLoaded', (event) => {
    App()
})