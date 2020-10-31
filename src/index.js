import _ from 'lodash';
import './assets/scss/style.scss';
import Routing from './assets/js/Routing';
import Subscription from './assets/js/Subscription';
import { isMobile } from './assets/js/Utils';



const App = () => {
    window.location.hash ? Routing(window.location.hash,null,true) : localStorage.getItem("subscribed") ? Routing('#contacts',null,true) : Routing('#subscription',null,true);
    isMobile();
}


// DOM Load
window.addEventListener('DOMContentLoaded', (event) => {
    App()
})